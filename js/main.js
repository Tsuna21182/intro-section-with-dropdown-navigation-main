const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".header__nav");
const navDropdownBtn = document.querySelector(".nav__dropdown .dropdown__btn");
const dropdownBtn = document.querySelector(".dropdown .dropdown__btn");
const dropContent = document.querySelector(".dropdown__content");
const dropContent2 = document.querySelector(".dropdown__content-2");
const Features = document.querySelector(".features-btn");
const Company = document.querySelector(".company-btn");
const about = document.querySelector(".about");
const careers = document.querySelector(".careers");

// Manejar el menú móvil
menu.addEventListener("click", () => {
  menu.classList.toggle("menu-icon-activo");
  nav.classList.toggle("header__nav-active");
  if (dropdownBtn.classList.contains("active")) {
    dropdownBtn.classList.remove("active");
    navDropdownBtn.classList.remove("active");
    about.classList.remove("active");
    careers.classList.remove("active");
    login.classList.remove("active");
    register.classList.remove("active");
  } else {
    dropdownBtn.classList.add("active");
    navDropdownBtn.classList.add("active");
    about.classList.add("active");
    careers.classList.add("active");
  }
});

// Manejar el dropdown "Features"
navDropdownBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  dropContent.classList.toggle("active");
});

// Manejar el dropdown "Company"
dropdownBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  dropContent2.classList.toggle("active");
});

// Cerrar dropdowns al hacer clic fuera
document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    menu.contains(event.target) ||
    nav.contains(event.target) ||
    Features.contains(event.target) ||
    Company.contains(event.target) ||
    dropContent.contains(event.target) ||
    dropContent2.contains(event.target) ||
    navDropdownBtn.contains(event.target) ||
    dropdownBtn.contains(event.target);

  if (!isClickInsideMenu) {
    // Cerrar menú móvil si está activo
    menu.classList.remove("menu-icon-activo");
    nav.classList.remove("header__nav-active");

    // Cerrar dropdowns si están activos
    dropContent.classList.remove("active");
    dropContent2.classList.remove("active");
  }
});

Features.addEventListener("click", (event) => {
  event.stopPropagation();
  if (Features.classList.contains("active")) {
    dropContent.classList.remove("active");
    Features.classList.remove("active");
  } else {
    dropContent.classList.add("active");
    Features.classList.add("active");
  }
});

Company.addEventListener("click", (event) => {
  event.stopPropagation();
  Company.classList.add("active");
});
