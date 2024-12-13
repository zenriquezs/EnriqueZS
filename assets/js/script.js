    const texts = ["Desarrollador Web Frontend", "Desarrollador Web Backend"];
    const textElement = document.getElementById("auto-text");

    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let charIndex = 0;

    function typeEffect() {
        currentText = texts[currentIndex];
        if (isDeleting) {
            textElement.innerHTML = currentText.substring(0, charIndex--);
        } else {
            textElement.innerHTML = currentText.substring(0, charIndex++);
        }
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length; 
            setTimeout(typeEffect, 500); 
        } else {
            setTimeout(typeEffect, 100); 
        }
    }

    document.addEventListener("DOMContentLoaded", typeEffect);
