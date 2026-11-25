// Datos corporativos y contenidos fieles a la estructura oficial de SHERIFF Seguridad S.R.L.

export const COMPANY_INFO = {
  name: "SHERIFF Seguridad S.R.L.",
  shortName: "SHERIFF",
  resolutionNumber: "Resolución Ministerial N°: 0527",
  resolutionAuthority: "Ministerio de Gobierno y Seguridad de la Provincia de Neuquén",
  director: "Luis Ariel Hernandez",
  quote: "Seguridad, Compromiso y Profesionalismo al servicio de nuestros clientes es lo que nos destaca.",
  description:
    "Ponemos a tu disposición servicios de seguridad y vigilancia especializada durante las 24 horas del día, integrando nuevas tecnologías con los mejores profesionales, que te permitirán optimizar los recursos destinados a la seguridad de tus instalaciones y te garantizarán un alto nivel de calidad en los procesos.",
  phone: "+54 299 325 9037",
  phoneRaw: "5492993259037",
  whatsappDefaultUrl:
    "https://api.whatsapp.com/send/?phone=5492993259037&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0",
  email: "contacto.sheriffsrl@gmail.com",
  address: "Perito Moreno 62, Neuquén Capital",
  addressShort: "Neuquén – Calle Perito Moreno 62",
  hoursOffice: "Lunes a Viernes de 09:00 a 14:00 Hs",
  hoursSecurity: "Operatividad y Monitoreo 24 Horas / 365 Días",
  city: "Neuquén",
  province: "Provincia de Neuquén, Argentina",
  mapsQuery: "perito moreno 62 neuquen",
  logoHeader: "/assets/images/icono-pag.png",
  heroVideo: "/assets/video/nuevo-video.mp4",
  ctaBgImage: "/assets/images/fondo-slider.png",
  directorImage: "/assets/images/imagen_editada.png",
  teamImage: "/assets/images/grupo-sheriff.png"
};

// Pestaña INICIO: 3 tarjetas principales de "Nuestros Servicios" (imágenes y textos originales)
export const HOME_SERVICES = [
  {
    id: "barrios-privados",
    title: "Barrios Privados",
    image: "/assets/images/seguridad-fisica.png",
    description:
      "Servicios de Patrullaje, Control de Accesos, Vigilancia Perimetral, gestión de urgencias y Control de Recepción."
  },
  {
    id: "entes-publicos",
    title: "Entes Públicos",
    image: "/assets/images/IMG_8138.jpg",
    description:
      "Contamos con personal adecuado a las necesidades que el evento requiere: Trato con el público en general y personal organizativo. Manejo de situaciones conflictivas. Primeros Auxilios, RCP y otros..."
  },
  {
    id: "empresas-negocios",
    title: "Empresas y Negocios",
    image: "/assets/images/seguridad-comercio-empresas.png",
    description:
      "Contamos con el personal adecuado a las necesidades de la vigilancia en comercios y empresas."
  }
];

// Pestaña SERVICIOS: estructura exacta de la página original (/inicio/)
export const SERVICES_PAGE_DATA = {
  heroTitle: "Servicios de Seguridad",
  heroSubtitle:
    "Protección profesional y confiable para su tranquilidad. Personal capacitado y tecnología avanzada en Neuquén y el Alto Valle.",
  heroImage: "/assets/images/servicios-hero.png",
  iconStrip: [
    {
      id: "seguridad-fisica",
      title: "Seguridad Física",
      icon: "/assets/images/guardia.png"
    },
    {
      id: "vigilancia-electronica",
      title: "Vigilancia Electrónica",
      icon: "/assets/images/cctv-icon.png"
    },
    {
      id: "control-eventos",
      title: "Control de Eventos",
      icon: "/assets/images/liderazgo.png"
    },
    {
      id: "comercios-empresas",
      title: "Comercios y Empresas",
      icon: "/assets/images/oficina.png"
    }
  ],
  everywhereTitle: "Seguridad en Todas Partes",
  everywhereCards: [
    {
      id: "entes",
      title: "Entes Públicos y Privados",
      image: "/assets/images/dpv-neuquen.jpeg"
    },
    {
      id: "eventos",
      title: "Eventos",
      image: "/assets/images/servicios-eventos.png"
    },
    {
      id: "barrios",
      title: "Barrios",
      image: "/assets/images/servicios-barrios.png"
    },
    {
      id: "edificios",
      title: "Edificios y Empresas",
      image: "/assets/images/servicios-edificios.png"
    }
  ],
  protectionBlock: {
    title: "Protección Profesional y Confiable para su Tranquilidad.",
    image: "/assets/images/servicios-proteccion.png",
    paragraphs: [
      "En Sheriff S.R.L. no solo vigilamos; protegemos lo que más valora. Fusionamos personal altamente capacitado con tecnología avanzada para garantizar entornos seguros en hogares, comercios, empresas, barrios privados y eventos, adaptándonos a sus necesidades específicas con un compromiso inquebrantable.",
      "Nuestros pilares son la disciplina, la discreción y la vigilancia constante. Operamos con tecnología de punta y un equipo disuasivo que actúa con rapidez ante cualquier eventualidad. Confíe en nuestra experiencia para crear un escudo de seguridad efectivo y confiable para su propiedad, su negocio y su familia."
    ]
  },
  featuredServices: [
    {
      id: "alquiler-vehiculos",
      title: "Alquiler de Vehículos",
      image: "/assets/images/autos.jpeg",
      imageAlt: "Flota Autos - Vehículos Sheriff",
      imagePosition: "left",
      bgColor: "var(--color-forest-split)",
      paragraphs: [
        "Ofrecemos un servicio de alquiler de vehículos sin chofer orientado a cubrir requerimientos de movilidad, traslados y apoyo operativo con total flexibilidad.",
        "Nuestras unidades se mantienen en óptimas condiciones técnicas y de presentación, listas para responder con eficiencia a las exigencias diarias de cada cliente.",
        "Servicio disponible para particulares, empresas, entidades privadas y organismos públicos, con modalidades de contratación eventuales o de largo plazo."
      ]
    },
    {
      id: "servicio-maestranza",
      title: "Servicio de Maestranza",
      image: "/assets/images/maestranza.png",
      imageAlt: "Servicio de Maestranza Sheriff Seguridad",
      imagePosition: "right",
      bgColor: "var(--bg-pure-black)",
      paragraphs: [
        "Garantizamos la higiene, el orden y el correcto mantenimiento general de instalaciones administrativas, comerciales, educativas y residenciales.",
        "Nuestro equipo realiza tareas de limpieza integral, conservación de áreas comunes, accesos y sectores de circulación con criterios de responsabilidad y eficiencia.",
        "Brindamos cobertura adaptada a entidades públicas y privadas, consorcios, oficinas y centros comerciales."
      ]
    },
    {
      id: "vigilancia-electronica",
      title: "Vigilancia Electrónica",
      image: "/assets/images/vig-electronica.png",
      imageAlt: "Vigilancia Electrónica y CCTV Sheriff Seguridad",
      imagePosition: "left",
      bgColor: "var(--color-forest-split)",
      paragraphs: [
        "Brindamos soluciones de vigilancia electrónica diseñadas para la observación permanente y la detección temprana de situaciones irregulares.",
        "Integramos cámaras de seguridad CCTV de alta definición, monitoreo en tiempo real y respaldo seguro de grabaciones para auditoría y prevención.",
        "Complementamos cada instalación con sistemas de alarmas, sensores perimetrales y control electrónico de accesos."
      ]
    }
  ]
};

// Pestaña CAPACITACIONES: estructura exacta de la página original (/services/)
export const TRAINING_PAGE_DATA = {
  heroTitle: "Centro de Capacitación SHERIFF",
  heroImage: "/assets/images/capacitaciones-hero.png",
  badgeImage: "/assets/images/primer-premio.png",
  milestoneText:
    "En Sheriff S.R.L., marcamos un hito en la seguridad privada al ser la primera y única empresa a nivel nacional habilitada por el Ministerio de Seguridad de Neuquén como Centro de Capacitación oficial para personal vigilador.",
  milestoneDesc:
    "Este aval público no solo respalda nuestra trayectoria, sino que garantiza que cada uno de nuestros profesionales cuenta con una formación técnica, legal y operativa de excelencia, diseñada para proteger a la ciudadanía con los más altos estándares de calidad.",
  blocks: [
    {
      id: "formacion",
      title: "Formación SHERIFF",
      image: "/assets/images/capacitaciones-formacion.jpg",
      imageAlt: "Capacitación virtual y presencial en Sheriff Seguridad",
      bgColor: "var(--color-olive-bg)",
      paragraphs: [
        "En nuestra organización, la excelencia no es opcional, es nuestra base operativa. Hemos diseñado este ecosistema de aprendizaje exclusivo para que cada integrante de nuestro cuerpo de seguridad cuente con las herramientas técnicas y tácticas necesarias para enfrentar los desafíos del terreno.",
        "Aquí comienza tu camino hacia el profesionalismo de vanguardia."
      ]
    },
    {
      id: "aprende",
      title: "Aprende...",
      image: "/assets/images/capacitaciones-aprende.png",
      imageAlt: "Carpeta del Centro de Capacitación SHERIFF S.R.L.",
      bgColor: "var(--bg-pure-black)",
      bullets: [
        {
          label: "Protocolos de Vigilancia y Control:",
          text: "Procedimientos estandarizados para puestos fijos, rondines y control de accesos."
        },
        {
          label: "Tecnología Aplicada:",
          text: "Capacitación avanzada en sistemas de monitoreo, alarmas y comunicación digital de última generación."
        },
        {
          label: "Ética y Respuesta Crítica:",
          text: "Módulos de resolución de conflictos, marco legal y actuación ante emergencias."
        }
      ]
    },
    {
      id: "tu-futuro",
      title: "Tu Futuro",
      image: "/assets/images/capacitaciones-futuro.jpg",
      imageAlt: "Proyección profesional en Sheriff Seguridad",
      bgColor: "var(--color-olive-bg)",
      paragraphs: [
        "Tu crecimiento es el motor de nuestra eficiencia. Al completar los módulos de formación online y presencial, no solo aseguras un servicio de calidad para nuestros clientes, sino que potencias tu legajo personal dentro de la compañía. Certifica tus competencias, mantente actualizado con las normativas vigentes y proyecta tu carrera en las distintas jerarquías de nuestra estructura de seguridad."
      ]
    }
  ]
};

// Pestaña ACERCA DE: estructura exacta de la página original (/about/)
export const ABOUT_PAGE_DATA = {
  heroTitle: "Sobre Nosotros",
  heroImage: "/assets/images/plaza-bandera.jpg",
  introTag: "Conócenos...",
  introText:
    "En Sheriff, somos una empresa de seguridad consolidada con más de 8 años de trayectoria ininterrumpida en el mercado. Gracias a nuestro compromiso constante con la excelencia y la protección de nuestros clientes, hoy nos posicionamos con orgullo entre las tres empresas de seguridad más grandes de la provincia de Neuquén.",
  sections: [
    {
      title: "Experiencia y Liderazgo",
      text: "Nuestra estructura está dirigida por profesionales con una vasta trayectoria en el ámbito de la seguridad, sumando más de 35 años de experiencia estratégica en el sector. Este liderazgo nos permite anticipar riesgos y diseñar soluciones de protección personalizadas, adaptadas a las necesidades reales del entorno actual."
    },
    {
      title: "Nuestro Capital Humano",
      text: "Entendemos que la seguridad depende de la confianza y la capacidad de respuesta. Por ello, contamos con un equipo altamente capacitado y en constante formación, preparado para actuar bajo los más altos estándares de exigencia y cumplir con precisión lo solicitado por nuestros clientes."
    },
    {
      title: "Garantía de Calidad",
      text: "La transparencia es nuestra base. Contamos con recomendaciones comprobables de organizaciones y particulares que han confiado en nosotros. Nuestra reputación no solo se basa en los años de servicio, sino en la satisfacción y tranquilidad de quienes eligen a Sheriff día tras día."
    }
  ],
  mission:
    "Proveer soluciones de seguridad integral que garanticen la tranquilidad de nuestros clientes y la protección de sus activos más valiosos. Nos comprometemos a liderar el sector mediante la innovación estratégica, la respuesta inmediata y un compromiso ético inquebrantable con la comunidad de nuestra provincia.",
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

// Pestaña CONTACTOS: estructura exacta de la página original (/contact-2/)
export const CONTACT_PAGE_DATA = {
  heroTitle: "Contactos",
  heroImage: "/assets/images/contactos-hero.jpg",
  findUsTitle: "Puedes Encontrarnos En:",
  requirementsTitle: "Requisitos para ingresar como Vigilador:",
  requirements: [
    "Síntesis Curricular.",
    "DNI con domicilio en la provincia de Neuquén (Si el DNI tiene otra provincia, traer adicional un Certificado de Domicilio).",
    "Antecedentes Penales Nacionales con vigencia no mayor a 6 meses.",
    "Certificado Médico de Buena Salud con vigencia no mayor a 6 meses.",
    "Estudios Secundarios Completos (Analítico Original) o Certificado de Estudios en Trámite vigente (vigencia no mayor a 6 meses)."
  ],
  requirementsNotes: [
    "Todas las copias deben estar respaldadas por el documento original y en mano.",
    "No se acepta documentación por email.",
    "Documentación solo en papel."
  ]
};
