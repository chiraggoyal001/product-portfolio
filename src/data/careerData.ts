import { ExperienceItem } from '@/types/portfolio';

export const careerData: ExperienceItem[] = [
  {
    id: 'exp-awign-pm',
    indexNumber: '01',
    role: 'Product Management Intern',
    organization: 'Awign',
    location: 'Remote',
    period: 'Apr 2026 — Present',
    duration: 'Current',
    summary:
      'Building AI-enabled internal tools, operational workflow engines, and enterprise automation pipelines across HR and robotics operations squads.',
    metricBullets: [
      'Built and deployed an egocentric sprint planner used by robotics operations to manage active and new projects, match workforce availability to earliest projected completion, and visualize schedule impacts from leave, early completion, or delays.',
      'Built a live enterprise hiring workflow used by Awign HR and a client, covering resume upload and enhancement, HR review, supplemental-detail collection, client interview approval, third-party background verification via API, and offer-letter handoff.',
      'Improved a proctor-referral admin portal to show user-level dues and upcoming payments, replacing tracking previously maintained in Google Sheets; the portal is currently actively used by the admin team.',
      'Supported a NEET PG proctor recruitment Lucky Draw that recorded 10,000+ unique sign-ups in 20 days; collaborated with technical and design teams on recurring campaign communications and event creatives.',
      'Developed an FAQ-grounded chatbot for a luxury property-rental client to capture leads and answer common queries outside team availability; built a working ChatGPT-based invoice-scanning wrapper for a client loyalty platform.',
      'Mapped HR and operations workflows in Whimsical/Miro and coordinated with internal teams, engineering, designers, and the senior PM on requirements, deployment, and approvals.',
    ],
    tags: [
      'Internal Tools',
      'Sprint Planning',
      'Enterprise HR',
      'API Verification',
      'Robotics Ops',
      'FAQ Chatbot',
      'Invoice OCR',
      'Whimsical & Miro',
    ],
  },
  {
    id: 'exp-masai-bitsom',
    indexNumber: '02',
    role: 'Product Management Fellow — GenAI & Agentic AI',
    organization: 'Masai x BITSOM',
    location: 'Remote / Hybrid',
    period: 'Dec 2025 — Jun 2026',
    duration: '6 mos',
    summary:
      'Intensive executive product management fellowship focused on GenAI architectures, agentic workflows, PRD authoring, and rapid prototyping.',
    metricBullets: [
      'Led 4-person capstone squad building Kamada, an AI-assisted financial literacy platform; authored comprehensive PRD, shaped user journeys, and organized live community webinars.',
      'Researched and engineered Alternative Credit Scoring Streamlit MVP evaluating 40,000 synthetic records across 4 ML model pipelines with disparate-impact fairness analytics.',
      'Orchestrated agentic workflows and prompt-chaining architectures for rapid prototype validation using Cursor, Lovable, Supabase, and Netlify.',
      'Conducted continuous customer discovery, competitor benchmarking, and user persona mapping across emerging consumer fintech and EdTech verticals.',
    ],
    tags: [
      'GenAI & Agentic AI',
      'PRD Authoring',
      'Credit Modeling',
      'Streamlit',
      'User Journeys',
      'Customer Discovery',
      'Rapid Prototyping',
    ],
  },
  {
    id: 'exp-independent-builder',
    indexNumber: '03',
    role: 'Independent Product & Market Systems Builder',
    organization: 'Self-Directed Engineering & Trading',
    location: 'Delhi, India',
    period: '2022 — Present',
    duration: '4 yrs',
    summary:
      'Architecting self-directed quantitative market systems, data validation engines, and consumer UX redesign prototypes.',
    metricBullets: [
      'Developed custom Pine Script algorithmic indicators and Chartink scanners for automated technical equity screening and pattern recognition.',
      'Architected Salary Confidence Scoring MVP utilizing rolling-window statistical validation, anomaly detection with explainability, and trust scoring.',
      'Redesigned Floro daily puja-flower subscription journey around clearer plan selection, service expectations, and transparent seasonal substitutions.',
      'Engineered interactive browser game prototypes evaluating state machines and user retention hooks in real-time gameplay.',
    ],
    tags: [
      'Pine Script',
      'Market Scanners',
      'Trust Scoring',
      'Statistical Validation',
      'UX Redesign',
      'Rapid Prototyping',
    ],
  },
];

export default careerData;

