export const COMPANY_INFO = {
  name: "SHERIFF Seguridad S.R.L.",
  shortName: "SHERIFF",
  resolutionNumber: "Resolución Ministerial N°: 0527",
  resolutionAuthority: "Ministerio de Gobierno y Seguridad de la Provincia de Neuquén",
  director: "Luis Ariel Hernandez",
  quote: "Seguridad, Compromiso y Profesionalismo al servicio de nuestros clientes es lo que nos destaca.",
  description: "Ponemos a tu disposición servicios de seguridad y vigilancia especializada durante las 24 horas del día, integrando nuevas tecnologías con los mejores profesionales, que te permitirán optimizar los recursos destinados a la seguridad de tus instalaciones y te garantizarán un alto nivel de calidad en los procesos.",
  phone: "+54 299 325 9037",
  phoneRaw: "5492993259037",
  email: "contacto.sheriffsrl@gmail.com",
  address: "Perito Moreno 62, Neuquén Capital",
  hoursOffice: "Lunes a Viernes de 09:00 a 14:00 Hs",
  hoursSecurity: "Operatividad y Monitoreo 24 Horas / 365 Días",
  city: "Neuquén",
  province: "Provincia de Neuquén, Argentina",
  mapsQuery: "Perito Moreno 62, Neuquen Capital, Argentina"
};

export const STATS = [
  { value: "24/7/365", label: "Operatividad y Monitoreo Activo" },
  { value: "N° 0527", label: "Resolución Ministerial Habilitante" },
  { value: "Top 3", label: "Empresa Líder en Prov. de Neuquén" },
  { value: "+35 Años", label: "Experiencia de Conducción Estratégica" }
];

export const SERVICES = [
  {
    id: "seguridad-fisica",
    title: "Seguridad Física y Custodia",
    tagline: "Protección presencial con personal uniformado de alta presencia",
    icon: "ShieldAlert",
    image: "/assets/images/seguridad-patrulla.jpg",
    summary: "Vigilancia perimetral, rondines y control de accesos para barrios privados, countries, edificios, comercios e industrias.",
    features: [
      "Patrullaje preventivo continuo en móviles terrestres",
      "Control de accesos computarizado con registro digital",
      "Prevención de pérdidas y control de activos críticos",
      "Gestión ágil ante situaciones de emergencia y botón de alerta"
    ],
    badge: "Especialidad Primaria"
  },
  {
    id: "vigilancia-electronica",
    title: "Vigilancia Electrónica & CCTV",
    tagline: "Sistemas tecnológicos integrados a nuestra central 24hs",
    icon: "Eye",
    image: "/assets/images/vig-electronica.png",
    summary: "Brindamos servicios de vigilancia electrónica orientados a la observación permanente y la detección temprana de situaciones irregulares.",
    features: [
      "Cámaras de seguridad de alta resolución y visión nocturna",
      "Monitoreo en tiempo real con operadores homologados",
      "Almacenamiento seguro de grabaciones para peritajes",
      "Integración de sensores perimetrales y alarmas inteligentes"
    ],
    badge: "Tecnología Avanzada"
  },
  {
    id: "control-eventos",
    title: "Control de Eventos & Entes Públicos",
    tagline: "Personal capacitado para concurrencias masivas y organismos",
    icon: "Users2",
    image: "/assets/images/seguridad-fisica.png",
    summary: "Contamos con personal adecuado a las necesidades que el evento requiere: trato con el público, mediación pacífica y primeros auxilios.",
    features: [
      "Trato cordial y respetuoso con el público general y organizadores",
      "Manejo profesional y desescalada de situaciones conflictivas",
      "Personal con certificación en Primeros Auxilios y RCP",
      "Planes de evacuación coordinados y respuesta rápida"
    ],
    badge: "Eventos & Espacios Públicos"
  },
  {
    id: "alquiler-vehiculos",
    title: "Alquiler de Vehículos Operativos",
    tagline: "Soluciones de movilidad y apoyo operativo para empresas",
    icon: "Car",
    image: "/assets/images/autos.jpeg",
    summary: "Servicio de alquiler de vehículos sin chofer destinado a cubrir requerimientos de movilidad, traslados y apoyo logístico.",
    features: [
      "Unidades en óptimas condiciones de mantenimiento y presentación",
      "Modalidad sin chofer para total independencia operativa",
      "Disponible para empresas, entidades privadas y organismos públicos",
      "Flexibilidad en contratos eventuales o de largo plazo"
    ],
    badge: "Flota Operativa"
  },
  {
    id: "maestranza",
    title: "Servicio de Maestranza & Limpieza Integral",
    tagline: "Higiene y mantenimiento de edificios y complejos",
    icon: "Sparkles",
    image: "/assets/images/maestranza.png",
    summary: "Garantizamos la higiene, orden y correcto mantenimiento general de edificios residenciales, comerciales e institucionales.",
    features: [
      "Limpieza integral y conservación de sectores de circulación",
      "Mantenimiento continuo de áreas comunes y accesos",
      "Personal responsable, organizado y con criterios de eficiencia",
      "Aplicable a consorcios, escuelas, oficinas y centros comerciales"
    ],
    badge: "Mantenimiento General"
  }
];

export const TRAINING_TOPICS = [
  {
    title: "Protocolos de Vigilancia y Control",
    desc: "Procedimientos estandarizados para puestos fijos, rondines y control de accesos computarizado.",
    icon: "ShieldCheck"
  },
  {
    title: "Tecnología Aplicada al Monitoreo",
    desc: "Capacitación avanzada en consolas de monitoreo, alarmas, CCTV y comunicaciones digitales.",
    icon: "ScanFace"
  },
  {
    title: "Ética, Legislación & Mediación",
    desc: "Módulos de resolución pacífica de conflictos, marco legal provincial y actuación ante contingencias.",
    icon: "FileCheck"
  },
  {
    title: "Primeros Auxilios & RCP Certificado",
    desc: "Instrucción avalada en reanimación cardiopulmonar, soporte vital básico y auxilio a la ciudadanía.",
    icon: "HeartPulse"
  }
];

// Datos completos de la pestaña "SERVICIOS" (/inicio/)
export const SERVICES_PAGE_DATA = {
  heroTitle: "Servicios Integrales de Seguridad",
  heroSubtitle: "Protección profesional y confiable para su tranquilidad. Fusionamos personal altamente capacitado con tecnología avanzada para garantizar entornos seguros.",
  intro: "En Sheriff S.R.L. no solo vigilamos; protegemos lo que más valora. Fusionamos personal altamente capacitado con tecnología avanzada para garantizar entornos seguros en hogares, comercios, empresas, barrios privados y eventos, adaptándonos a sus necesidades específicas con un compromiso inquebrantable.",
  pillars: "Nuestros pilares son la disciplina, la discreción y la vigilancia constante. Operamos con tecnología de punta y un equipo disuasivo que actúa con rapidez ante cualquier eventualidad. Confíe en nuestra experiencia para crear un escudo de seguridad efectivo y confiable para su propiedad, su negocio y su familia.",
  categories: SERVICES
};

// Datos completos de la pestaña "CAPACITACIONES" (/services/)
export const TRAINING_PAGE_DATA = {
  heroTitle: "Centro de Capacitación Oficial SHERIFF",
  badge: "Única Empresa Habilitada a Nivel Nacional",
  milestoneTitle: "Pioneros en Formación de Seguridad",
  milestoneText: "En Sheriff S.R.L., marcamos un hito en la seguridad privada al ser la primera y única empresa a nivel nacional habilitada por el Ministerio de Seguridad de Neuquén como Centro de Capacitación oficial para personal vigilador.",
  milestoneDesc: "Este aval público no solo respalda nuestra trayectoria, sino que garantiza que cada uno de nuestros profesionales cuenta con una formación técnica, legal y operativa de excelencia, diseñada para proteger a la ciudadanía con los más altos estándares de calidad.",
  formationTitle: "Formación SHERIFF: La Excelencia como Base Operativa",
  formationText: "En nuestra organización, la excelencia no es opcional, es nuestra base operativa. Hemos diseñado este ecosistema de aprendizaje exclusivo para que cada integrante de nuestro cuerpo de seguridad cuente con las herramientas técnicas y tácticas necesarias para enfrentar los desafíos del terreno. Aquí comienza tu camino hacia el profesionalismo de vanguardia.",
  modules: [
    {
      title: "Protocolos de Vigilancia y Control",
      desc: "Procedimientos estandarizados para puestos fijos, rondines y control de accesos computarizado.",
      icon: "ShieldCheck",
      hours: "40 Horas Teórico-Prácticas"
    },
    {
      title: "Tecnología Aplicada a la Seguridad",
      desc: "Capacitación avanzada en sistemas de monitoreo, alarmas, CCTV y comunicación digital de última generación.",
      icon: "Cpu",
      hours: "35 Horas de Práctica en Consola"
    },
    {
      title: "Ética, Legislación y Respuesta Crítica",
      desc: "Módulos de resolución de conflictos, marco legal de seguridad privada y actuación ante emergencias.",
      icon: "Scale",
      hours: "30 Horas de Marco Legal"
    },
    {
      title: "Primeros Auxilios & RCP Certificado",
      desc: "Técnicas de reanimación cardiopulmonar, atención inicial en incidentes y coordinación con emergencias médicas.",
      icon: "HeartPulse",
      hours: "Certificación Oficial"
    }
  ],
  futureTitle: "Tu Crecimiento: El Motor de Nuestra Eficiencia",
  futureQuote: "“Tu crecimiento es el motor de nuestra eficiencia. Al completar los módulos de formación online y presencial, no solo aseguras un servicio de calidad para nuestros clientes, sino que potencias tu legajo personal dentro de la compañía. Certifica tus competencias, mantente actualizado con las normativas vigentes y proyecta tu carrera en las distintas jerarquías de nuestra estructura de seguridad.”"
};

// Datos completos de la pestaña "ACERCA DE" (/about/)
export const ABOUT_PAGE_DATA = {
  heroTitle: "Conócenos: SHERIFF Seguridad",
  badge: "Liderazgo en la Patagonia",
  trajectory: "+8 Años de Trayectoria Ininterrumpida",
  ranking: "Entre las 3 Empresas de Seguridad Más Grandes de Neuquén",
  leadershipYears: "+35 Años de Experiencia Estratégica",
  sections: [
    {
      title: "Sobre Nosotros",
      text: "En Sheriff, somos una empresa de seguridad consolidada con más de 8 años de trayectoria ininterrumpida en el mercado. Gracias a nuestro compromiso constante con la excelencia y la protección de nuestros clientes, hoy nos posicionamos con orgullo entre las tres empresas de seguridad más grandes de la provincia de Neuquén."
    },
    {
      title: "Experiencia y Liderazgo Estratégico",
      text: "Nuestra estructura está dirigida por profesionales con una vasta trayectoria en el ámbito de la seguridad, sumando más de 35 años de experiencia estratégica en el sector. Este liderazgo nos permite anticipar riesgos y diseñar soluciones de protección personalizadas, adaptadas a las necesidades reales del entorno actual."
    },
    {
      title: "Nuestro Capital Humano",
      text: "Entendemos que la seguridad depende de la confianza y la capacidad de respuesta. Por ello, contamos con un equipo altamente capacitado y en constante formación, preparado para actuar bajo los más altos estándares de exigencia y cumplir con precisión lo solicitado por nuestros clientes."
    },
    {
      title: "Garantía de Calidad y Transparencia",
      text: "La transparencia es nuestra base. Contamos con recomendaciones comprobables de organizaciones y particulares que han confiado en nosotros. Nuestra reputación no solo se basa en los años de servicio, sino en la satisfacción y tranquilidad de quienes eligen a Sheriff día tras día."
    }
  ],
  mission: "“Proveer soluciones de seguridad integral que garanticen la tranquilidad de nuestros clientes y la protección de sus activos más valiosos. Nos comprometemos a liderar el sector mediante la innovación estratégica, la respuesta inmediata y un compromiso ético inquebrantable con la comunidad de nuestra provincia.”",
  values: [
    {
      title: "Integridad",
      desc: "Actuamos con honestidad y transparencia en cada reporte y acción."
    },
    {
      title: "Profesionalismo",
      desc: "Mantenemos la disciplina y el rigor táctico como estandartes indiscutibles."
    },
    {
      title: "Compromiso",
      desc: "Estamos presentes cuando más se nos necesita, sin excepciones ni demoras."
    },
    {
      title: "Excelencia",
      desc: "Buscamos la mejora continua de nuestro personal para superar los estándares del mercado."
    }
  ]
};

// Datos completos de la pestaña "CONTACTO" (/contact-2/)
export const CONTACT_PAGE_DATA = {
  heroTitle: "Contactos & Sede Central",
  subtitle: "Comunicate directamente con nuestra central de operaciones o visitanos en nuestras oficinas comerciales.",
  requirementsTitle: "Requisitos para Ingresar como Vigilador (Recursos Humanos)",
  requirementsSubtitle: "Sumate al equipo de Sheriff Seguridad. Revisá los requisitos indispensables para presentar tu postulación en nuestra sede:",
  requirements: [
    "Síntesis Curricular (Currículum Vitae actualizado con foto).",
    "DNI con domicilio en la provincia de Neuquén (Si el DNI posee domicilio de otra provincia, adjuntar Certificado de Domicilio expedido en Neuquén).",
    "Certificado de Antecedentes Penales Nacionales con vigencia no mayor a 6 meses.",
    "Certificado Médico de Buena Salud con vigencia no mayor a 6 meses.",
    "Estudios Secundarios Completos (Analítico Original) o Certificado de Estudios en Trámite vigente (con validez no mayor a 6 meses)."
  ],
  requirementsNotes: [
    "Todas las copias deben estar respaldadas por el documento original en mano al momento de la entrega.",
    "No se acepta documentación por email bajo ningún concepto.",
    "La recepción de documentación es exclusivamente en papel en nuestra sede de Perito Moreno 62 de Lunes a Viernes de 09:00 a 14:00 Hs."
  ]
};
