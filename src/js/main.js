const menu = document.querySelector(".menu ul"),
  menubtn = document.querySelector(".menu-btn");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  menubtn.classList.toggle("bx-x");
});
