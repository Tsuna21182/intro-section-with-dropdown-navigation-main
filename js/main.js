const menu = document.querySelector(".menu-icon");

menu.addEventListener("click", () => {
  if (menu.classList.contains("menu-icon-activo")) {
    menu.classList.remove("menu-icon-activo");
  } else {
    menu.classList.add("menu-icon-activo");
  }
});
