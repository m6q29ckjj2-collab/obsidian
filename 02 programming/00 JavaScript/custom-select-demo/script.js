const wrapper = document.getElementById("customSelect");
const btn = document.getElementById("selectBtn");
const menu = document.getElementById("selectMenu");
const valueEl = document.getElementById("selectValue");

// открыть/закрыть по клику на кнопку
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  wrapper.classList.toggle("open");
});

// выбор варианта
menu.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  valueEl.textContent = li.textContent;

  menu.querySelectorAll("li").forEach((el) => el.classList.remove("active"));
  li.classList.add("active");

  wrapper.classList.remove("open");
});

// клик снаружи — закрыть
document.addEventListener("click", (e) => {
  if (!wrapper.contains(e.target)) {
    wrapper.classList.remove("open");
  }
});

// Esc — закрыть
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    wrapper.classList.remove("open");
  }
});
