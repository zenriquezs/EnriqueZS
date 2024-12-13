import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-fCXhtsGA1mhwaX-t5JvRF3BMJ8OxmVs",
  authDomain: "portafolioweb-9b0b4.firebaseapp.com",
  databaseURL: "https://portafolioweb-9b0b4-default-rtdb.firebaseio.com",
  projectId: "portafolioweb-9b0b4",
  storageBucket: "portafolioweb-9b0b4.appspot.com",
  messagingSenderId: "48086854093",
  appId: "1:48086854093:web:0f3421a51b7d924cf97c84"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  if (!nombre || !email || !asunto || !mensaje) {
    alert("Por favor, completa todos los campos antes de enviar el formulario.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.(gmail\.com|cloud\.com|outlook\.com|yahoo\.com|hotmail\.com|edu\.mx|com\.mx|org|net|info|biz|[a-z]{2,})$/i;

  if (!emailRegex.test(email)) {
    alert("Por favor, introduce un correo electrónico válido.");
    return;
  }
  const safeEmail = email.replace(/\./g, "_");

  set(ref(db, "contactos/" + safeEmail), {
    nombre: nombre,
    email: email,
    asunto: asunto,
    mensaje: mensaje
  })
    .then(() => {
      alert("Formulario enviado con éxito!");
      document.getElementById("form").reset();
    })
    .catch((error) => {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.");
    });
});
