import { ProfileData } from '@/types/portfolio';

export const profileData: ProfileData = {
  name: 'Eddy Ready',
  role: 'Principal Product Manager',
  headline: 'Leading AI/ML Products, Enterprise Platforms & High-Velocity Growth Systems',
  introStatement: {
    whiteTextPre: 'I engineer ',
    accentText1: 'autonomous AI platforms',
    whiteTextMid: ' and scalable SaaS engines that transform complex data into ',
    accentText2: 'compounding enterprise value',
    whiteTextPost: ' at global scale.',
  },
  honors: [
    'Top PM Award',
    'Patent Holder',
    'Featured Speaker',
  ],
  about: {
    headline: 'Architecting zero-to-one breakthroughs and scaling category-defining platforms.',
    bioParagraphs: [
      'Principal Product Manager with 8+ years steering cross-functional engineering, design, and data science teams from zero-to-one concept through hyper-growth scaling. Specializing in enterprise AI copilots, real-time data streaming architectures, and algorithmic workflow automation.',
      'Proven track record generating over $120M in incremental enterprise pipeline and ARR across high-growth venture-backed companies and established tech enterprises. Champion of data-informed conviction, rapid experimentation cadence, and deep customer empathy.',
      'Passionate about the intersection of distributed systems and intuitive consumer-grade UX. Led technical product roadmaps delivering 99.98% platform SLAs, 2.4x query acceleration, and multi-tenant AI pipelines trusted by Fortune 500 enterprises.',
    ],
    credentialCallout: {
      stat: '$120M+',
      label: 'ENTERPRISE VALUE CREATED',
      subtext: 'Across AI/ML, data infrastructure, and FinTech platforms',
    },
    status: {
      available: true,
      text: 'Open to Advisory & Leadership',
      location: 'San Francisco / Remote',
    },
  },
  directChannels: [
    {
      name: 'Email',
      url: 'mailto:eddy@example.com',
      handle: 'eddy@example.com',
      type: 'email',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/eddyready',
      handle: 'linkedin.com/in/eddyready',
      type: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/eddyready',
      handle: 'github.com/eddyready',
      type: 'github',
    },
    {
      name: 'Phone',
      url: 'tel:+14155550199',
      handle: '+1 (415) 555-0199',
      type: 'phone',
    },
    {
      name: 'Calendar',
      url: 'https://cal.com/eddyready',
      handle: 'cal.com/eddyready',
      type: 'calendar',
    },
  ],
  expertise: [
    {
      indexNumber: '01',
      title: 'Product Strategy & Vision',
      description:
        'Translating ambiguous market opportunities into multi-year product roadmaps, clear unit economics, and durable competitive moats.',
      coreCompetencies: [
        '0-to-1 Product Development',
        'Market Opportunity Sizing',
        'Portfolio Roadmapping',
        'Pricing & Packaging Strategy',
        'Moat & Defensibility Architecture',
      ],
    },
    {
      indexNumber: '02',
      title: 'Customer Discovery & Research',
      description:
        'Synthesizing deep qualitative customer interviews, behavioral analytics, and telemetry to uncover acute enterprise pain points.',
      coreCompetencies: [
        'Continuous Discovery Habit',
        'Jobs-To-Be-Done (JTBD)',
        'User Journey Mapping',
        'Cohort Behavioral Telemetry',
        'Usability & Prototype Validation',
      ],
    },
    {
      indexNumber: '03',
      title: 'Growth & Metric Optimization',
      description:
        'Designing compounding acquisition loops, product-led expansion motions, and disciplined experimentation programs.',
      coreCompetencies: [
        'PLG Flywheels & Self-Serve',
        'A/B & Multi-Armed Bandit Testing',
        'Cohort Retention Modeling',
        'Conversion Funnel Optimization',
        'Net Revenue Retention (NRR)',
      ],
    },
    {
      indexNumber: '04',
      title: 'Technical System Architecture',
      description:
        'Partnering with principal architects on distributed systems, microservices decoupling, API contracts, and high-throughput data pipelines.',
      coreCompetencies: [
        'Event-Driven Architectures',
        'API Strategy & GraphQL',
        'Database Benchmarking',
        'SLA / SLO Governance',
        'Multi-Tenant Scalability',
      ],
    },
    {
      indexNumber: '05',
      title: 'Cross-Functional Orchestration',
      description:
        'Fostering psychological safety, velocity, and alignment across engineering squads, executive sponsors, sales, and customer success.',
      coreCompetencies: [
        'Dual-Track Agile Cadence',
        'Executive & Board Communication',
        'Go-To-Market Enablement',
        'Cross-Org Alignment',
        'OKRs & KPI Dashboards',
      ],
    },
    {
      indexNumber: '06',
      title: 'AI & Algorithmic Products',
      description:
        'Deploying LLM orchestration engines, retrieval-augmented generation (RAG), fine-tuning pipelines, and guardrail evaluation frameworks.',
      coreCompetencies: [
        'LLM Evaluation & Benchmarking',
        'RAG & Vector Search Systems',
        'Model Fine-Tuning Workflows',
        'AI Safety & Guardrails',
        'Human-in-the-Loop UX Patterns',
      ],
    },
  ],
};

export default profileData;
