function detectarDispositivo() {
    const anchoPantalla = window.innerWidth;

    if (anchoPantalla <= 767) {
        console.log("Estás en un dispositivo móvil");
    } else if (anchoPantalla >= 768 && anchoPantalla <= 1024) {
        console.log("Estás en una tablet");
    } else {
        console.log("Estás en un desktop");
    }
}

// Ejecutar la función al cargar la página
detectarDispositivo();

// Ejecutar la función al cambiar el tamaño de la ventana
window.addEventListener('resize', detectarDispositivo);
