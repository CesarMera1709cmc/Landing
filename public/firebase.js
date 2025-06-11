// Importa Firebase desde el CDN
// (Asegúrate de tener los scripts de firebase-app.js y firebase-database.js en tu HTML antes de este archivo)

// Configuración de Firebase (pon tus claves reales aquí)
const firebaseConfig = {
  apiKey: "AIzaSyC6eEi5k92XAvDx95RthaXog1wv2GDxjCE",
  authDomain: "dawn1-84b4b.firebaseapp.com",
  projectId: "dawn1-84b4b",
  storageBucket: "dawn1-84b4b.firebasestorage.app",
  messagingSenderId: "79721962742",
  appId: "1:79721962742:web:a6c155ec6094c1d78460d7",
  measurementId: "G-SHSSNSKPW7"
};

// Inicializa la app de Firebase solo si no está inicializada
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// Función para guardar un contacto
async function saveContact({ nombre, correo, mensaje }) {
  const contactosRef = database.ref('contactos');
  const nuevoContactoRef = contactosRef.push();
  const data = {
    nombre,
    correo,
    mensaje,
    fecha: new Date().toISOString()
  };
  try {
    await nuevoContactoRef.set(data);
    return { success: true, message: "¡Mensaje enviado exitosamente!" };
  } catch (error) {
    return { success: false, message: "Error al enviar el mensaje: " + error.message };
  }
}

// Listener para el formulario
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const nombre = form.querySelector('[name="name"]').value.trim();
      const correo = form.querySelector('[name="email"]').value.trim();
      const mensaje = form.querySelector('[name="message"]').value.trim();

      const result = await saveContact({ nombre, correo, mensaje });

      if (result.success) {
        // Aquí puedes mostrar tu modal de éxito
        form.reset();
      } else {
        alert(result.message);
      }
    });
  }
});

