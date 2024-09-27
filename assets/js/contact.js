import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyA_u0eeFCC0EcE7pDoAIA60shdFNUq1ojc",
  authDomain: "enriquezs.firebaseapp.com",
  projectId: "enriquezs",
  storageBucket: "enriquezs.appspot.com",
  messagingSenderId: "438737420938",
  appId: "1:438737420938:web:0baa9eff2769c809eae373",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 

document.getElementById("submit").addEventListener("click", function (e) {
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
    alert("Por favor, introduce un correo electrónico válido con un dominio como gmail.com, cloud.com, etc.");
    return; 
  }

  const safeEmail = email.replace(/\./g, "_");
  set(ref(db, "user/" + safeEmail), {
    nombre: nombre,
    email: email,
    asunto: asunto,
    mensaje: mensaje,
  });

  alert("Formulario enviado con éxito!");
});
