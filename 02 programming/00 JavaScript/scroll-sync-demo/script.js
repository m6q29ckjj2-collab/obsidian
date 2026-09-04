// Если браузер умеет CSS Scroll-Driven Animations (animation-timeline: scroll()),
// то CSS уже сам всё синхронизирует со скроллом — JS вообще не нужен, выходим сразу.
// Это самый "нелаговый" вариант: анимация считается в compositor'е браузера,
// а не в JS на главном потоке, и не зависит от частоты scroll-евентов.
const supportsScrollTimeline = CSS.supports("animation-timeline: scroll()");

if (!supportsScrollTimeline) {
  // ---------- Fallback для браузеров без поддержки ----------
  //
  // Ключевая идея: НЕ вешаться на 'scroll' евент и не читать/писать в нём напрямую.
  // Событие scroll браузер может троттлить и присылать реже, чем идёт сама прокрутка —
  // из-за этого элемент будет визуально "отставать" на кадр-два.
  //
  // Вместо этого — rAF-цикл: каждый кадр (в фазе, синхронной с рендером) читаем
  // текущий scrollY и сразу же выставляем transform. Это то же самое, что делает
  // браузер сам под капотом у CSS-варианта, просто руками.

  const progressBar = document.getElementById("progressBar");
  const tracker = document.getElementById("tracker");

  const trackHeight = getComputedStyle(document.documentElement)
    .getPropertyValue("--track-height");
  const trackerSize = getComputedStyle(document.documentElement)
    .getPropertyValue("--tracker-size");

  function update() {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0; // от 0 до 1

    // scaleX для полоски прогресса
    progressBar.style.transform = `scaleX(${progress})`;

    // translateY для шарика — используем реальные пиксели трека
    const trackPx = tracker.parentElement.getBoundingClientRect().height;
    const trackerPx = tracker.getBoundingClientRect().height;
    const offset = (trackPx - trackerPx) * progress;
    tracker.style.transform = `translateY(${offset}px)`;

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
} else {
  console.log("CSS Scroll-Driven Animations поддерживаются — JS не нужен, всё делает CSS.");
}
