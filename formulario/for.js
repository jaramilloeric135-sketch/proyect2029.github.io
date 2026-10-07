
// =========================
// ELEMENTOS DEL FORMULARIO
// =========================

let consola = document.getElementById("consola");
let modelo = document.getElementById("modelo");

let servicio = document.getElementById("servicio");
let precioServicio = document.getElementById("precioServicio");

let formulario = document.getElementById("formularioServicio");

let volverConsola = document.getElementById("volverConsola");


// =========================
// CAMBIAR MODELOS Y ENLACE
// =========================

consola.addEventListener("change", function() {

    // Limpiar modelos anteriores

    modelo.innerHTML = "";


    // Crear opción inicial

    let opcionInicial = document.createElement("option");

    opcionInicial.value = "";
    opcionInicial.textContent = "Seleccione un modelo";

    modelo.appendChild(opcionInicial);


    // =========================
    // PLAYSTATION
    // =========================

    if (consola.value === "playstation") {

        let modelosPlayStation = [
            "PlayStation 1",
            "PlayStation 2",
            "PlayStation 3",
            "PlayStation 4",
            "PlayStation 5"
        ];


        modelosPlayStation.forEach(function(nombre) {

            let opcion = document.createElement("option");

            opcion.value = nombre;
            opcion.textContent = nombre;

            modelo.appendChild(opcion);

        });


        // Enlace a PlayStation

        volverConsola.href = "../playstation/play.html";
    }


    // =========================
    // XBOX
    // =========================

    if (consola.value === "xbox") {

        let modelosXbox = [
            "Xbox",
            "Xbox 360",
            "Xbox One",
            "Xbox Series X/S"
        ];


        modelosXbox.forEach(function(nombre) {

            let opcion = document.createElement("option");

            opcion.value = nombre;
            opcion.textContent = nombre;

            modelo.appendChild(opcion);

        });


        // Enlace a Xbox

        volverConsola.href = "../xbox/xbox.html";
    }


    // =========================
    // NINTENDO
    // =========================

    if (consola.value === "nintendo") {

        let modelosNintendo = [
            "NES",
            "Super Nintendo (SNES)",
            "Nintendo 64",
            "GameCube",
            "Wii",
            "Wii U",
            "Nintendo Switch",
            "Nintendo Switch 2"
        ];


        modelosNintendo.forEach(function(nombre) {

            let opcion = document.createElement("option");

            opcion.value = nombre;
            opcion.textContent = nombre;

            modelo.appendChild(opcion);

        });


        // Enlace a Nintendo

        volverConsola.href = "../nintendo/ninte.html";
    }


    // Si no se seleccionó ninguna consola

    if (consola.value === "") {

        volverConsola.href = "#";

    }

});


// =========================
// MOSTRAR PRECIO
// =========================

servicio.addEventListener("change", function() {

    if (servicio.value === "") {

        precioServicio.textContent = "Precio: S/ 0";

    } else {

        // Separar servicio y precio

        let datos = servicio.value.split("|");

        let precio = datos[1];

        precioServicio.textContent =
            "Precio del servicio: S/ " + precio;

    }

});


// =========================
// ENVIAR FORMULARIO
// =========================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Solicitud de servicio enviada correctamente.");

});


// =========================
// LIMPIAR FORMULARIO
// =========================

formulario.addEventListener("reset", function() {

    // Restablecer modelos

    modelo.innerHTML = "";

    let opcionInicial = document.createElement("option");

    opcionInicial.value = "";
    opcionInicial.textContent = "Seleccione un modelo";

    modelo.appendChild(opcionInicial);


    // Restablecer precio

    precioServicio.textContent = "Precio: S/ 0";


    // Restablecer enlace

    volverConsola.href = "#";

});

