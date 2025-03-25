const texts = ["Desarrollador Web Frontend", "Desarrollador Web Backend"];
const textElement = document.getElementById("auto-text");

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

const writeSpeed = 80;
const deleteSpeed = 40;
const pauseAfterWrite = 600;
const pauseAfterDelete = 300;

function typeEffect() {
    const currentText = texts[currentIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    textElement.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseAfterWrite);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(typeEffect, pauseAfterDelete);
    } else {
        setTimeout(typeEffect, isDeleting ? deleteSpeed : writeSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
