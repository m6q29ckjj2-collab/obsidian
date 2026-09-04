/*
  Позиционирование выпадающего меню по принципам Floating UI, без самой либы.

  ГЛАВНЫЙ ПРИНЦИП: меню никогда не двигается силами JS во время скролла.
  Вместо этого оно помещается в тот же скроллящийся контекст, что и кнопка,
  и позиционируется absolute в системе координат этого контекста. Дальше
  браузер прокручивает меню вместе с содержимым сам, в том же кадре
  компоновки. JS при скролле не выполняется вообще -> отставать нечему.

  Почему это принципиально: браузер прокручивает контейнер на GPU-потоке
  (асинхронный скроллинг), а событие `scroll` доходит до JS на главный поток
  уже ПОСЛЕ того, как пиксели уехали. Догнать это перепозиционированием
  нельзя ни rAF-ом, ни чем-либо ещё. Поэтому мы и не догоняем.

  Куда именно портировать меню:
    - есть реально скроллящийся предок (overflow auto/scroll) -> в него.
      Меню поедет нативно вместе с содержимым, без JS и без лага.
      Обрезаться по краям контейнера ему не даёт ограничение высоты
      (аналог middleware `size`) + разворот вверх (аналог `flip`).
    - скроллящегося предка нет, есть только обрезающий (overflow: hidden)
      -> портал в <body>, координаты в системе документа. Меню поедет
      нативно вместе со страницей.
*/

// ---------- 1. Поиск контейнеров ----------

// Реально скроллящийся предок: overflow auto/scroll и содержимое не влезает.
// Именно в такой контейнер имеет смысл портировать меню.
function getNearestScrollContainer(el) {
  let node = el.parentElement;

  while (node && node !== document.body && node !== document.documentElement) {
    const style = getComputedStyle(node);
    const overflowY = style.overflowY;
    const overflowX = style.overflowX;

    const scrollsY = /(auto|scroll)/.test(overflowY) && node.scrollHeight > node.clientHeight;
    const scrollsX = /(auto|scroll)/.test(overflowX) && node.scrollWidth > node.clientWidth;

    if (scrollsY || scrollsX) return node;

    node = node.parentElement;
  }

  return null;
}

// Все обрезающие предки (в т.ч. overflow: hidden) — нужны, чтобы понять,
// не уехала ли кнопка из зоны видимости (аналог middleware `hide`).
function getClippingAncestors(el) {
  const result = [];
  let node = el.parentElement;

  while (node && node !== document.body && node !== document.documentElement) {
    const style = getComputedStyle(node);
    const overflow = `${style.overflow}${style.overflowX}${style.overflowY}`;

    if (/(auto|scroll|overlay|clip|hidden)/.test(overflow)) {
      result.push(node);
    }

    node = node.parentElement;
  }

  return result;
}

// ---------- 2. Перевод координат в систему offsetParent'а ----------
// Аналог getRectRelativeToOffsetParent из @floating-ui/dom.

function toOffsetParentCoords(viewportX, viewportY, floating) {
  const offsetParent = floating.offsetParent;

  // offsetParent это <body> со static-позиционированием (или его нет) ->
  // содержащий блок совпадает с документом, достаточно прибавить скролл.
  const bodyIsStatic = getComputedStyle(document.body).position === "static";
  if (!offsetParent || (offsetParent === document.body && bodyIsStatic)) {
    return {
      x: viewportX + window.scrollX,
      y: viewportY + window.scrollY,
    };
  }

  // offsetParent реально позиционирован (наш скролл-контейнер) — вычитаем
  // его положение и прибавляем его внутренний скролл. Именно за счёт
  // прибавленного scrollTop координата оказывается привязана к содержимому
  // контейнера, а не к экрану, и едет вместе с ним нативно.
  const parentRect = offsetParent.getBoundingClientRect();
  return {
    x: viewportX - parentRect.left - offsetParent.clientLeft + offsetParent.scrollLeft,
    y: viewportY - parentRect.top - offsetParent.clientTop + offsetParent.scrollTop,
  };
}

// ---------- 3. Геометрия: offset / flip / shift / size ----------

// Область, за которую меню не должно вылезать: экран, а если меню живёт
// внутри скролл-контейнера — то ещё и видимая часть этого контейнера.
function getBoundaryRect(scrollContainer) {
  const viewport = {
    top: 0,
    left: 0,
    right: document.documentElement.clientWidth,
    bottom: document.documentElement.clientHeight,
  };

  if (!scrollContainer) return viewport;

  const box = scrollContainer.getBoundingClientRect();
  return {
    top: Math.max(viewport.top, box.top),
    left: Math.max(viewport.left, box.left),
    right: Math.min(viewport.right, box.right),
    bottom: Math.min(viewport.bottom, box.bottom),
  };
}

function computeMenuPosition(anchor, floating, scrollContainer, opts = {}) {
  const { gutter = 6, padding = 8, minHeight = 80 } = opts;

  const anchorRect = anchor.getBoundingClientRect();
  const boundary = getBoundaryRect(scrollContainer);

  const floatingWidth = anchorRect.width; // меню по ширине кнопки

  // сколько места есть снизу и сверху внутри границ
  const spaceBelow = boundary.bottom - anchorRect.bottom - gutter - padding;
  const spaceAbove = anchorRect.top - boundary.top - gutter - padding;

  // натуральная высота меню без ограничений
  const naturalHeight = floating.scrollHeight;

  // flip: разворачиваем вверх, если снизу не помещается, а сверху места больше
  const openUpward = naturalHeight > spaceBelow && spaceAbove > spaceBelow;

  // size: ограничиваем высоту доступным местом, чтобы не вылезти за границы
  const available = Math.max(openUpward ? spaceAbove : spaceBelow, minHeight);
  const height = Math.min(naturalHeight, available);

  const viewportY = openUpward
    ? anchorRect.top - height - gutter
    : anchorRect.bottom + gutter;

  // shift: не даём вылезти за левый/правый край границ
  const maxLeft = boundary.right - floatingWidth - padding;
  const viewportX = Math.min(
    Math.max(anchorRect.left, boundary.left + padding),
    Math.max(maxLeft, boundary.left + padding),
  );

  const { x, y } = toOffsetParentCoords(viewportX, viewportY, floating);

  return { x, y, width: floatingWidth, maxHeight: height };
}

// ---------- 4. Аналог middleware `hide` ----------
// Кнопка уехала за пределы обрезающего предка — прятать меню.

function isAnchorClipped(anchor, clippingAncestors) {
  const rect = anchor.getBoundingClientRect();

  return clippingAncestors.some((parent) => {
    const box = parent.getBoundingClientRect();
    return (
      rect.bottom <= box.top ||
      rect.top >= box.bottom ||
      rect.right <= box.left ||
      rect.left >= box.right
    );
  });
}

// ---------- 5. Отслеживание изменений ----------
// Обрати внимание: слушателя `scroll` на скролл-контейнере здесь НЕТ и
// быть не должно. Меню лежит внутри него и едет нативно — пересчитывать
// нечего. Пересчёт нужен только когда меняется геометрия: ресайз окна,
// изменение размеров элементов, скролл страницы (влияет на выбор стороны
// открытия, когда меню портировано в body).

function attachAutoUpdate(anchor, floating, onUpdate) {
  window.addEventListener("resize", onUpdate);
  window.addEventListener("scroll", onUpdate, { passive: true });

  const resizeObserver = new ResizeObserver(onUpdate);
  resizeObserver.observe(anchor);
  resizeObserver.observe(floating);

  onUpdate();

  return function detach() {
    window.removeEventListener("resize", onUpdate);
    window.removeEventListener("scroll", onUpdate);
    resizeObserver.disconnect();
  };
}

// ---------- селект ----------

function initSelect(wrapper) {
  const btn = wrapper.querySelector(".select-btn");
  const menu = wrapper.querySelector(".select-menu");
  const valueEl = wrapper.querySelector(".select-value");

  // запоминаем, откуда взяли меню, чтобы вернуть его на место при закрытии
  const menuPlaceholder = document.createComment("select-menu-slot");
  menu.after(menuPlaceholder);

  let detach = null;
  let scrollContainer = null;
  let clippingAncestors = [];

  function updatePosition() {
    const { x, y, width, maxHeight } = computeMenuPosition(
      btn,
      menu,
      scrollContainer,
      { gutter: 6, padding: 8 },
    );

    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    menu.style.width = `${width}px`;
    menu.style.maxHeight = `${maxHeight}px`;

    menu.classList.toggle(
      "anchor-hidden",
      isAnchorClipped(btn, clippingAncestors),
    );
  }

  function openMenu() {
    wrapper.classList.add("open");

    scrollContainer = getNearestScrollContainer(btn);

    // Портал. Цель зависит от того, есть ли скроллящийся предок:
    //  - есть  -> кладём меню в него, чтобы оно ехало нативно вместе с ним
    //  - нет   -> кладём в body, чтобы обойти overflow:hidden у карточки
    const portalTarget = scrollContainer || document.body;

    // контейнер должен стать offsetParent'ом для меню
    if (portalTarget !== document.body) {
      if (getComputedStyle(portalTarget).position === "static") {
        portalTarget.style.position = "relative";
      }
    }

    portalTarget.appendChild(menu);
    menu.classList.add("portaled");

    // обрезающие предки считаем от кнопки, но исключаем сам контейнер,
    // в который положили меню — оно обрезается им законно и по месту
    clippingAncestors = getClippingAncestors(btn).filter(
      (node) => node !== scrollContainer,
    );

    detach = attachAutoUpdate(btn, menu, updatePosition);
  }

  function closeMenu() {
    wrapper.classList.remove("open");

    if (detach) {
      detach();
      detach = null;
    }

    menu.classList.remove("portaled", "anchor-hidden");
    menu.style.left = "";
    menu.style.top = "";
    menu.style.width = "";
    menu.style.maxHeight = "";

    scrollContainer = null;
    clippingAncestors = [];

    // возвращаем меню туда, откуда взяли
    menuPlaceholder.after(menu);
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrapper.classList.contains("open") ? closeMenu() : openMenu();
  });

  menu.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    valueEl.textContent = li.textContent;

    menu.querySelectorAll("li").forEach((el) => el.classList.remove("active"));
    li.classList.add("active");

    closeMenu();
  });

  // клик снаружи — закрыть. Меню теперь может физически лежать в другом
  // месте DOM, поэтому проверяем оба узла: и обёртку, и само меню
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

document.querySelectorAll(".custom-select").forEach(initSelect);
