// Función para alternar la música de Dante o Vergil
function toggleMusica(idMusica, boton) {
    var musica = document.getElementById(idMusica);

    if (musica.paused) {
        musica.play();
        boton.innerHTML = "⏸️ Pausar Música";
    } else {
        musica.pause();
        boton.innerHTML = "▶️ " + (idMusica === "musicaDante" ? "Evanescence - Justo Ahora" : "Bury The Light");
    }
}

// Función para reproducir sonido de disparo
function reproducirSonido() {
    var sonido = document.getElementById("disparoSonido");
    sonido.currentTime = 0;
    sonido.play();
}

// Mostrar información del personaje
function mostrarInfo(personaje) {
    var modal = document.getElementById("infoModal");
    var titulo = document.getElementById("tituloModal");
    var texto = document.getElementById("textoModal");

    if (personaje === "dante") {
        titulo.innerHTML = "🔥 Dante - Devil May Cry 🔥";
        texto.innerHTML = "Dante es un cazador de demonios y el hijo de Sparda. Tras perder a su madre en un ataque demoníaco, dedicó su vida a erradicar a estas criaturas con su carismática actitud y estilo. " +
                          "Ha enfrentado múltiples amenazas, incluida la corrupción de su propio hermano, y siempre mantiene su sentido del humor en batalla.";
    } else if (personaje === "vergil") {
        titulo.innerHTML = "⚔️ Vergil - Devil May Cry ⚔️";
        texto.innerHTML = "Vergil es el hermano gemelo de Dante. Tras la muerte de su madre, decidió volverse fuerte a cualquier costo, buscando el poder absoluto para evitar ser débil nuevamente. " +
                          "Su búsqueda lo llevó a convertirse en Nelo Angelo y a luchar contra su propio hermano en múltiples ocasiones terminando encerrado en el infierno hasta Dmc 5.";
    }

    modal.style.display = "block";
}

// Cerrar la ventana emergente
function cerrarInfo() {
    document.getElementById("infoModal").style.display = "none";
}