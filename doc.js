document.addEventListener("DOMContentLoaded", function () {


/* =========================
   MENÚ RESPONSIVE
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* =========================
   MENÚ DESPLEGABLE DE CONSOLAS
========================= */

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdown = document.getElementById("myDropdown");

dropdownBtn.addEventListener("click", function () {

    dropdown.classList.toggle("show");

    const abierto = dropdown.classList.contains("show");

    dropdownBtn.setAttribute("aria-expanded", abierto);

});


/* =========================
   CERRAR MENÚ AL HACER CLICK
   FUERA DEL MENÚ
========================= */

document.addEventListener("click", function (event) {

    if (
        !dropdownBtn.contains(event.target) &&
        !dropdown.contains(event.target)
    ) {

        dropdown.classList.remove("show");

        dropdownBtn.setAttribute("aria-expanded", "false");

    }

});


/* =========================
   CERRAR MENÚ MÓVIL
   AL SELECCIONAR UNA OPCIÓN
========================= */

const enlacesMenu = document.querySelectorAll(".nav-menu a");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================
   MODAL DE SERVICIOS
========================= */

const botones = document.querySelectorAll(".btn-card");

const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.querySelector(".close-modal");


botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const tarjeta = boton.closest(".service-card");

        const titulo = tarjeta.querySelector("h3").textContent.trim();

        const descripcion = tarjeta.getAttribute("data-info");

        modalTitle.textContent = titulo;

        modalDescription.textContent = descripcion;

        modal.classList.add("show");

    });

});


/* =========================
   CERRAR MODAL
========================= */

closeModal.addEventListener("click", function () {

    modal.classList.remove("show");

});


/* =========================
   CERRAR MODAL AL HACER
   CLICK FUERA
========================= */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/* =========================
   CERRAR MODAL CON ESC
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});


});
