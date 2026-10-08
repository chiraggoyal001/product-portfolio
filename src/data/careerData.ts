import { ExperienceItem } from '@/types/portfolio';

export const careerData: ExperienceItem[] = [
  {
    id: 'exp-principal-pm',
    indexNumber: '01',
    role: 'Principal Product Manager',
    organization: 'Synthetix AI / Enterprise Cloud',
    location: 'San Francisco, CA',
    period: '2023 — Present',
    duration: '1.5 yrs',
    summary:
      'Directing company-wide AI copilot initiatives, retrieval systems, and multi-tenant enterprise orchestration platforms across 4 cross-functional squads.',
    metricBullets: [
      'Spearheaded zero-to-one launch of Enterprise AI Copilot, scaling ARR from $0 to $20.2M in under 9 months across 45 Global 2000 accounts.',
      'Reduced net account churn from 14% to 4.8% by implementing proactive automated customer telemetry and real-time SLA breach warnings.',
      'Authored foundational architectural patent applications on multi-agent query arbitration and deterministic enterprise citation verification.',
      'Partnered with C-suite leadership to define unified pricing and packaging strategy, improving blended gross margins from 68% to 81%.',
    ],
    tags: [
      'Generative AI',
      'Product Strategy',
      'Enterprise B2B',
      'RAG Pipelines',
      'Pricing & Packaging',
      'GTM Leadership',
    ],
  },
  {
    id: 'exp-senior-pm-growth',
    indexNumber: '02',
    role: 'Senior PM - Growth & Platforms',
    organization: 'DataVortex Infrastructure',
    location: 'San Francisco, CA (Hybrid)',
    period: '2021 — 2023',
    duration: '2 yrs',
    summary:
      'Owned core data platform monetization, real-time analytics engine, and self-serve PLG adoption funnels servicing 25,000+ daily developer workspaces.',
    metricBullets: [
      'Engineered self-serve PLG onboarding flywheel that accelerated developer trial-to-paid conversion by +52%, unlocking $34M in net expansion pipeline.',
      'Architected real-time experimentation engine executing 40+ concurrent A/B tests weekly while slashing cloud data compute costs by $1.8M annually.',
      'Increased 90-day cohort retention from 42% to 68% through automated milestone celebrations and guided in-app query templates.',
      'Established engineering-wide SLO governance reducing high-severity platform incidents by 74% and achieving 99.98% uptime.',
    ],
    tags: [
      'PLG Flywheel',
      'A/B Experimentation',
      'ClickHouse',
      'Data Infrastructure',
      'Retention Modeling',
      'Funnel Optimization',
    ],
  },
  {
    id: 'exp-technical-pm',
    indexNumber: '03',
    role: 'Technical Product Manager',
    organization: 'NovaPay Global Rails',
    location: 'New York, NY / Remote',
    period: '2019 — 2021',
    duration: '2 yrs',
    summary:
      'Led core API platform, payment settlement gateways, and fraud mitigation models powering cross-border retail and merchant transactions.',
    metricBullets: [
      'Led migration to biometric 1-tap checkout and instant KYC verification, boosting checkout funnel conversion by +68% across 4.2M transactions.',
      'Designed ML-driven fraud prevention scoring pipeline that prevented $12.4M in fraudulent transfers while maintaining a 99.2% legitimate pass rate.',
      'Coordinated multi-region PCI-DSS Level 1 compliance and SOC2 Type II certifications with zero auditor exceptions.',
      'Scaled developer API platform throughput by 4x to 3,500 requests/sec with p99 response latencies under 85ms.',
    ],
    tags: [
      'Fintech Rails',
      'API Design',
      'Fraud Prevention',
      'PCI-DSS',
      'Distributed Systems',
      'Cross-Functional Execution',
    ],
  },
];

export default careerData;
