// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH — American Investment Group SA
// To add a new language: duplicate this file, change the values, import it in
// contexts/LanguageContext.tsx, and add the locale key to the Locale union.
// ─────────────────────────────────────────────────────────────────────────────

const en = {
  // ── Navigation ─────────────────────────────────────────────────────────────
  nav: {
    story: 'Our Story',
    team: 'Team',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    cta: 'Invest With Us',
    langLabel: 'ES', // label shown on the toggle button (switches to Spanish)
    langAriaLabel: 'Switch to Spanish',
  },

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    overline: 'American Investment Group SA · Asunción, Paraguay',
    headlineLine1: 'Investing in the',
    headlineItalic: 'Heart of',
    headlineLine3: 'South America',
    subtext:
      "Bridging decades of North American business expertise with Paraguay's dynamic emerging market — delivering exceptional opportunities in real estate and cattle ranching for discerning investors.",
    cta1: 'Begin Your Investment Journey',
    cta2: 'Explore Opportunities',
    scroll: 'Scroll',
  },

  // ── Our Story ──────────────────────────────────────────────────────────────
  story: {
    sectionLabel: 'Our Foundation',
    headline: 'A Story Rooted in Two Worlds',
    founder: {
      eyebrow: 'The Founder',
      name: 'Alcides Rios',
      p1: 'Born in Paraguay, Alcides Rios carries a deep-rooted connection to his homeland that has shaped every chapter of his professional life. After earning his MBA in International Finance and Banking in 1998, he built a distinguished career spanning major corporations including Kodak, where he honed expertise in global business operations and financial strategy.',
      p2: "In 2015, Alcides embraced entrepreneurship — bringing his corporate experience to bear in building ventures that create lasting value. Then, in 2023, a pivotal return trip to Paraguay reignited his vision for the country's extraordinary potential. He founded American Investment Group SA to serve as the bridge he always believed was needed: connecting North American capital and expertise with Paraguay's remarkable growth opportunities.",
      p3: 'His blend of Paraguayan heritage, international finance credentials, and entrepreneurial drive positions AIG to operate with both insider knowledge and institutional discipline.',
    },
    partner: {
      eyebrow: 'The Partner',
      name: 'Andrew Rios',
      p1: "Born and raised in the United States, Andrew Rios represents the next generation of AIG's leadership. He graduated from the University of Connecticut in 2018 with a degree in Economics, laying the analytical foundation for his work in investment and business development.",
      p2: "Andrew has built a strong track record in sales — developing the client relationships and deal-making capabilities that are central to AIG's investor partnership model. Recognizing the transformative role of technology in modern investment, he completed an AI and Machine Learning course at the University of Texas, positioning AIG at the forefront of data-driven market analysis.",
      p3: "Currently focused on Asunción's urban real estate market, Andrew is building the operational groundwork for AIG's planned regional expansion across Paraguay and beyond. His North American perspective, combined with deep family ties to Paraguay, makes him uniquely suited to serve both domestic and international investors.",
    },
    stats: [
      { value: '2023', label: 'Year Founded' },
      { value: 'Asunción', label: 'Primary Market' },
      { value: '25+', label: 'Years Combined Experience' },
      { value: '2', label: 'Continents · One Vision' },
    ],
  },

  // ── Team ───────────────────────────────────────────────────────────────────
  team: {
    sectionLabel: 'Leadership',
    headline: 'The Team Behind AIG',
    credentialsLabel: 'Credentials & Background',
    members: [
      {
        name: 'Alcides Rios',
        title: 'Founder & Principal',
        initial: 'A',
        bio: 'Born in Paraguay with over two decades of international business experience, Alcides brings a rare combination of cultural depth and corporate sophistication to AIG. His MBA in International Finance & Banking, combined with leadership roles at Kodak and other major corporations, laid the foundation for a distinguished entrepreneurial career culminating in the founding of American Investment Group SA in 2023.',
        credentials: [
          'MBA — International Finance & Banking (1998)',
          'Senior leadership roles at Kodak & major multinational corporations',
          'Independent entrepreneur since 2015',
          'Founder, American Investment Group SA (2023)',
          'Paraguay market insider with cross-border capital expertise',
        ],
      },
      {
        name: 'Andrew Rios',
        title: 'Co-Founder & Partner',
        initial: 'A',
        bio: "A University of Connecticut Economics graduate (2018), Andrew combines rigorous analytical training with proven sales expertise and cutting-edge technological acumen. His completion of an AI & Machine Learning course at the University of Texas reflects AIG's commitment to modern, data-informed investment strategy. Andrew leads AIG's Asunción operations with a clear vision for regional expansion.",
        credentials: [
          'B.A. Economics — University of Connecticut (2018)',
          'AI & Machine Learning Certificate — University of Texas',
          'Professional sales & business development background',
          'Asunción real estate market operations lead',
          'Regional expansion strategy & investor relations',
        ],
      },
    ],
  },

  // ── Services ───────────────────────────────────────────────────────────────
  services: {
    sectionLabel: 'What We Offer',
    headline: 'Investment Services',
    items: [
      {
        number: '01',
        title: 'Real Estate Investment',
        description:
          "Strategic acquisition and development of residential, commercial, and mixed-use properties in Asunción's rapidly growing urban market. We identify high-yield opportunities early in Paraguay's development cycle.",
        points: [
          'Urban property acquisition & development',
          'Residential and commercial assets',
          'Capital appreciation focus',
          'Market timing & due diligence',
        ],
      },
      {
        number: '02',
        title: 'Cattle Ranching & Livestock',
        description:
          "Operational investment in Paraguay's robust agricultural sector, leveraging the country's position as a top-ten global beef exporter. AIG manages productive livestock operations with sustainable, scalable practices.",
        points: [
          'Pasture land acquisition',
          'Livestock operations management',
          'Export market access',
          'Sustainable land stewardship',
        ],
      },
      {
        number: '03',
        title: 'Portfolio Management',
        description:
          'Comprehensive oversight of your investment portfolio, combining local operational expertise with data-driven analysis and transparent reporting. Leveraging AI-enhanced tools for smarter market decisions.',
        points: [
          'Active portfolio oversight',
          'Quarterly performance reporting',
          'Risk identification & management',
          'AI-enhanced market analysis',
        ],
      },
      {
        number: '04',
        title: 'Investor Partnerships',
        description:
          "Tailored investment structures for qualified investors seeking professional-grade exposure to Paraguay's emerging market. North American investor relations with direct on-the-ground access.",
        points: [
          'Customized investment structures',
          'North American investor relations',
          'Direct Paraguay market access',
          'Transparent deal reporting',
        ],
      },
    ],
  },

  // ── Portfolio ──────────────────────────────────────────────────────────────
  portfolio: {
    sectionLabel: 'Active & Planned',
    headline: 'Investment Portfolio',
    statusLabels: {
      Active: 'Active',
      Development: 'Development',
      Pipeline: 'Pipeline',
    },
    items: [
      {
        category: 'Real Estate',
        title: 'Asunción Urban Properties',
        description:
          "A curated portfolio of residential and mixed-use properties in Asunción's most desirable and rapidly appreciating urban districts. Targeted acquisition in neighborhoods benefiting from Paraguay's sustained GDP growth and urban migration.",
        tags: ['Residential', 'Mixed-Use', 'Urban', 'Capital Growth'],
        status: 'Active' as const,
        highlight: true,
      },
      {
        category: 'Agriculture',
        title: 'Paraguayan Cattle Operations',
        description:
          "Operational livestock investments across Paraguay's fertile grassland regions. Paraguay ranks among the world's top beef exporters, and AIG's cattle operations are positioned to capture both domestic consumption growth and international export demand.",
        tags: ['Livestock', 'Export Markets', 'Sustainable Operations'],
        status: 'Active' as const,
        highlight: false,
      },
      {
        category: 'Commercial',
        title: 'Commercial Developments',
        description:
          "Strategic positions in Asunción's expanding commercial real estate sector — office parks, retail centers, and logistics facilities serving Paraguay's growing middle class and increasing foreign direct investment.",
        tags: ['Office', 'Retail', 'Logistics', 'FDI-Driven'],
        status: 'Development' as const,
        highlight: false,
      },
      {
        category: 'Expansion',
        title: 'Regional Growth Pipeline',
        description:
          "Building toward a regional investment platform that extends AIG's model into adjacent Paraguayan markets and neighboring countries. The groundwork being laid in Asunción today is the foundation for a much larger regional presence.",
        tags: ['Paraguay', 'Regional', 'Pipeline', 'Long-Term'],
        status: 'Pipeline' as const,
        highlight: true,
      },
    ],
  },

  // ── Testimonials ───────────────────────────────────────────────────────────
  testimonials: {
    sectionLabel: 'Investor Voices',
    headline: 'What Our Partners Say',
    disclaimer:
      '* Testimonials are representative of the AIG investor experience. Individual results may vary. Past performance is not indicative of future results.',
    items: [
      {
        quote:
          "AIG gave us access to a market we could never have navigated on our own. Alcides' knowledge of Paraguay, combined with Andrew's analytical rigor, made the entire process transparent and highly professional. We've seen strong early returns on our real estate positions.",
        author: 'Robert M.',
        title: 'Private Investor — Connecticut',
        initials: 'RM',
      },
      {
        quote:
          "What sets American Investment Group apart is the fact that they actually live and operate in this market. They're not managing from a distance — they have real relationships on the ground. That level of access and accountability is rare in emerging market investment.",
        author: 'Patricia L.',
        title: 'Portfolio Advisor — Miami, FL',
        initials: 'PL',
      },
      {
        quote:
          "Paraguay has been on our radar for years, but finding the right local partner was the missing piece. AIG provided exactly that — culturally fluent, financially sophisticated, and genuinely invested in building long-term relationships with their investors.",
        author: 'James T.',
        title: 'Family Office Principal — New York, NY',
        initials: 'JT',
      },
    ],
  },

  // ── Contact ────────────────────────────────────────────────────────────────
  contact: {
    sectionLabel: 'Get in Touch',
    headline: 'Begin Your Investment Journey',
    intro:
      'Whether you are a first-time investor exploring Paraguay or an experienced operator looking for a trusted on-the-ground partner, we welcome the conversation. Reach out and a member of our team will respond promptly.',
    officeLabels: {
      primary: 'Primary Office',
      us: 'United States',
      inquiries: 'Inquiries',
    },
    offices: {
      primaryName: 'Asunción, Paraguay',
      primaryAddress: 'American Investment Group SA\nAsunción, República del Paraguay',
      usName: 'United States',
      usAddress: 'American Investment Group SA\nConnecticut & Florida Operations',
      email: 'al.rios@amerinvesgroup.com',
    },
    disclaimer:
      "American Investment Group SA is an independent investment firm focused on Paraguay's real estate and agricultural markets. All investments involve risk. Please consult a licensed financial advisor before making investment decisions.",
    form: {
      firstName: 'First Name',
      firstNamePlaceholder: 'James',
      lastName: 'Last Name',
      lastNamePlaceholder: 'Thompson',
      email: 'Email Address',
      emailPlaceholder: 'james@example.com',
      interest: 'Area of Interest',
      interestOptions: [
        { value: '', label: 'Select an area of interest' },
        { value: 'real-estate', label: 'Real Estate Investment' },
        { value: 'cattle-ranching', label: 'Cattle Ranching & Livestock' },
        { value: 'portfolio-management', label: 'Portfolio Management' },
        { value: 'investor-partnership', label: 'Investor Partnership' },
        { value: 'general', label: 'General Inquiry' },
      ],
      message: 'Message',
      messagePlaceholder: 'Tell us about your investment goals and how we can help...',
      submit: 'Send Your Inquiry',
      submitting: 'Sending...',
      privacyNote:
        'By submitting, you agree to be contacted by American Investment Group SA regarding your inquiry. We respect your privacy.',
    },
    success: {
      headline: 'Message Received',
      body: 'Thank you for reaching out. A member of the AIG team will be in touch within one business day.',
    },
  },

  // ── Footer ─────────────────────────────────────────────────────────────────
  footer: {
    tagline:
      "Bridging North American expertise with Paraguay's most promising investment opportunities since 2023.",
    locations: ['Asunción, PY', 'United States'],
    columns: {
      Company: [
        { label: 'Our Story', href: '#story' },
        { label: 'Our Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
      ],
      Investments: [
        { label: 'Real Estate', href: '#services' },
        { label: 'Cattle Ranching', href: '#services' },
        { label: 'Portfolio Management', href: '#services' },
        { label: 'Investor Partnerships', href: '#services' },
      ],
      Portfolio: [
        { label: 'Asunción Properties', href: '#portfolio' },
        { label: 'Cattle Operations', href: '#portfolio' },
        { label: 'Commercial Development', href: '#portfolio' },
        { label: 'Regional Pipeline', href: '#portfolio' },
      ],
    },
    copyright: '© {year} American Investment Group SA All rights reserved.',
    legalLinks: ['Privacy Policy', 'Terms of Use', 'Disclosures'],
    legalDisclaimer:
      'American Investment Group SA is not a registered investment advisor. Content on this website is for informational purposes only and does not constitute investment advice or a solicitation to invest. All investments involve risk including potential loss of principal. Past performance is not indicative of future results. Please consult a licensed financial professional before making any investment decisions.',
  },
} as const

export default en

// Recursively replace all string/number literals with their primitive types so
// that es.ts (and future locales) can satisfy Translations without TypeScript
// complaining that e.g. 'Nuestra Historia' ≠ 'Our Story'.
type Stringify<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends readonly (infer U)[] ? readonly Stringify<U>[]
  : T extends object ? { readonly [K in keyof T]: Stringify<T[K]> }
  : T

export type Translations = Stringify<typeof en>
