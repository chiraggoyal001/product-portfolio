import { ProjectItem } from '@/types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    id: 'project-kamada-finlit',
    slug: 'project-kamada-finlit',
    title: 'Kamada',
    subtitle: 'Financial Literacy Platform & Interactive Learning Community',
    category: 'EdTech & Financial Literacy Platform',
    timeline: 'Dec 2025 — Feb 2026',
    featured: true,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailPlaceholder: '/images/projects/kamada.png',
    githubUrl: 'https://github.com/chiraggoyal001/finacial-blog',
    liveUrl: 'https://kamad.netlify.app/',
    prdDocUrl: 'https://github.com/chiraggoyal001/finacial-blog#readme',
    metrics: [
      { label: 'Capstone Squad', value: '4 Members', change: 'Cross-functional Masai x BITSOM squad' },
      { label: 'User Journeys', value: '100% Mapped', change: 'Beginner-to-investor structured curriculum' },
      { label: 'Build Cadence', value: '3x Velocity', change: 'Rapid AI-assisted full-stack prototyping' },
    ],
    tags: [
      'Product Strategy',
      'PRD Authoring',
      'Financial Literacy',
      'AI Prototyping',
      'EdTech',
      'User Research',
    ],
    caseStudy: {
      summary:
        'Kamada is a deployed financial-literacy learning platform developed as a 4-person capstone project at Masai x BITSOM, designed to demystify personal finance, investment fundamentals, and wealth-building strategies for first-time retail investors.',
      problem:
        'Young professionals and students in India face overwhelming financial jargon, misleading social media advice, and fragmented learning resources, resulting in low financial confidence and high drop-off before initiating investments.',
      hypothesis:
        'By combining structured bite-sized learning journeys with interactive calculators, live expert webinars, and relatable visual storytelling, user financial confidence and module completion rates will increase significantly.',
      targetAudience:
        'College students, first-time salary earners, and non-finance professionals seeking practical, hype-free financial education.',
      solution: [
        'Conducted in-depth competitor benchmarking and user discovery to define core financial literacy pain points.',
        'Authored end-to-end Product Requirements Document (PRD) specifying user personas, functional specs, and success metrics.',
        'Designed and rapidly built the responsive web platform using AI-assisted coding tools and modern front-end frameworks.',
        'Organized a community financial-basics webinar, directed campaign video creatives via Google Flow, and coached team members on generative media workflows.',
      ],
      productDecisions: [
        'Prioritized modular interactive calculators over passive long-form text to boost retention and practical application.',
        'Adopted AI-assisted development loops to build and iterate on the production web app within rapid capstone deadlines.',
        'Integrated live webinar feedback loops directly into content sprint planning to address real learner questions.',
      ],
      metrics: [
        { label: 'Capstone Squad', value: '4 Members', change: 'Cross-functional Masai x BITSOM squad' },
        { label: 'Curriculum Depth', value: '100% Mapped', change: 'Complete beginner-to-investor roadmap' },
        { label: 'Prototyping Speed', value: '3x Velocity', change: 'Shipped fully interactive application on schedule' },
        { label: 'Webinar Attendance', value: 'High Engagement', change: 'Interactive live Q&A session with prospective learners' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      githubUrl: 'https://github.com/chiraggoyal001/finacial-blog',
      liveUrl: 'https://kamad.netlify.app/',
      prdDocUrl: 'https://github.com/chiraggoyal001/finacial-blog#readme',
    },
  },
  {
    id: 'project-alt-credit-scoring',
    slug: 'project-alt-credit-scoring',
    title: 'Alternative Credit Scoring MVP',
    subtitle: 'Simulated Credit Assessment for Individuals & MSMEs via 4 ML Pipelines',
    category: 'Fintech & ML Risk Engine',
    timeline: 'Jan 2026 — Mar 2026',
    featured: true,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailPlaceholder: '/images/projects/alt-credit.png',
    githubUrl: 'https://github.com/chiraggoyal001/alt-credit-scoring',
    liveUrl: 'https://alt-credit-scoring.streamlit.app/',
    prdDocUrl: 'https://github.com/chiraggoyal001/alt-credit-scoring#readme',
    metrics: [
      { label: 'Evaluation Dataset', value: '40,000 Records', change: 'Synthetic consumer & MSME profiles' },
      { label: 'Model Architecture', value: '4 ML Pipelines', change: 'Multi-stage scoring with benchmark parity' },
      { label: 'Fairness Analysis', value: 'Disparate Impact', change: 'Simulated bias reporting & audit transparency' },
    ],
    tags: [
      'Alternative Credit',
      'Machine Learning',
      'Streamlit',
      'Python',
      'Risk Modeling',
      'Explainable AI',
    ],
    caseStudy: {
      summary:
        'An interactive Streamlit-based prototype researching and simulating alternative credit underwriting for thin-file consumers and MSMEs without traditional bureau histories, incorporating stage-by-stage score explanations and disparate-impact fairness analytics.',
      problem:
        'Over 60% of small business owners and new-to-credit individuals in emerging markets are excluded from formal credit rails due to lack of traditional credit bureau scores, despite demonstrating positive operational and transaction cash flows.',
      hypothesis:
        'Underwriting based on multidimensional alternative signals (transaction velocity, utility consistency, behavioral stability) can accurately rank borrower creditworthiness while maintaining fairness across demographic cohorts.',
      targetAudience:
        'Fintech risk managers, alternative lending underwriters, and financial inclusion policy researchers.',
      solution: [
        'Generated and calibrated a comprehensive synthetic dataset of 40,000 individual and MSME borrower records.',
        'Engineered four distinct ML model pipelines (logistic baseline, tree ensembles, and neural scoring) for comparative risk prediction.',
        'Built stage-by-stage transparent score explanation cards displaying feature attribution and risk factor breakdowns.',
        'Implemented automated demographic parity and disparate-impact ratio calculations to test model fairness and regulatory compliance.',
      ],
      productDecisions: [
        'Emphasized simulated transparent explainability over black-box accuracy to prioritize regulatory compliance and user trust.',
        'Added benchmark model comparisons side-by-side to allow risk officers to evaluate trade-offs between precision and inclusivity.',
        'Clearly distinguished simulated outcomes from live lending decisions to maintain ethical AI standards.',
      ],
      metrics: [
        { label: 'Evaluation Dataset', value: '40,000 Records', change: 'Synthetic consumer & MSME profiles' },
        { label: 'Model Architecture', value: '4 ML Pipelines', change: 'Multi-stage scoring with benchmark parity' },
        { label: 'Fairness Auditing', value: 'Disparate Impact', change: 'Automated demographic parity reporting' },
        { label: 'Latency', value: 'Sub-second', change: 'Real-time score calculation and visual waterfall breakdown' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      githubUrl: 'https://github.com/chiraggoyal001/alt-credit-scoring',
      liveUrl: 'https://alt-credit-scoring.streamlit.app/',
      prdDocUrl: 'https://github.com/chiraggoyal001/alt-credit-scoring#readme',
    },
  },
  {
    id: 'project-salary-confidence',
    slug: 'project-salary-confidence',
    title: 'Salary Confidence Scoring',
    subtitle: 'Data-Validation MVP for Crowdsourced Compensation Submissions',
    category: 'Data Intelligence & Trust Modeling',
    timeline: 'Feb 2026 — Apr 2026',
    featured: true,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailPlaceholder: '/images/projects/salary-confidence.png',
    githubUrl: 'https://github.com/chiraggoyal001/salary-confidence-scoring',
    liveUrl: 'https://salary-confidence-scoring.streamlit.app/',
    prdDocUrl: 'https://github.com/chiraggoyal001/salary-confidence-scoring#readme',
    metrics: [
      { label: 'Validation Engine', value: 'Rolling-Window', change: 'Statistical temporal outlier detection' },
      { label: 'Spam Filtering', value: 'Structural Checks', change: 'Multi-point data integrity filters' },
      { label: 'Trust Transparency', value: 'Explainable AI', change: 'Attribution explanations for every score' },
    ],
    tags: [
      'Data Validation',
      'Trust Scoring',
      'Anomaly Detection',
      'Python',
      'Statistical Modeling',
      'Compensation Analytics',
    ],
    caseStudy: {
      summary:
        'A local data-validation engine designed to evaluate crowdsourced salary and compensation reports, filtering spam submissions, validating statistical plausibility via rolling windows, and calculating actionable trust scores with granular explanations.',
      problem:
        'Crowdsourced salary platforms suffer from bad actors submitting fabricated salaries, troll entries, and uncalibrated job titles, polluting benchmark percentiles and degrading platform credibility.',
      hypothesis:
        'Applying multi-stage heuristic structural tests combined with rolling-window peer group statistical validation will automatically flag anomalies and assign reliable trust confidence ratings.',
      targetAudience:
        'Compensation research platforms, HR tech product teams, and talent intelligence analysts.',
      solution: [
        'Built structural validation filters verifying salary-to-experience ratios, currency consistency, and formatting legitimacy.',
        'Implemented rolling-window statistical benchmarking calculating IQR and Z-score distributions across localized peer groups.',
        'Engineered an explainable confidence scoring formula attributing point deductions to specific anomalies.',
        'Designed an administrative review dashboard surfacing low-confidence edge cases for human-in-the-loop audit.',
      ],
      productDecisions: [
        'Avoided binary pass/fail filtering in favor of continuous 0-100 trust scores to preserve borderline data for human review.',
        'Created human-readable explanations alongside every score flag to aid platform moderators.',
        'Built lightweight modular Python routines allowing easy integration into existing ETL pipelines.',
      ],
      metrics: [
        { label: 'Validation Engine', value: 'Rolling-Window', change: 'Peer-group IQR & Z-score distribution bounds' },
        { label: 'Anomaly Capture', value: 'Multi-layer', change: 'Catches formatting, statistical, and structural spam' },
        { label: 'Trust Scoring', value: 'Explainable AI', change: '0-100 score with granular penalty breakdown' },
        { label: 'Processing Overhead', value: '<5ms / entry', change: 'Instantaneous stream validation throughput' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      githubUrl: 'https://github.com/chiraggoyal001/salary-confidence-scoring',
      liveUrl: 'https://salary-confidence-scoring.streamlit.app/',
      prdDocUrl: 'https://github.com/chiraggoyal001/salary-confidence-scoring#readme',
    },
  },
  {
    id: 'project-floro-redesign',
    slug: 'project-floro-redesign',
    title: 'Floro Subscription Redesign',
    subtitle: 'UX Redesign & Interactive Prototype for Daily Puja-Flower Subscriptions',
    category: 'D2C & E-Commerce UX Redesign',
    timeline: 'Jan 2026 — Feb 2026',
    featured: true,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailPlaceholder: '/images/projects/floro.png',
    githubUrl: 'https://github.com/chiraggoyal001/redisigning-floro',
    liveUrl: 'https://redisigning-floro.netlify.app',
    prdDocUrl: 'https://github.com/chiraggoyal001/redisigning-floro#readme',
    metrics: [
      { label: 'Plan Transparency', value: '100% Upfront', change: 'Clear seasonal substitution expectations' },
      { label: 'Funnel Friction', value: 'Simplified', change: 'Consolidated calendar & frequency picker' },
      { label: 'Prototype Scope', value: 'End-to-End', change: 'Interactive front-end customer onboarding flow' },
    ],
    tags: [
      'Product Design',
      'UX Research',
      'D2C Subscriptions',
      'E-Commerce',
      'User Journey Mapping',
      'Wireframing',
    ],
    caseStudy: {
      summary:
        'A comprehensive product and UX redesign of Floro, a direct-to-consumer daily puja-flower subscription service, restructuring the purchase funnel around transparent plan customization, clear seasonal substitution policies, and intuitive delivery scheduling.',
      problem:
        'Subscribers experienced confusion around seasonal flower substitutions, inconsistent delivery scheduling, and unclear tier pricing, creating high onboarding drop-off and support inquiry volume.',
      hypothesis:
        'Providing upfront visual tier breakdowns, explicit seasonal substitution disclosures, and a flexible delivery calendar in the checkout flow will increase subscription sign-ups and reduce cancellations.',
      targetAudience:
        'Urban households, cultural observance practitioners, and regular temple devotees in Indian metros.',
      solution: [
        'Conducted user flow analysis identifying key drop-off points in the existing subscription setup.',
        'Redesigned the tier comparison interface with visual packaging and clear volume indicators.',
        'Created dedicated seasonal variation guidance setting clear subscriber expectations before purchase.',
        'Engineered an interactive front-end prototype demonstrating the streamlined onboarding experience.',
      ],
      productDecisions: [
        'Made seasonal substitution transparency prominent during checkout rather than buried in FAQs.',
        'Consolidated delivery frequency and pause settings into a single interactive calendar component.',
        'Focused scope strictly on front-end user experience and journey clarity without live payment gating.',
      ],
      metrics: [
        { label: 'Plan Transparency', value: '100% Upfront', change: 'Clear seasonal substitution expectations' },
        { label: 'Funnel Steps', value: '3 Steps', change: 'Reduced onboarding from 6 fragmented screens to 3' },
        { label: 'User Clarity', value: 'Qualitative Uplift', change: 'Clearer plan selection and delivery frequency' },
        { label: 'Prototype Scope', value: 'Interactive', change: 'Complete front-end customer journey demo' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      githubUrl: 'https://github.com/chiraggoyal001/redisigning-floro',
      liveUrl: 'https://redisigning-floro.netlify.app',
      prdDocUrl: 'https://github.com/chiraggoyal001/redisigning-floro#readme',
    },
  },
  {
    id: 'project-last-run-game',
    slug: 'project-last-run-game',
    title: 'Last Run Game',
    subtitle: 'Interactive Game Prototype & Engagement Mechanics Architecture',
    category: 'Gaming & Interactive Experience',
    timeline: '2025 — 2026',
    featured: true,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailPlaceholder: '/images/projects/last-run-game.png',
    githubUrl: 'https://github.com/chiraggoyal001/Last_Run_Game',
    liveUrl: 'https://lastrungame.netlify.app/',
    prdDocUrl: 'https://github.com/chiraggoyal001/Last_Run_Game#readme',
    metrics: [
      { label: 'Game Engine Loop', value: '60 FPS', change: 'Low-latency event-driven animation state' },
      { label: 'Engagement Loop', value: 'High Score System', change: 'Competitive immediate feedback hooks' },
      { label: 'Interaction UX', value: 'Cross-Device', change: 'Fluid responsive keyboard and touch controls' },
    ],
    tags: [
      'Game Design',
      'Interactive UX',
      'State Machines',
      'Web Prototyping',
      'JavaScript',
      'Feedback Loops',
    ],
    caseStudy: {
      summary:
        'Last Run Game is an interactive browser game prototype built to explore real-time user feedback loops, state machine transitions, responsive input handling, and gamified retention mechanics.',
      problem:
        'Building responsive real-time web experiences requires managing rapid state changes, low-latency collision detection, and instant visual feedback without frame drops or input lag.',
      hypothesis:
        'Structuring game mechanics around modular state machines with immediate risk-reward scoring loops will drive high replayability and fluid user engagement.',
      targetAudience:
        'Casual web gamers and interactive product designers studying user retention mechanics.',
      solution: [
        'Designed core game loop and state machine handling menu, active play, pause, and game-over states.',
        'Implemented responsive player physics and obstacle generation with increasing difficulty curves.',
        'Created real-time score tracking and persistent high-score leaderboards to incentivize repeat sessions.',
        'Optimized rendering performance to maintain smooth 60 FPS across both desktop and mobile viewports.',
      ],
      productDecisions: [
        'Focused on instant restart mechanics with zero loading delay between attempts to maximize player flow state.',
        'Kept visual style minimalist and high-contrast to prioritize gameplay responsiveness over heavy asset loading.',
        'Structured modular code architecture to test new mechanics and power-ups rapidly.',
      ],
      metrics: [
        { label: 'Frame Rate', value: '60 FPS', change: 'Deterministic game loop with zero frame drops' },
        { label: 'Retention Hook', value: 'High Score System', change: 'Immediate replay trigger upon session completion' },
        { label: 'Response Latency', value: '<16ms', change: 'Sub-frame input registration for crisp control' },
        { label: 'Cross-Platform', value: '100% Responsive', change: 'Full keyboard and touch-screen compatibility' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      githubUrl: 'https://github.com/chiraggoyal001/Last_Run_Game',
      liveUrl: 'https://lastrungame.netlify.app/',
      prdDocUrl: 'https://github.com/chiraggoyal001/Last_Run_Game#readme',
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

