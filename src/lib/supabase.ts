import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ProfileData, ProjectItem, ExperienceItem } from '@/types/portfolio';
import { profileData } from '@/data/profileData';
import { projectsData } from '@/data/projectsData';
import { careerData } from '@/data/careerData';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const isSupabaseConfigured = (): boolean => {
  return supabase !== null;
};

/**
 * Fetch profile data with fallback to static profileData.
 */
export async function getProfile(): Promise<ProfileData> {
  if (!supabase) {
    return profileData;
  }

  try {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      if (error) {
        console.warn('Supabase profile query failed, using static fallback:', error.message);
      }
      return profileData;
    }

    return data as ProfileData;
  } catch (err) {
    console.warn('Supabase profile error, using static fallback:', err);
    return profileData;
  }
}

/**
 * Fetch all projects with fallback to static projectsData.
 */
export async function getProjects(): Promise<ProjectItem[]> {
  if (!supabase) {
    return projectsData;
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*');

    if (error || !data || data.length === 0) {
      if (error) {
        console.warn('Supabase projects query failed, using static fallback:', error.message);
      }
      return projectsData;
    }

    return data as ProjectItem[];
  } catch (err) {
    console.warn('Supabase projects error, using static fallback:', err);
    return projectsData;
  }
}

/**
 * Fetch a single project by slug with fallback to static projectsData.
 */
export async function getProjectBySlug(slug: string): Promise<ProjectItem | undefined> {
  if (!supabase) {
    return projectsData.find((project) => project.slug === slug);
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error || !data) {
      if (error) {
        console.warn(`Supabase project query for "${slug}" failed, using static fallback:`, error.message);
      }
      return projectsData.find((project) => project.slug === slug);
    }

    return data as ProjectItem;
  } catch (err) {
    console.warn(`Supabase project error for "${slug}", using static fallback:`, err);
    return projectsData.find((project) => project.slug === slug);
  }
}

/**
 * Fetch career timeline with fallback to static careerData.
 */
export async function getCareerTimeline(): Promise<ExperienceItem[]> {
  if (!supabase) {
    return careerData;
  }

  try {
    const { data, error } = await supabase
      .from('career_timeline')
      .select('*')
      .order('indexNumber', { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) {
        console.warn('Supabase career query failed, using static fallback:', error.message);
      }
      return careerData;
    }

    return data as ExperienceItem[];
  } catch (err) {
    console.warn('Supabase career error, using static fallback:', err);
    return careerData;
  }
}

export default supabase;
