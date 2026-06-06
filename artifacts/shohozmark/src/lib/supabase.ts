import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  short_bio: string | null;
  initials: string;
  photo_url: string | null;
  skills: string[];
  order_index: number;
  is_active: boolean;
  created_at: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  initials: string;
  quote: string;
  service_used: string | null;
  rating: number;
  featured: boolean;
  created_at: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  industry: string;
  description: string;
  client: string;
  result: string | null;
  cover_image: string | null;
  images: string[];
  testimonial_quote: string | null;
  testimonial_author: string | null;
  featured: boolean;
  published: boolean;
  published_at: string;
  created_at: string;
};

export type ContactInput = {
  name: string;
  email: string;
  phone?: string | null;
  business_name?: string | null;
  service_interest?: string | null;
  message: string;
};
