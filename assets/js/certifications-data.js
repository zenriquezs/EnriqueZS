const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: "Responsive Web Design",
    description:
      "Certificación de freeCodeCamp representando aproximadamente 300 horas de trabajo",
    image: "./assets/images/certificados/Responsive Web Design.png",

    issuer: "freeCodeCamp",
    date: "Junio 2025",
    credentialId: "enriquezs-rwd",
    skills: [
      { name: "HTML5", class: "bg-primary" },
      { name: "CSS3", class: "bg-primary" },
      { name: "Responsive Design", class: "bg-primary" },
    ],
    certificateUrl:
      "https://www.freecodecamp.org/certification/enriquezs/responsive-web-design",
    verifyUrl:
      "https://www.freecodecamp.org/certification/enriquezs/responsive-web-design",
    featured: true,
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    description:
      "Certificación de freeCodeCamp que abarca aproximadamente 300 horas de trabajo, enfocada en algoritmos y estructuras de datos utilizando JavaScript.",
    image:
      "./assets/images/certificados/JavaScript Algorithms and Data Structures.png",
    issuer: "freeCodeCamp",
    date: "Agosto 2025",
    credentialId: "enriquezs-jsds",
    skills: [
      { name: "JavaScript", class: "bg-warning" },
      { name: "Algoritmos", class: "bg-warning" },
      { name: "Estructuras de Datos", class: "bg-warning" },
    ],
    certificateUrl:
      "https://www.freecodecamp.org/certification/enriquezs/javascript-algorithms-and-data-structures-v8",
    verifyUrl:
      "https://www.freecodecamp.org/certification/enriquezs/javascript-algorithms-and-data-structures-v8",
    featured: true,
  },
  {
    id: 3,
    title: "Secure Your Data at Rest",
    description:
      "Curso de Microsoft en Coursera que enseña cómo proteger datos almacenados en la nube, incluyendo el uso de Azure Defender, Always Encrypted y SAS.",
    image: "./assets/images/certificados/secure_data_at_rest.png",
    issuer: "Microsoft",
    date: "Abril 2025",
    credentialId: "3ATLQKMKPMIF",
    skills: [
      { name: "Azure Defender", class: "bg-info" },
      { name: "Always Encrypted", class: "bg-info" },
      { name: "Shared Access Signatures (SAS)", class: "bg-info" },
      { name: "Auditoría de bases de datos", class: "bg-info" },
      { name: "Protección de datos en la nube", class: "bg-info" },
    ],
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/3ATLQKMKPMIF",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/3ATLQKMKPMIF",
    featured: true,
  },
  {
    id: 4,
    title: "Microsoft Azure Security Engineer Associate (AZ-500)",
    description:
      "Examen final y práctica del curso AZ-500 de Microsoft, que cubre implementación de autenticación multifactor, configuración de máquinas virtuales seguras y estrategias de seguridad en Azure.",
    image: "./assets/images/certificados/az500_capstone.png",
    issuer: "Microsoft",
    date: "Abril 2025",
    credentialId: "M2Z74XSSY0IL",
    skills: [
      { name: "Seguridad en la Nube", class: "bg-primary" },
      { name: "Autenticación Multifactor", class: "bg-primary" },
      { name: "Microsoft Azure", class: "bg-primary" },
    ],
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/M2Z74XSSY0IL",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/M2Z74XSSY0IL",
    featured: true,
  },
  {
    id: 5,
    title: "Manage Security Operations",
    description:
      "Curso de Microsoft sobre gestión de operaciones de seguridad en la nube, incluyendo monitoreo y protección contra amenazas.",
    image: "./assets/images/certificados/Manage-Security-Operations.png",
    issuer: "Microsoft",
    date: "Abril 2025",
    credentialId: "GOF479VKFLTP",
    skills: [
      { name: "Monitoreo de Seguridad", class: "bg-danger" },
      { name: "Protección contra Amenazas", class: "bg-warning" },
      { name: "Defensa en la Nube", class: "bg-info" },
    ],
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/GOF479VKFLTP",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/GOF479VKFLTP",
    featured: true,
  },
  {
    id: 6,
    title: "Capstone and Practice Exam (AZ-500)",
    description:
      "Evaluación final del curso AZ-500 de Microsoft, enfocada en seguridad en Azure.",
    image: "./assets/images/certificados/capstone.png",
    issuer: "Microsoft",
    date: "Abril 2025",
    credentialId: "M2Z74XSSY0IL",
    skills: [
      { name: "Autenticación Multifactor", class: "bg-primary" },
      {
        name: "Control de Acceso Basado en Roles (RBAC)",
        class: "bg-secondary",
      },
      { name: "Seguridad en Infraestructura", class: "bg-success" },
    ],
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/M2Z74XSSY0IL",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/M2Z74XSSY0IL",
    featured: true,
  },
  {
    id: 8,
    title: "Secure Your Applications",
    description:
      "Curso de Microsoft que enseña cómo proteger aplicaciones en la nube utilizando Azure Key Vault, autenticación multifactor y control de acceso basado en roles.",
    image: "./assets/images/certificados/secure_your_applications.png",
    issuer: "Microsoft",
    date: "Marzo 2025",
    credentialId: "WDEF1EOHRGXS",
    skills: [
      { name: "Autenticación Multifactor", class: "bg-primary" },
      {
        name: "Control de Acceso Basado en Roles (RBAC)",
        class: "bg-secondary",
      },
      { name: "Microsoft Azure", class: "bg-info" },
      { name: "Seguridad en Aplicaciones", class: "bg-danger" },
      { name: "Gestión de Claves", class: "bg-warning" },
    ],
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/WDEF1EOHRGXS",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/WDEF1EOHRGXS",
    featured: true,
  },
  {
    id: 9,
    title: "Overview of IoT Technologies",
    description:
      "Certificación que proporciona una visión general de las tecnologías clave en el Internet de las Cosas (IoT), incluyendo sensores, redes y plataformas de análisis de datos.",
    image: "./assets/images/certificados/iot_overview.png",
    issuer: "Credly",
    date: "Mayo 2025",
    credentialId: "17418557-fe34-4614-a371-5900492f5914",
    skills: [
      { name: "Internet de las Cosas (IoT)", class: "bg-info" },
      { name: "Sensores Inteligentes", class: "bg-success" },
      { name: "Redes de Comunicación", class: "bg-warning" },
      { name: "Análisis de Datos", class: "bg-primary" },
    ],
    certificateUrl:
      "https://www.credly.com/badges/17418557-fe34-4614-a371-5900492f5914/linked_in_profile",
    verifyUrl:
      "https://www.credly.com/badges/17418557-fe34-4614-a371-5900492f5914/linked_in_profile",
    featured: true,
  },
  {
    id: 10,
    title: "Curso de Desarrollo de Apps Móviles",
    description:
      "Curso de Google Skillshop que enseña cómo desarrollar aplicaciones móviles utilizando herramientas y tecnologías modernas.",
    image: "./assets/images/certificados/desarrollo_apps_moviles.jpg",
    issuer: "Google Skillshop",
    date: "Septiembre 2024",
    credentialId: "aYtiAYG42mioiPxDttPte96Z",
    skills: [
      { name: "Desarrollo de Apps Móviles", class: "bg-primary" },
      { name: "Programación en Kotlin", class: "bg-secondary" },
      { name: "Diseño de Interfaces", class: "bg-success" },
    ],
    certificateUrl:
      "https://skillshop.exceedlms.com/student/award/aYtiAYG42mioiPxDttPte96Z",
    verifyUrl:
      "https://skillshop.exceedlms.com/student/award/aYtiAYG42mioiPxDttPte96Z",
    featured: true,
  },
  {
    id: 11,
    title: "Curso de introducción al desarrollo web: HTML y CSS (1/2)",
    description:
      "Curso de Google Skillshop que introduce los conceptos básicos del desarrollo web utilizando HTML y CSS.",
    image: "./assets/images/certificados/desarrollo_web_html_css.jpg",
    issuer: "Google Skillshop",
    date: "Septiembre 2024",
    credentialId: "oSbwBiTB7j8BumPMLSwuvN7e",
    skills: [
      { name: "HTML5", class: "bg-primary" },
      { name: "CSS3", class: "bg-secondary" },
      { name: "Desarrollo Web", class: "bg-success" },
    ],
    certificateUrl:
      "https://skillshop.exceedlms.com/student/award/oSbwBiTB7j8BumPMLSwuvN7e",
    verifyUrl:
      "https://skillshop.exceedlms.com/student/award/oSbwBiTB7j8BumPMLSwuvN7e",
    featured: true,
  },
  {
    id: 12,
    title: "Curso de introducción al desarrollo web: HTML y CSS (2/2)",
    description:
      "Continuación del curso de Google Skillshop que profundiza en el desarrollo web utilizando HTML y CSS.",
    image: "./assets/images/certificados/desarrollo_web_html_css_2.jpg",
    issuer: "Google Skillshop",
    date: "Septiembre 2024",
    credentialId: "fNz1rfJCqA3cKmC2SpwNH6rh",
    skills: [
      { name: "HTML5", class: "bg-primary" },
      { name: "CSS3", class: "bg-secondary" },
      { name: "Desarrollo Web", class: "bg-success" },
    ],
    certificateUrl:
      "https://skillshop.exceedlms.com/student/award/fNz1rfJCqA3cKmC2SpwNH6rh",
    verifyUrl:
      "https://skillshop.exceedlms.com/student/award/fNz1rfJCqA3cKmC2SpwNH6rh",
    featured: true,
  },
  {
    id: 13,
    title: "Introducción a la Ciencia de Datos",
    description:
      "Certificación que proporciona una visión general de las técnicas y herramientas utilizadas en la ciencia de datos.",
    image: "./assets/images/certificados/introduccion_ciencia_datos.png",
    issuer: "Credly",
    date: "Mayo 2025",
    credentialId: "b7d8c3bc-9824-4d00-a4fb-bb673ee9b613",
    skills: [
      { name: "Python", class: "bg-primary" },
      { name: "Análisis de Datos", class: "bg-secondary" },
      { name: "Visualización de Datos", class: "bg-success" },
    ],
    certificateUrl:
      "https://www.credly.com/badges/b7d8c3bc-9824-4d00-a4fb-bb673ee9b613/linked_in_profile",
    verifyUrl:
      "https://www.credly.com/badges/b7d8c3bc-9824-4d00-a4fb-bb673ee9b613/linked_in_profile",
    featured: true,
  },
  {
    id: 14,
    title: "Protege tu Negocio: Ciberseguridad en el Teletrabajo",
    description:
      "Curso de Google Skillshop que enseña prácticas de ciberseguridad para proteger negocios en entornos de teletrabajo.",
    image: "./assets/images/certificados/ciberseguridad_teletrabajo.jpg",
    issuer: "Google Skillshop",
    date: "Septiembre 2024",
    credentialId: "Nw4WVcLMH5A5b46daQSzY7ap",
    skills: [
      { name: "Ciberseguridad", class: "bg-primary" },
      { name: "Teletrabajo", class: "bg-secondary" },
      { name: "Protección de Datos", class: "bg-success" },
    ],
    certificateUrl:
      "https://skillshop.exceedlms.com/student/award/Nw4WVcLMH5A5b46daQSzY7ap",
    verifyUrl:
      "https://skillshop.exceedlms.com/student/award/Nw4WVcLMH5A5b46daQSzY7ap",
    featured: true,
  },
  {
    id: 15,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    description:
      "Certificación de Cisco que cubre los fundamentos de redes, incluyendo conmutación, enrutamiento y redes inalámbricas.",
    image: "./assets/images/certificados/ccna_switching_routing.png",
    issuer: "Credly",
    date: "Agosto 2024",
    credentialId: "24043017-44ff-43f7-91ec-3470cd0a9510",
    skills: [
      { name: "Redes", class: "bg-primary" },
      { name: "Cisco", class: "bg-secondary" },
      { name: "Conmutación", class: "bg-success" },
      { name: "Enrutamiento", class: "bg-info" },
      { name: "Redes Inalámbricas", class: "bg-warning" },
    ],
    certificateUrl:
      "https://www.credly.com/badges/24043017-44ff-43f7-91ec-3470cd0a9510/linked_in_profile",
    verifyUrl:
      "https://www.credly.com/badges/24043017-44ff-43f7-91ec-3470cd0a9510/linked_in_profile",
    featured: true,
  },
  {
    id: 16,
    title: "CCNA: Introduction to Networks",
    description:
      "Curso de Cisco que cubre los fundamentos de redes, incluyendo modelos OSI, direccionamiento IP y dispositivos de red.",
    image: "./assets/images/certificados/ccna_introduccion_redes.png",
    issuer: "Cisco Networking Academy",
    date: "Noviembre 2023",
    credentialId: "9b2d9731-4263-48da-99b0-4f56f464faa6",
    skills: [
      { name: "Redes", class: "bg-primary" },
      { name: "Cisco", class: "bg-secondary" },
      { name: "Direccionamiento IP", class: "bg-success" },
    ],
    certificateUrl:
      "https://www.credly.com/badges/9b2d9731-4263-48da-99b0-4f56f464faa6/linked_in_profile",
    verifyUrl:
      "https://www.credly.com/badges/9b2d9731-4263-48da-99b0-4f56f464faa6/linked_in_profile",
    featured: true,
  },
  {
    id: 17,
    title: "Introduction to IoT",
    description:
      "Curso de Cisco que proporciona una visión general del Internet de las Cosas, incluyendo sensores, redes y plataformas de análisis de datos.",
    image: "./assets/images/certificados/introduccion_iot.png",
    issuer: "Cisco Networking Academy",
    date: "Diciembre 2023",
    credentialId: "9dcf1aee-fc0e-4f7c-8b6e-057a0ae39686",
    skills: [
      { name: "IoT", class: "bg-primary" },
      { name: "Sensores", class: "bg-secondary" },
      { name: "Redes", class: "bg-success" },
    ],
    certificateUrl:
      "https://www.credly.com/badges/9dcf1aee-fc0e-4f7c-8b6e-057a0ae39686/linked_in_profile",
    verifyUrl:
      "https://www.credly.com/badges/9dcf1aee-fc0e-4f7c-8b6e-057a0ae39686/linked_in_profile",
    featured: true,
  },
  {
    id: 18,
    title: "Python Programming for Data Science",
    description:
      "Curso de Dataquest que enseña los fundamentos de la programación en Python aplicados a la ciencia de datos.",
    image: "./assets/images/certificados/python_ciencia_datos.jpg",
    issuer: "Dataquest",
    date: "Noviembre 2022",
    credentialId: "QUHYR065UBMLTCHLY4WV",
    skills: [
      { name: "Python", class: "bg-primary" },
      { name: "Ciencia de Datos", class: "bg-secondary" },
      { name: "Análisis de Datos", class: "bg-success" },
    ],
    certificateUrl:
      "https://app.dataquest.io/verify_cert/QUHYR065UBMLTCHLY4WV/",
    verifyUrl: "https://app.dataquest.io/verify_cert/QUHYR065UBMLTCHLY4WV/",
    featured: true,
  },
];

function getFeaturedCertifications() {
  return CERTIFICATIONS_DATA.filter((cert) => cert.featured);
}

function getAllCertifications() {
  return CERTIFICATIONS_DATA;
}

function getCertificationById(id) {
  return CERTIFICATIONS_DATA.find((cert) => cert.id === id);
}

function getCertificationsByIssuer(issuer) {
  return CERTIFICATIONS_DATA.filter((cert) =>
    cert.issuer.toLowerCase().includes(issuer.toLowerCase())
  );
}
