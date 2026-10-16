import { ProfileData } from '@/types/portfolio';

export const profileData: ProfileData = {
  name: 'Chirag Goyal',
  role: 'Product Management',
  headline: 'AI Products & Workflow Automation — Internal Tools, Rapid Prototyping & Operational Systems',
  introStatement: {
    whiteTextPre: 'I translate ',
    accentText1: 'complex operational workflows',
    whiteTextMid: ' into scalable AI-enabled internal tools, automated systems, and ',
    accentText2: 'high-impact digital products',
    whiteTextPost: ' through rapid prototyping and deep user empathy.',
  },
  honors: [],
  about: {
    headline: 'Translating enterprise operations and team needs into intuitive, AI-enabled tools.',
    bioParagraphs: [
      'Product Management practitioner specializing in AI-enabled internal tools, operational workflow automation, and rapid prototyping. Proven track record turning ambiguous team pain points across HR, robotics operations, and client services into deployed, high-utility web applications.',
      'At **Awign**, architected egocentric sprint planners for robotics ops, deployed end-to-end enterprise hiring pipelines with automated API verification, and drove a proctor recruitment campaign capturing over **10,000+** unique sign-ups in 20 days. Combines deep workflow mapping in Whimsical/Miro with hands-on AI-assisted building and cross-functional leadership.',
      'Completed intensive Product Management training at **Masai x BITSOM** focused on GenAI and Agentic AI. Self-directed systems builder creating machine learning credit models across **40,000 records**, crowdsourced salary trust engines, and financial literacy platforms.',
    ],
    credentialCallout: {
      stat: '10,000+',
      label: 'UNIQUE CAMPAIGN SIGN-UPS',
      subtext: 'Recorded in 20 days for Awign NEET PG proctor recruitment campaign',
    },
    status: {
      available: true,
      text: 'Open to Opportunities',
      location: 'Delhi, India',
    },
    portraitUrl: '/images/profile/chirag-goyal.jpg',
  },
  directChannels: [
    {
      name: 'Email',
      url: 'mailto:goyalchirag721@gmail.com',
      handle: 'goyalchirag721@gmail.com',
      type: 'email',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/chirag-goyal-9858101b0',
      handle: 'linkedin.com/in/chirag-goyal-9858101b0',
      type: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/chiraggoyal001',
      handle: 'github.com/chiraggoyal001',
      type: 'github',
    },
    {
      name: 'Phone',
      url: 'tel:+919871963032',
      handle: '+91 98719 63032',
      type: 'phone',
    },
  ],
  expertise: [
    {
      indexNumber: '01',
      title: 'Product Strategy & PRD Authoring',
      description:
        'Translating ambiguous problem spaces into prioritized PRDs, detailed user stories, MVP boundaries, and clear success metrics.',
      coreCompetencies: [
        'PRD & Spec Authoring',
        'MVP Scoping & Prioritization',
        'User Journey Mapping',
        'Competitor Benchmarking',
        'Success Metrics & KPIs',
      ],
    },
    {
      indexNumber: '02',
      title: 'Customer Discovery & Workflow Mapping',
      description:
        'Mapping operational friction across HR and team workflows in Whimsical/Miro to architect streamlined digital applications.',
      coreCompetencies: [
        'Operational Workflow Mapping',
        'Whimsical & Miro Wireframing',
        'User Journey Architecture',
        'Stakeholder Needs Discovery',
        'User Feedback Synthesis',
      ],
    },
    {
      indexNumber: '03',
      title: 'Growth & Metric Optimization',
      description:
        'Designing high-conversion recruitment campaigns, referral incentives, and event communication loops driving rapid user acquisition.',
      coreCompetencies: [
        'Recruitment Campaign Strategy',
        'Referral Program Architecture',
        'Conversion Funnel Optimization',
        'Event Creative Alignment',
        'Acquisition Telemetry & Retention',
      ],
    },
    {
      indexNumber: '04',
      title: 'Technical System Architecture & Tooling',
      description:
        'Hands-on full-stack rapid prototyping leveraging modern AI tooling, relational backends, automated verification APIs, and serverless hosting.',
      coreCompetencies: [
        'AI Prototyping (Cursor, Lovable)',
        'Supabase & Relational Data Models',
        'API Background Verification',
        'n8n Workflow Automation',
        'Netlify CI/CD & Deployments',
      ],
    },
    {
      indexNumber: '05',
      title: 'Cross-Functional Orchestration',
      description:
        'Aligning engineering, design, operations squads, and executive stakeholders to ship production-ready tools on schedule.',
      coreCompetencies: [
        'Robotics Ops Sprint Planning',
        'Engineering & Design Alignment',
        'Client Stakeholder Coordination',
        'Operational Change Management',
        'Product Release Documentation',
      ],
    },
    {
      indexNumber: '06',
      title: 'AI & Algorithmic Products',
      description:
        'Deploying LLM-powered client chatbots, document OCR wrappers, ML credit pipelines, and automated anomaly detection engines.',
      coreCompetencies: [
        'OpenAI API & Prompt Orchestration',
        'FAQ-Grounded Conversational AI',
        'Document OCR & Receipt Parsing',
        'Machine Learning Risk Scoring',
        'Statistical Anomaly Detection',
      ],
    },
  ],
};

export default profileData;
