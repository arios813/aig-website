// ─────────────────────────────────────────────────────────────────────────────
// ESPAÑOL — American Investment Group Inc.
// Traducción completa al español. Para actualizar, edite solo los valores —
// nunca las claves. La estructura debe coincidir exactamente con en.ts.
// ─────────────────────────────────────────────────────────────────────────────

import type { Translations } from './en'

const es: Translations = {
  // ── Navegación ─────────────────────────────────────────────────────────────
  nav: {
    story: 'Nuestra Historia',
    team: 'Equipo',
    services: 'Servicios',
    portfolio: 'Portafolio',
    contact: 'Contacto',
    cta: 'Invertir Con Nosotros',
    langLabel: 'EN',
    langAriaLabel: 'Cambiar a inglés',
  },

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    overline: 'American Investment Group Inc. · Asunción, Paraguay',
    headlineLine1: 'Invirtiendo en el',
    headlineItalic: 'Corazón de',
    headlineLine3: 'Sudamérica',
    subtext:
      'Uniendo décadas de experiencia empresarial norteamericana con el dinámico mercado emergente de Paraguay — brindando oportunidades excepcionales en bienes raíces y ganadería para inversores exigentes.',
    cta1: 'Comienza Tu Viaje de Inversión',
    cta2: 'Explorar Oportunidades',
    scroll: 'Desplazar',
  },

  // ── Nuestra Historia ───────────────────────────────────────────────────────
  story: {
    sectionLabel: 'Nuestros Fundamentos',
    headline: 'Una Historia Arraigada en Dos Mundos',
    founder: {
      eyebrow: 'El Fundador',
      name: 'Alcides Rios',
      p1: 'Nacido en Paraguay, Alcides Rios lleva una conexión profunda con su tierra natal que ha dado forma a cada capítulo de su vida profesional. Tras obtener su MBA en Finanzas Internacionales y Banca en 1998, construyó una distinguida carrera en grandes corporaciones como Kodak, donde perfeccionó su experiencia en operaciones comerciales globales y estrategia financiera.',
      p2: 'En 2015, Alcides abrazó el emprendimiento, aplicando su experiencia corporativa en la construcción de empresas que generan valor duradero. Luego, en 2023, un viaje decisivo de regreso a Paraguay reencendió su visión sobre el extraordinario potencial del país. Fundó American Investment Group Inc. para servir como el puente que siempre creyó necesario: conectar el capital y la experiencia norteamericana con las notables oportunidades de crecimiento de Paraguay.',
      p3: 'Su combinación de herencia paraguaya, credenciales en finanzas internacionales y espíritu emprendedor posiciona a AIG para operar con conocimiento interno y disciplina institucional.',
    },
    partner: {
      eyebrow: 'El Socio',
      name: 'Andrew Rios',
      p1: 'Nacido y criado en los Estados Unidos, Andrew Rios representa la próxima generación del liderazgo de AIG. Se graduó de la Universidad de Connecticut en 2018 con un título en Economía, estableciendo la base analítica para su trabajo en inversiones y desarrollo de negocios.',
      p2: 'Andrew ha construido un sólido historial en ventas, desarrollando las relaciones con clientes y las capacidades de negociación que son fundamentales para el modelo de asociación con inversores de AIG. Reconociendo el papel transformador de la tecnología en la inversión moderna, completó un curso de Inteligencia Artificial y Aprendizaje Automático en la Universidad de Texas, posicionando a AIG a la vanguardia del análisis de mercado basado en datos.',
      p3: 'Actualmente enfocado en el mercado inmobiliario urbano de Asunción, Andrew está construyendo la base operativa para la expansión regional planificada de AIG a través de Paraguay y más allá. Su perspectiva norteamericana, combinada con profundos lazos familiares con Paraguay, lo hace especialmente idóneo para atender tanto a inversores nacionales como internacionales.',
    },
    stats: [
      { value: '2023', label: 'Año de Fundación' },
      { value: 'Asunción', label: 'Mercado Principal' },
      { value: '25+', label: 'Años de Experiencia Combinada' },
      { value: '2', label: 'Continentes · Una Visión' },
    ],
  },

  // ── Equipo ─────────────────────────────────────────────────────────────────
  team: {
    sectionLabel: 'Liderazgo',
    headline: 'El Equipo Detrás de AIG',
    credentialsLabel: 'Credenciales y Trayectoria',
    members: [
      {
        name: 'Alcides Rios',
        title: 'Fundador y Director Principal',
        initial: 'A',
        bio: 'Nacido en Paraguay con más de dos décadas de experiencia empresarial internacional, Alcides aporta a AIG una combinación única de profundidad cultural y sofisticación corporativa. Su MBA en Finanzas y Banca Internacional, combinado con roles de liderazgo en Kodak y otras grandes corporaciones, sentó las bases de una destacada carrera emprendedora que culminó con la fundación de American Investment Group Inc. en 2023.',
        credentials: [
          'MBA — Finanzas Internacionales y Banca (1998)',
          'Roles de liderazgo en Kodak y grandes corporaciones multinacionales',
          'Empresario independiente desde 2015',
          'Fundador, American Investment Group Inc. (2023)',
          'Conocedor del mercado paraguayo con experiencia en capital transfronterizo',
        ],
      },
      {
        name: 'Andrew Rios',
        title: 'Cofundador y Socio',
        initial: 'A',
        bio: 'Graduado en Economía de la Universidad de Connecticut (2018), Andrew combina una sólida formación analítica con experiencia demostrada en ventas y conocimientos tecnológicos de vanguardia. Su certificación en Inteligencia Artificial y Aprendizaje Automático de la Universidad de Texas refleja el compromiso de AIG con una estrategia de inversión moderna e informada por datos. Andrew lidera las operaciones de AIG en Asunción con una visión clara de expansión regional.',
        credentials: [
          'Licenciatura en Economía — Universidad de Connecticut (2018)',
          'Certificado en IA y Aprendizaje Automático — Universidad de Texas',
          'Trayectoria profesional en ventas y desarrollo empresarial',
          'Líder de operaciones inmobiliarias en Asunción',
          'Estrategia de expansión regional y relaciones con inversores',
        ],
      },
    ],
  },

  // ── Servicios ──────────────────────────────────────────────────────────────
  services: {
    sectionLabel: 'Lo Que Ofrecemos',
    headline: 'Servicios de Inversión',
    items: [
      {
        number: '01',
        title: 'Inversión Inmobiliaria',
        description:
          'Adquisición y desarrollo estratégico de propiedades residenciales, comerciales y de uso mixto en el mercado urbano de rápido crecimiento de Asunción. Identificamos oportunidades de alto rendimiento en una etapa temprana del ciclo de desarrollo de Paraguay.',
        points: [
          'Adquisición y desarrollo de propiedades urbanas',
          'Activos residenciales y comerciales',
          'Enfoque en apreciación de capital',
          'Oportunidad de mercado y debida diligencia',
        ],
      },
      {
        number: '02',
        title: 'Ganadería y Cría de Ganado',
        description:
          'Inversión operativa en el robusto sector agropecuario de Paraguay, aprovechando la posición del país entre los diez principales exportadores mundiales de carne. AIG gestiona operaciones ganaderas productivas con prácticas sostenibles y escalables.',
        points: [
          'Adquisición de tierras de pastoreo',
          'Gestión de operaciones ganaderas',
          'Acceso a mercados de exportación',
          'Gestión sostenible de la tierra',
        ],
      },
      {
        number: '03',
        title: 'Gestión de Portafolio',
        description:
          'Supervisión integral de su portafolio de inversiones, combinando experiencia operativa local con análisis basado en datos e informes transparentes. Utilizamos herramientas potenciadas por IA para decisiones de mercado más inteligentes.',
        points: [
          'Supervisión activa del portafolio',
          'Informes trimestrales de desempeño',
          'Identificación y gestión de riesgos',
          'Análisis de mercado potenciado por IA',
        ],
      },
      {
        number: '04',
        title: 'Asociaciones con Inversores',
        description:
          'Estructuras de inversión personalizadas para inversores calificados que buscan exposición de nivel profesional al mercado emergente de Paraguay. Relaciones con inversores norteamericanos con acceso directo sobre el terreno.',
        points: [
          'Estructuras de inversión personalizadas',
          'Relaciones con inversores norteamericanos',
          'Acceso directo al mercado paraguayo',
          'Informes de operaciones transparentes',
        ],
      },
    ],
  },

  // ── Portafolio ─────────────────────────────────────────────────────────────
  portfolio: {
    sectionLabel: 'Activo y Planificado',
    headline: 'Portafolio de Inversiones',
    statusLabels: {
      Active: 'Activo',
      Development: 'En Desarrollo',
      Pipeline: 'En Cartera',
    },
    items: [
      {
        category: 'Bienes Raíces',
        title: 'Propiedades Urbanas en Asunción',
        description:
          'Un portafolio seleccionado de propiedades residenciales y de uso mixto en los distritos urbanos más deseados y con mayor apreciación de Asunción. Adquisición dirigida en barrios que se benefician del sostenido crecimiento del PIB y la migración urbana de Paraguay.',
        tags: ['Residencial', 'Uso Mixto', 'Urbano', 'Crecimiento de Capital'],
        status: 'Active' as const,
        highlight: true,
      },
      {
        category: 'Agricultura',
        title: 'Operaciones Ganaderas en Paraguay',
        description:
          'Inversiones ganaderas operativas en las fértiles regiones de pastizales de Paraguay. El país se encuentra entre los principales exportadores mundiales de carne, y las operaciones ganaderas de AIG están posicionadas para capturar tanto el crecimiento del consumo interno como la demanda de exportación internacional.',
        tags: ['Ganadería', 'Mercados de Exportación', 'Operaciones Sostenibles'],
        status: 'Active' as const,
        highlight: false,
      },
      {
        category: 'Comercial',
        title: 'Desarrollos Comerciales',
        description:
          'Posiciones estratégicas en el sector inmobiliario comercial en expansión de Asunción — parques de oficinas, centros comerciales e instalaciones logísticas que sirven a la creciente clase media de Paraguay y al aumento de la inversión extranjera directa.',
        tags: ['Oficinas', 'Comercio Minorista', 'Logística', 'Impulsado por IED'],
        status: 'Development' as const,
        highlight: false,
      },
      {
        category: 'Expansión',
        title: 'Cartera de Crecimiento Regional',
        description:
          'Construyendo una plataforma de inversión regional que extiende el modelo de AIG hacia los mercados paraguayos adyacentes y países vecinos. Los cimientos que se están estableciendo en Asunción hoy son la base de una presencia regional mucho mayor.',
        tags: ['Paraguay', 'Regional', 'En Cartera', 'Largo Plazo'],
        status: 'Pipeline' as const,
        highlight: true,
      },
    ],
  },

  // ── Testimonios ────────────────────────────────────────────────────────────
  testimonials: {
    sectionLabel: 'Voces de Inversores',
    headline: 'Lo Que Dicen Nuestros Socios',
    disclaimer:
      '* Los testimonios son representativos de la experiencia de los inversores de AIG. Los resultados individuales pueden variar. El desempeño pasado no es indicativo de resultados futuros.',
    items: [
      {
        quote:
          'AIG nos dio acceso a un mercado que nunca hubiéramos podido navegar por nuestra cuenta. El conocimiento de Alcides sobre Paraguay, combinado con el rigor analítico de Andrew, hizo que todo el proceso fuera transparente y altamente profesional. Hemos visto sólidos retornos tempranos en nuestras posiciones inmobiliarias.',
        author: 'Roberto M.',
        title: 'Inversor Privado — Connecticut',
        initials: 'RM',
      },
      {
        quote:
          'Lo que distingue a American Investment Group es que realmente viven y operan en este mercado. No gestionan desde la distancia — tienen relaciones reales sobre el terreno. Ese nivel de acceso y rendición de cuentas es poco frecuente en la inversión en mercados emergentes.',
        author: 'Patricia L.',
        title: 'Asesora de Portafolio — Miami, FL',
        initials: 'PL',
      },
      {
        quote:
          'Paraguay ha estado en nuestro radar durante años, pero encontrar el socio local adecuado era la pieza que faltaba. AIG proporcionó exactamente eso — culturalmente fluido, financieramente sofisticado y genuinamente comprometido con construir relaciones a largo plazo con sus inversores.',
        author: 'Santiago T.',
        title: 'Director de Family Office — Nueva York, NY',
        initials: 'ST',
      },
    ],
  },

  // ── Contacto ───────────────────────────────────────────────────────────────
  contact: {
    sectionLabel: 'Ponte en Contacto',
    headline: 'Comienza Tu Viaje de Inversión',
    intro:
      'Ya sea que sea un inversor nuevo explorando Paraguay o un operador experimentado que busca un socio de confianza sobre el terreno, damos la bienvenida a la conversación. Comuníquese y un miembro de nuestro equipo responderá con prontitud.',
    officeLabels: {
      primary: 'Oficina Principal',
      us: 'Estados Unidos',
      inquiries: 'Consultas',
    },
    offices: {
      primaryName: 'Asunción, Paraguay',
      primaryAddress: 'American Investment Group Inc.\nAsunción, República del Paraguay',
      usName: 'Estados Unidos',
      usAddress: 'American Investment Group Inc.\nOperaciones en Connecticut y Florida',
      email: 'info@americaninvestmentgroup.com',
    },
    disclaimer:
      'American Investment Group Inc. es una firma de inversión independiente enfocada en los mercados inmobiliarios y agrícolas de Paraguay. Todas las inversiones conllevan riesgo. Consulte a un asesor financiero autorizado antes de tomar decisiones de inversión.',
    form: {
      firstName: 'Nombre',
      firstNamePlaceholder: 'Carlos',
      lastName: 'Apellido',
      lastNamePlaceholder: 'García',
      email: 'Correo Electrónico',
      emailPlaceholder: 'carlos@ejemplo.com',
      interest: 'Área de Interés',
      interestOptions: [
        { value: '', label: 'Seleccione un área de interés' },
        { value: 'real-estate', label: 'Inversión Inmobiliaria' },
        { value: 'cattle-ranching', label: 'Ganadería y Cría de Ganado' },
        { value: 'portfolio-management', label: 'Gestión de Portafolio' },
        { value: 'investor-partnership', label: 'Asociación con Inversores' },
        { value: 'general', label: 'Consulta General' },
      ],
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntenos sobre sus objetivos de inversión y cómo podemos ayudarle...',
      submit: 'Enviar Consulta',
      submitting: 'Enviando...',
      privacyNote:
        'Al enviar, acepta ser contactado por American Investment Group Inc. con respecto a su consulta. Respetamos su privacidad.',
    },
    success: {
      headline: 'Mensaje Recibido',
      body: 'Gracias por comunicarse con nosotros. Un miembro del equipo de AIG se pondrá en contacto dentro de un día hábil.',
    },
  },

  // ── Pie de Página ──────────────────────────────────────────────────────────
  footer: {
    tagline:
      'Uniendo la experiencia norteamericana con las oportunidades de inversión más prometedoras de Paraguay desde 2023.',
    locations: ['Asunción, PY', 'Estados Unidos'],
    columns: {
      Company: [
        { label: 'Nuestra Historia', href: '#story' },
        { label: 'Nuestro Equipo', href: '#team' },
        { label: 'Contacto', href: '#contact' },
      ],
      Investments: [
        { label: 'Bienes Raíces', href: '#services' },
        { label: 'Ganadería', href: '#services' },
        { label: 'Gestión de Portafolio', href: '#services' },
        { label: 'Asociaciones de Inversores', href: '#services' },
      ],
      Portfolio: [
        { label: 'Propiedades en Asunción', href: '#portfolio' },
        { label: 'Operaciones Ganaderas', href: '#portfolio' },
        { label: 'Desarrollo Comercial', href: '#portfolio' },
        { label: 'Cartera Regional', href: '#portfolio' },
      ],
    },
    copyright: '© {year} American Investment Group Inc. Todos los derechos reservados.',
    legalLinks: ['Política de Privacidad', 'Términos de Uso', 'Divulgaciones'],
    legalDisclaimer:
      'American Investment Group Inc. no es un asesor de inversiones registrado. El contenido de este sitio web es únicamente informativo y no constituye asesoramiento de inversión ni una solicitud de inversión. Todas las inversiones conllevan riesgo, incluida la posible pérdida del capital. El desempeño pasado no es indicativo de resultados futuros. Consulte a un profesional financiero autorizado antes de tomar cualquier decisión de inversión.',
  },
}

export default es
