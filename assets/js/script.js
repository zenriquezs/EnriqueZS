    const texts = ["Desarrollador Web Frontend", "Desarrollador Web Backend"];
    const textElement = document.getElementById("auto-text");

    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let charIndex = 0;

    function typeEffect() {
        currentText = texts[currentIndex];

        if (isDeleting) {
            // Borrar texto
            textElement.innerHTML = currentText.substring(0, charIndex--);
        } else {
            // Escribir texto
            textElement.innerHTML = currentText.substring(0, charIndex++);
        }

        // Cambiar entre escribir y borrar
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pausa antes de borrar
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length; // Pasar al siguiente texto
            setTimeout(typeEffect, 500); // Pausa antes de escribir
        } else {
            setTimeout(typeEffect, 100); // Velocidad de escritura/borrado
        }
    }

    // Iniciar el efecto
    document.addEventListener("DOMContentLoaded", typeEffect);
