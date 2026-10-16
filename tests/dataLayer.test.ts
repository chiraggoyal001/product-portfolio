import assert from 'node:assert';
import { test, describe } from 'node:test';
import { profileData } from '../src/data/profileData';
import { projectsData, getProjectBySlug, getFeaturedProjects } from '../src/data/projectsData';
import { careerData } from '../src/data/careerData';
import {
  supabase,
  isSupabaseConfigured,
  fetchProfile,
  fetchProjects,
  fetchFeaturedProjects,
  fetchProjectBySlug,
  fetchCareerTimeline,
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

    test('honors is an array', () => {
      assert.ok(Array.isArray(profileData.honors));
    });

    test('about section includes headline, bio paragraphs, credential callout, and status', () => {
      assert.ok(profileData.about.headline.length > 0);
      assert.ok(profileData.about.bioParagraphs.length >= 3);
      assert.ok(profileData.about.credentialCallout.stat.length > 0);
      assert.ok(profileData.about.credentialCallout.label.length > 0);
      assert.strictEqual(profileData.about.status.available, true);
      assert.strictEqual(profileData.about.status.location, 'Delhi, India');
    });

    test('direct channels include Email, LinkedIn, GitHub, and Phone (no calendar)', () => {
      const types = profileData.directChannels.map((c) => c.type);
      assert.ok(types.includes('email'));
      assert.ok(types.includes('linkedin'));
      assert.ok(types.includes('github'));
      assert.ok(types.includes('phone'));
      assert.ok(!types.includes('calendar'));
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
    test('contains 5 high-caliber PM showcase projects', () => {
      assert.strictEqual(projectsData.length, 5);
      const slugs = projectsData.map((p) => p.slug);
      assert.ok(slugs.includes('project-kamada-finlit'));
      assert.ok(slugs.includes('project-alt-credit-scoring'));
      assert.ok(slugs.includes('project-salary-confidence'));
      assert.ok(slugs.includes('project-floro-redesign'));
      assert.ok(slugs.includes('project-last-run-game'));
    });

    test('project-kamada-finlit contains required metrics (4 Members, 100% Mapped, 3x Velocity)', () => {
      const kamada = projectsData.find((p) => p.slug === 'project-kamada-finlit');
      assert.ok(kamada);
      const metricValues = kamada.metrics.map((m) => m.value);
      assert.ok(metricValues.some((v) => v.includes('4 Members')));
      assert.ok(metricValues.some((v) => v.includes('100% Mapped')));
      assert.ok(metricValues.some((v) => v.includes('3x Velocity')));
    });

    test('project-alt-credit-scoring contains required metrics (40,000 Records, 4 ML Pipelines, Disparate Impact)', () => {
      const altCredit = projectsData.find((p) => p.slug === 'project-alt-credit-scoring');
      assert.ok(altCredit);
      const metricValues = altCredit.metrics.map((m) => m.value);
      assert.ok(metricValues.some((v) => v.includes('40,000 Records')));
      assert.ok(metricValues.some((v) => v.includes('4 ML Pipelines')));
      assert.ok(metricValues.some((v) => v.includes('Disparate Impact')));
    });

    test('project-salary-confidence contains required metrics (Rolling-Window, Structural Checks, Explainable AI)', () => {
      const salary = projectsData.find((p) => p.slug === 'project-salary-confidence');
      assert.ok(salary);
      const metricValues = salary.metrics.map((m) => m.value);
      assert.ok(metricValues.some((v) => v.includes('Rolling-Window')));
      assert.ok(metricValues.some((v) => v.includes('Structural Checks')));
      assert.ok(metricValues.some((v) => v.includes('Explainable AI')));
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
      const p1 = getProjectBySlug('project-kamada-finlit');
      assert.strictEqual(p1?.slug, 'project-kamada-finlit');
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
      assert.strictEqual(careerData[0].role, 'Product Management Intern');
      assert.strictEqual(careerData[1].role, 'Product Management Fellow — GenAI & Agentic AI');
      assert.strictEqual(careerData[2].role, 'Independent Product & Market Systems Builder');
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
    test('gracefully handles missing credentials without throwing', () => {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        assert.strictEqual(supabase, null);
        assert.strictEqual(isSupabaseConfigured(), false);
      }
    });

    test('fetchProfile() falls back smoothly to profileData', async () => {
      const data = await fetchProfile();
      assert.strictEqual(data.name, profileData.name);
      assert.strictEqual(data.role, profileData.role);
    });

    test('fetchProjects() falls back smoothly to projectsData', async () => {
      const projects = await fetchProjects();
      assert.strictEqual(projects.length, 5);
      assert.strictEqual(projects[0].slug, 'project-kamada-finlit');
    });

    test('fetchFeaturedProjects() falls back smoothly to getFeaturedProjects()', async () => {
      const featured = await fetchFeaturedProjects();
      assert.ok(featured.length > 0);
      assert.ok(featured.every((p) => p.featured));
    });

    test('fetchProjectBySlug() falls back smoothly to static project', async () => {
      const project = await fetchProjectBySlug('project-kamada-finlit');
      assert.ok(project);
      assert.strictEqual(project?.slug, 'project-kamada-finlit');

      const notFound = await fetchProjectBySlug('non-existent');
      assert.strictEqual(notFound, undefined);
    });

    test('fetchCareerTimeline() falls back smoothly to careerData', async () => {
      const timeline = await fetchCareerTimeline();
      assert.strictEqual(timeline.length, 3);
      assert.strictEqual(timeline[0].role, 'Product Management Intern');
    });
  });
});
