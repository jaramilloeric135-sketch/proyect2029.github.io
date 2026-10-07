const botones = document.querySelectorAll("article a");

botones.forEach(function(boton) {

```
boton.addEventListener("click", function() {

    const consola = this.parentElement.querySelector("h3").textContent;

    localStorage.setItem("consolaSeleccionada", consola);

});
```

});
