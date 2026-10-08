import assert from 'node:assert';
import { test, describe } from 'node:test';
import { profileData } from '../src/data/profileData';
import { projectsData, getProjectBySlug, getFeaturedProjects } from '../src/data/projectsData';
import { careerData } from '../src/data/careerData';
import {
  supabase,
  isSupabaseConfigured,
  getProfile,
  getProjects,
  getProjectBySlug as getSupabaseProjectBySlug,
  getCareerTimeline,
} from '../src/lib/supabase';

describe('Task 2: Data Models & Modular Content Layer', () => {
  describe('Profile Data (src/data/profileData.ts)', () => {
    test('contains executive profile attributes and non-empty name and role', () => {
      assert.ok(profileData.name.length > 0, 'Name must be present');
      assert.ok(profileData.role.length > 0, 'Role must be present');
      assert.ok(profileData.headline.length > 0, 'Headline must be present');
    });

    test('introStatement contains all required segment fields', () => {
      const { introStatement } = profileData;
      assert.ok(introStatement.whiteTextPre.length > 0);
      assert.ok(introStatement.accentText1.length > 0);
      assert.ok(introStatement.whiteTextMid.length > 0);
      assert.ok(introStatement.accentText2.length > 0);
      assert.ok(introStatement.whiteTextPost.length > 0);
    });

    test('honors include required awards and distinctions', () => {
      assert.ok(profileData.honors.includes('Top PM Award'));
      assert.ok(profileData.honors.includes('Patent Holder'));
      assert.ok(profileData.honors.includes('Featured Speaker'));
    });

    test('about section includes headline, bio paragraphs, credential callout, and status', () => {
      assert.ok(profileData.about.headline.length > 0);
      assert.ok(profileData.about.bioParagraphs.length >= 3);
      assert.ok(profileData.about.credentialCallout.stat.length > 0);
      assert.ok(profileData.about.credentialCallout.label.length > 0);
      assert.strictEqual(profileData.about.status.available, true);
      assert.strictEqual(profileData.about.status.text, 'Open to Advisory & Leadership');
      assert.strictEqual(profileData.about.status.location, 'San Francisco / Remote');
    });

    test('direct channels include Email, LinkedIn, GitHub, Phone, and Calendar', () => {
      const types = profileData.directChannels.map((c) => c.type);
      assert.ok(types.includes('email'));
      assert.ok(types.includes('linkedin'));
      assert.ok(types.includes('github'));
      assert.ok(types.includes('phone'));
      assert.ok(types.includes('calendar'));
    });

    test('contains 6 core expertise disciplines with 2-digit indices', () => {
      assert.strictEqual(profileData.expertise.length, 6);
      const expectedIndices = ['01', '02', '03', '04', '05', '06'];
      profileData.expertise.forEach((item, index) => {
        assert.strictEqual(item.indexNumber, expectedIndices[index]);
        assert.ok(item.title.length > 0);
        assert.ok(item.description.length > 0);
        assert.ok(item.coreCompetencies.length >= 3);
      });

      const titles = profileData.expertise.map((item) => item.title);
      assert.ok(titles.some((t) => t.includes('Product Strategy')));
      assert.ok(titles.some((t) => t.includes('Customer Discovery')));
      assert.ok(titles.some((t) => t.includes('Growth & Metric Optimization')));
      assert.ok(titles.some((t) => t.includes('Technical System Architecture')));
      assert.ok(titles.some((t) => t.includes('Cross-Functional Orchestration')));
      assert.ok(titles.some((t) => t.includes('AI & Algorithmic Products')));
    });
  });

  describe('Projects Data (src/data/projectsData.ts)', () => {
    test('contains 3 high-caliber PM showcase projects', () => {
      assert.strictEqual(projectsData.length, 3);
      const slugs = projectsData.map((p) => p.slug);
      assert.ok(slugs.includes('project-nexus-ai'));
      assert.ok(slugs.includes('project-pulse-analytics'));
      assert.ok(slugs.includes('project-hyperion-mobile'));
    });

    test('project-nexus-ai contains required metrics (+44% ARR Growth, -35% Churn, 120k MAU)', () => {
      const nexus = projectsData.find((p) => p.slug === 'project-nexus-ai');
      assert.ok(nexus);
      const metricValues = nexus.metrics.map((m) => m.value);
      assert.ok(metricValues.some((v) => v.includes('+44%')));
      assert.ok(metricValues.some((v) => v.includes('-35%')));
      assert.ok(metricValues.some((v) => v.includes('120k')));
    });

    test('project-pulse-analytics contains required metrics (2.4x Query Velocity, 99.98% Uptime, $1.8M Saved)', () => {
      const pulse = projectsData.find((p) => p.slug === 'project-pulse-analytics');
      assert.ok(pulse);
      const metricValues = pulse.metrics.map((m) => m.value);
      assert.ok(metricValues.some((v) => v.includes('2.4x')));
      assert.ok(metricValues.some((v) => v.includes('99.98%')));
      assert.ok(metricValues.some((v) => v.includes('$1.8M Saved')));
    });

    test('project-hyperion-mobile contains required metrics (4.9★ App Rating, +68% Conversion, 4.2M Transactions)', () => {
      const hyperion = projectsData.find((p) => p.slug === 'project-hyperion-mobile');
      assert.ok(hyperion);
      const metricValues = hyperion.metrics.map((m) => m.value);
      assert.ok(metricValues.some((v) => v.includes('4.9★')));
      assert.ok(metricValues.some((v) => v.includes('+68%')));
      assert.ok(metricValues.some((v) => v.includes('4.2M')));
    });

    test('each project satisfies deep-dive case study contract and links', () => {
      projectsData.forEach((project) => {
        assert.ok(project.videoUrl, `${project.slug} must have videoUrl`);
        assert.ok(project.githubUrl, `${project.slug} must have githubUrl`);
        assert.ok(project.liveUrl, `${project.slug} must have liveUrl`);
        assert.ok(project.prdDocUrl, `${project.slug} must have prdDocUrl`);
        assert.ok(project.caseStudy.summary.length > 0);
        assert.ok(project.caseStudy.problem.length > 0);
        assert.ok(project.caseStudy.hypothesis.length > 0);
        assert.ok(project.caseStudy.targetAudience.length > 0);
        assert.ok(project.caseStudy.solution.length >= 3);
        assert.ok(project.caseStudy.productDecisions.length >= 2);
        assert.ok(project.caseStudy.metrics.length >= 3);
      });
    });

    test('helper functions getProjectBySlug and getFeaturedProjects work correctly', () => {
      const p1 = getProjectBySlug('project-nexus-ai');
      assert.strictEqual(p1?.slug, 'project-nexus-ai');
      assert.strictEqual(getProjectBySlug('non-existent'), undefined);

      const featured = getFeaturedProjects();
      assert.ok(featured.length > 0);
      assert.ok(featured.every((p) => p.featured));
    });
  });

  describe('Career Data (src/data/careerData.ts)', () => {
    test('contains 3 stacked timeline entries', () => {
      assert.strictEqual(careerData.length, 3);
      assert.strictEqual(careerData[0].indexNumber, '01');
      assert.strictEqual(careerData[1].indexNumber, '02');
      assert.strictEqual(careerData[2].indexNumber, '03');
    });

    test('timeline entries define the 3 specified executive roles', () => {
      assert.strictEqual(careerData[0].role, 'Principal Product Manager');
      assert.strictEqual(careerData[1].role, 'Senior PM - Growth & Platforms');
      assert.strictEqual(careerData[2].role, 'Technical Product Manager');
    });

    test('each entry has metric-driven bullets and skill pill tags', () => {
      careerData.forEach((entry) => {
        assert.ok(entry.metricBullets.length >= 3);
        assert.ok(entry.tags.length >= 4);
        assert.ok(entry.summary.length > 0);
        assert.ok(entry.organization.length > 0);
        assert.ok(entry.period.length > 0);
      });
    });
  });

  describe('Supabase Client & Fallback Layer (src/lib/supabase.ts)', () => {
    test('gracefully handles missing credentials without crashing', () => {
      // By default in this test environment without env vars:
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        assert.strictEqual(supabase, null);
        assert.strictEqual(isSupabaseConfigured(), false);
      }
    });

    test('getProfile() falls back smoothly to profileData', async () => {
      const data = await getProfile();
      assert.strictEqual(data.name, profileData.name);
      assert.strictEqual(data.role, profileData.role);
    });

    test('getProjects() falls back smoothly to projectsData', async () => {
      const projects = await getProjects();
      assert.strictEqual(projects.length, 3);
      assert.strictEqual(projects[0].slug, 'project-nexus-ai');
    });

    test('getProjectBySlug() falls back smoothly to static project', async () => {
      const project = await getSupabaseProjectBySlug('project-nexus-ai');
      assert.ok(project);
      assert.strictEqual(project?.slug, 'project-nexus-ai');

      const notFound = await getSupabaseProjectBySlug('non-existent');
      assert.strictEqual(notFound, undefined);
    });

    test('getCareerTimeline() falls back smoothly to careerData', async () => {
      const timeline = await getCareerTimeline();
      assert.strictEqual(timeline.length, 3);
      assert.strictEqual(timeline[0].role, 'Principal Product Manager');
    });
  });
});
