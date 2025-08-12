const PROJECTS_DATA = [
  {
    id: 1,
    title: "Tempath Web",
    description:
      "Herramienta para que pequeños negocios creen su sitio web fácilmente sin saber programar. Incluye autenticación, plantillas personalizables y almacenamiento en la nube.",
    image: "./assets/images/Tempath.png",
    technologies: [
      { name: "JavaScript", class: "bg-warning" },
      { name: "Firebase", class: "bg-danger" },
      { name: "Cloudinary", class: "bg-secondary" },
      { name: "HTML/CSS", class: "bg-info" },
    ],
    demoUrl: "https://zenriquezs.github.io/tempath-web/",
    githubUrl: "https://github.com/zenriquezs/tempath-web",
    featured: true,
  },
  {
    id: 2,
    title: "Sistema de Asistencia RFID 3D",
    description:
      "Sistema de control de asistencia que utiliza tarjetas RFID, ESP32, MQTT y una app web con Streamlit para registrar y visualizar la asistencia en tiempo real, con generación de reportes PDF.",
    image: "./assets/images/RFID.png",
    technologies: [
      { name: "Arduino", class: "bg-danger" },
      { name: "ESP32", class: "bg-success" },
      { name: "MQTT", class: "bg-warning" },
      { name: "Python", class: "bg-primary" },
      { name: "Streamlit", class: "bg-info" },
      { name: "Firestore", class: "bg-blue" },
      { name: "ImageKit", class: "bg-secondary" },
    ],
    demoUrl: "https://github.com/zenriquezs/Asistencia-3d-py",
    githubUrl: "https://github.com/zenriquezs/Asistencia-3d-py",
    featured: true,
  },
  {
    id: 3,
    title: "Portafolio Web Personal",
    description:
      "Sitio web desarrollado para mostrar mis proyectos, habilidades y experiencia profesional. Incluye diseño responsive, integración con redes sociales y un formulario de contacto conectado a Firebase.",
    image: "./assets/images/portfolio.png",
    technologies: [
      { name: "HTML", class: "bg-danger" },
      { name: "CSS", class: "bg-primary" },
      { name: "JavaScript", class: "bg-warning" },
      { name: "React", class: "bg-success" },
      { name: "Firebase", class: "bg-info" },
      { name: "GitHub Pages", class: "bg-secondary" },
    ],
    demoUrl: "https://zenriquezs.github.io/EnriqueZS/",
    githubUrl: "https://github.com/zenriquezs/EnriqueZS",
    featured: true,
  },
  {
    id: 4,
    title: "CHILTIC-T - Tienda en Línea de Tés",
    description:
      "Sitio web de tienda en línea para la venta de tés de alta calidad, incluyendo sabores como granada y jamaica. Ofrece un catálogo interactivo, carrito de compras, autenticación de usuarios y páginas informativas.",
    image: "./assets/images/chiltic.png",
    technologies: [
      { name: "HTML", class: "bg-danger" },
      { name: "CSS", class: "bg-primary" },
      { name: "JavaScript", class: "bg-warning" },
    ],
    demoUrl: "https://zenriquezs.github.io/chiltic-website/",
    githubUrl: "https://github.com/zenriquezs/chiltic-website",
    featured: true,
  },
  {
    id: 5,
    title: "GeoTransport Shield",
    description:
      "Sistema IoT para la prevención de robos en transporte de carga, utilizando LoRa, GPS y sensores para monitoreo en tiempo real, con una plataforma web para visualización de datos.",
    image: "./assets/images/Geo.jpg",
    technologies: [
      { name: "Arduino", class: "bg-success" },
      { name: "LoRa", class: "bg-warning" },
      { name: "GPS", class: "bg-info" },
      { name: "Firebase", class: "bg-danger" },
      { name: "HTML", class: "bg-primary" },
      { name: "JavaScript", class: "bg-warning" },
    ],
    demoUrl: "https://github.com/zenriquezs/GEOTRANSPORT-SHIELD",
    githubUrl: "https://github.com/zenriquezs/GEOTRANSPORT-SHIELD",
    featured: true,
  },
  {
    id: 6,
    title: "Calculadora de Gases de Efecto Invernadero",
    description:
      "Aplicación web para calcular equivalencias de emisiones de gases de efecto invernadero. Permite ingresar datos (como CO₂, metano, óxido nitroso) y obtener conversiones a CO₂ equivalente, facilitando la comprensión del impacto ambiental.",
    image: "./assets/images/P3.png",

    technologies: [
      { name: "PHP", class: "bg-success" },
      { name: "HTML", class: "bg-danger" },
      { name: "JavaScript", class: "bg-warning" },
      { name: "CSS", class: "bg-primary" },
      { name: "MySQL", class: "bg-info" },
    ],
    demoUrl: "https://github.com/zenriquezs/CalculadoraGasesEfectoInvernadero",
    githubUrl:
      "https://github.com/zenriquezs/CalculadoraGasesEfectoInvernadero",
    featured: true,
  },
  {
    id: 7,
    title: "API Reader",
    description:
      "Interfaz web que permite seleccionar entre múltiples APIs para visualizar analíticas de datos. Ofrece funciones de filtrado, gráficos interactivos y tablas dinámicas utilizando la librería Plotly para análisis visual avanzado.",
    image: "./assets/images/api.png",
    technologies: [
      { name: "HTML", class: "bg-danger" },
      { name: "CSS", class: "bg-primary" },
      { name: "JavaScript", class: "bg-warning" },
      { name: "Plotly", class: "bg-info" },
    ],
    demoUrl: "https://zenriquezs.github.io/APIReader/",
    githubUrl: "https://github.com/zenriquezs/APIReader",
    featured: true,
  },
  {
    id: 8,
    title: "Flutter Sales App - CHILTIC",
    description:
      "Aplicación móvil desarrollada en Flutter para la tienda CHILTIC-T, que permite a los usuarios explorar productos, gestionar su carrito y realizar compras de manera rápida y sencilla desde sus dispositivos móviles.",
    image: "./assets/images/tes-movil.png",
    technologies: [
      { name: "Flutter", class: "bg-info" },
      { name: "Dart", class: "bg-primary" },
      { name: "Firebase", class: "bg-warning" },
    ],
    demoUrl: "https://github.com/zenriquezs/FlutterSalesAppChiltic",
    githubUrl: "https://github.com/zenriquezs/FlutterSalesAppChiltic",
    featured: true,
  },
];

function getFeaturedProjects() {
  return PROJECTS_DATA.filter((project) => project.featured);
}

function getAllProjects() {
  return PROJECTS_DATA;
}

function getProjectById(id) {
  return PROJECTS_DATA.find((project) => project.id === id);
}
