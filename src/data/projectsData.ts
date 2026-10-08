import { ProjectItem } from '@/types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    id: 'project-nexus-ai',
    slug: 'project-nexus-ai',
    title: 'Nexus AI',
    subtitle: 'Enterprise AI Copilot & Autonomous Workflow Engine',
    category: 'B2B SaaS / Enterprise AI Copilot',
    timeline: 'Q2 2024 — Q4 2024',
    featured: true,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailPlaceholder: '/images/projects/nexus-ai-preview.jpg',
    githubUrl: 'https://github.com/eddyready/nexus-ai-copilot',
    liveUrl: 'https://nexus-ai.demo.app',
    prdDocUrl: 'https://notion.so/eddyready/nexus-ai-prd-spec',
    metrics: [
      { label: 'ARR Growth', value: '+44%', change: '+44% YoY ARR uplift' },
      { label: 'Customer Churn', value: '-35%', change: '-35% net annual churn' },
      { label: 'Monthly Active Users', value: '120k MAU', change: '120k enterprise users' },
    ],
    tags: [
      'Enterprise AI',
      'LLM Orchestration',
      'RAG Pipeline',
      'B2B SaaS',
      'SOC2 Type II',
    ],
    caseStudy: {
      summary:
        'Nexus AI is a context-aware enterprise copilot designed for complex multi-step knowledge workflows in Fortune 500 enterprises, connecting disparate data silos into unified natural language actions.',
      problem:
        'Enterprise knowledge workers spent an average of 9.2 hours per week searching across legacy document repositories, ticketing systems, and siloed CRMs, leading to slowed deal cycles and high customer churn.',
      hypothesis:
        'By providing an in-context LLM assistant embedded directly into daily tools with zero-shot search and verifiable citations, enterprise workflow completion times will drop by >40%, directly driving retention and expansion ARR.',
      targetAudience:
        'Enterprise Operations Leads, Customer Success Managers, and Solutions Architects across mid-market and enterprise B2B accounts.',
      solution: [
        'Built a hybrid vector search and sparse retrieval (RAG) engine accessing internal data stores with strict RBAC permissions.',
        'Designed a multi-model reasoning router dynamically delegating queries between low-latency fast models and high-parameter reasoning models.',
        'Implemented real-time streaming citations and audit logging ensuring compliance with enterprise governance standards.',
        'Introduced a self-serve workflow builder enabling non-technical teams to automate prompt chains with human-in-the-loop approvals.',
      ],
      productDecisions: [
        'Prioritized deterministic citation verification over generative creativity to build enterprise IT trust early.',
        'Selected tenant-level data isolation architecture over shared vector stores to unlock regulated healthcare and fintech deals.',
        'Adopted usage-based tiered token billing aligned with customer value rather than static seat licensing.',
      ],
      metrics: [
        { label: 'ARR Growth', value: '+44%', change: 'Scaled from $14M to $20.2M ARR in 3 quarters' },
        { label: 'Annual Churn', value: '-35%', change: 'Account retention increased from 82% to 91%' },
        { label: 'Active User Base', value: '120k MAU', change: 'Reached 120,000 monthly active users across 45 enterprise customers' },
        { label: 'Time Saved / Worker', value: '6.4 hrs/wk', change: 'Average reduction in repetitive query overhead' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      githubUrl: 'https://github.com/eddyready/nexus-ai-copilot',
      liveUrl: 'https://nexus-ai.demo.app',
      prdDocUrl: 'https://notion.so/eddyready/nexus-ai-prd-spec',
    },
  },
  {
    id: 'project-pulse-analytics',
    slug: 'project-pulse-analytics',
    title: 'Pulse Analytics',
    subtitle: 'Real-Time Data Platform & Automated Experimentation Engine',
    category: 'Data Platform & Experimentation Engine',
    timeline: 'Q3 2023 — Q2 2024',
    featured: true,
    videoUrl: 'https://www.loom.com/share/placeholder-pulse',
    thumbnailPlaceholder: '/images/projects/pulse-analytics-preview.jpg',
    githubUrl: 'https://github.com/eddyready/pulse-analytics-engine',
    liveUrl: 'https://pulse.analytics.demo',
    prdDocUrl: 'https://notion.so/eddyready/pulse-analytics-prd',
    metrics: [
      { label: 'Query Velocity', value: '2.4x', change: '140% speedup on sub-second aggregates' },
      { label: 'Platform Uptime', value: '99.98%', change: 'Mission-critical tier-0 SLA' },
      { label: 'Cloud Infrastructure Cost', value: '$1.8M Saved', change: '$1.8M annualized cloud compute reduction' },
    ],
    tags: [
      'Distributed Systems',
      'Real-Time Streaming',
      'ClickHouse',
      'A/B Testing',
      'Apache Kafka',
    ],
    caseStudy: {
      summary:
        'Pulse Analytics modernized an aging batch data infrastructure into a sub-second real-time experimentation engine capable of processing 45 billion events daily with automated statistical significance detection.',
      problem:
        'Product and growth squads waited 18 to 36 hours for experiment telemetry, causing feature launch delays, high compute costs ($4M+ annually), and frequent downtime during high-traffic promotional events.',
      hypothesis:
        'Migrating to a columnar streaming architecture with pre-aggregated rollups and automated Bayesian sample-ratio-mismatch alerts will reduce query latency to sub-second thresholds and unlock rapid experiment velocity.',
      targetAudience:
        'Product Managers, Data Scientists, Growth Marketers, and Platform Engineers running high-velocity digital experiments.',
      solution: [
        'Architected event streaming ingestion pipeline using Kafka and ClickHouse, replacing legacy multi-hop batch ETL jobs.',
        'Designed a self-serve A/B experimentation interface featuring real-time statistical power calculators and guardrail metrics.',
        'Implemented automated cluster autoscaling and tiered cold-storage archival to slash idle compute spend.',
        'Shipped real-time metric visualization dashboards supporting cross-dimensional slice-and-dice with sub-second response.',
      ],
      productDecisions: [
        'Transitioned from p-value null hypothesis significance testing to sequential Bayesian testing to prevent early-stopping bias.',
        'Deprecating customized SQL scripts in favor of standardized metric definitions (Semantic Layer) to ensure metric alignment across teams.',
        'Built automated kill-switch SDK hooks for client apps to roll back faulty experiment variants within milliseconds.',
      ],
      metrics: [
        { label: 'Query Velocity', value: '2.4x', change: 'Median query execution dropped from 1,840ms to 760ms' },
        { label: 'Platform Availability', value: '99.98%', change: 'Zero critical downtime incidents across peak traffic' },
        { label: 'Cloud Compute Spend', value: '$1.8M Saved', change: 'Annualized cloud infrastructure costs reduced by 42%' },
        { label: 'Weekly Experiment Cadence', value: '3.1x', change: 'Increased running experiments from 14/wk to 44/wk' },
      ],
      videoUrl: 'https://www.loom.com/share/placeholder-pulse',
      githubUrl: 'https://github.com/eddyready/pulse-analytics-engine',
      liveUrl: 'https://pulse.analytics.demo',
      prdDocUrl: 'https://notion.so/eddyready/pulse-analytics-prd',
    },
  },
  {
    id: 'project-hyperion-mobile',
    slug: 'project-hyperion-mobile',
    title: 'Hyperion Mobile',
    subtitle: 'Consumer Fintech & Cross-Border Payment Rail',
    category: 'Consumer Fintech & Payment Rail',
    timeline: 'Q1 2023 — Q4 2023',
    featured: true,
    videoUrl: 'https://www.youtube.com/watch?v=placeholder-hyperion',
    thumbnailPlaceholder: '/images/projects/hyperion-mobile-preview.jpg',
    githubUrl: 'https://github.com/eddyready/hyperion-payment-rail',
    liveUrl: 'https://hyperion.pay.demo',
    prdDocUrl: 'https://notion.so/eddyready/hyperion-prd-spec',
    metrics: [
      { label: 'App Store Rating', value: '4.9★', change: 'Over 85,000 verified app reviews' },
      { label: 'Checkout Conversion', value: '+68%', change: '+68% funnel conversion uplift' },
      { label: 'Processed Volume', value: '4.2M Transactions', change: '4.2M transactions in initial launch year' },
    ],
    tags: [
      'Consumer Fintech',
      'Mobile Payments',
      'Fraud Prevention',
      'React Native',
      'PCI-DSS',
    ],
    caseStudy: {
      summary:
        'Hyperion Mobile re-engineered the mobile cross-border remittance and checkout flow, reducing drop-off from 62% to under 20% through smart biometric authentication and instant FX rate locks.',
      problem:
        'International peer-to-peer and merchant payments suffered severe checkout friction, hidden foreign exchange spread disclosures, and multi-step manual KYC checks that drove user abandonment.',
      hypothesis:
        'Introducing 1-tap biometric authorization, transparent upfront FX guarantee locks, and an instant KYC verification flow will boost onboarding-to-first-transaction conversion by over 50%.',
      targetAudience:
        'Global digital nomads, cross-border freelancers, and mobile-first retail consumers seeking instant low-fee transfers.',
      solution: [
        'Re-architected the mobile checkout funnel with native biometrics (Face ID / Touch ID) and zero-friction payment sheet.',
        'Partnered with banking infrastructure rails to provide guaranteed real-time FX spot rate locks with 0% hidden markup.',
        'Integrated automated AI-driven document OCR and liveness detection, cutting KYC verification from 48 hours to 45 seconds.',
        'Created proactive push notification workflows with real-time transfer tracking and webhook payment confirmations.',
      ],
      productDecisions: [
        'Prioritized native biometric checkout over legacy SMS OTP to combat SIM-swap fraud and eliminate delivery delays.',
        'Engineered offline transaction queueing to guarantee seamless user experience during spotty cellular coverage.',
        'Replaced multi-page checkout forms with an adaptive single-screen progressive disclosure interface.',
      ],
      metrics: [
        { label: 'Customer Rating', value: '4.9★', change: '85,000+ App Store reviews with 94% positive sentiment' },
        { label: 'Checkout Conversion', value: '+68%', change: 'First-transaction completion rate jumped from 38% to 64%' },
        { label: 'Transaction Throughput', value: '4.2M Transactions', change: 'Processed $480M+ total payment volume in year 1' },
        { label: 'KYC Pass Rate', value: '92.4%', change: 'Median verification latency dropped to 45 seconds' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=placeholder-hyperion',
      githubUrl: 'https://github.com/eddyready/hyperion-payment-rail',
      liveUrl: 'https://hyperion.pay.demo',
      prdDocUrl: 'https://notion.so/eddyready/hyperion-prd-spec',
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): ProjectItem[] {
  return projectsData.filter((project) => project.featured);
}

export default projectsData;
