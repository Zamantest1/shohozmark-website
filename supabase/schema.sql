-- ShohozMark Supabase Schema
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/kjcdjvptqbzmmapmdgtm/editor

-- ─── TABLES ────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  business_name text,
  service_interest text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS team_members (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  short_bio text,
  initials text NOT NULL,
  photo_url text,
  skills text[] DEFAULT '{}',
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text,
  company text,
  initials text NOT NULL,
  quote text NOT NULL,
  service_used text,
  rating integer DEFAULT 5,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  industry text NOT NULL,
  description text NOT NULL,
  client text NOT NULL,
  result text,
  cover_image text,
  images text[] DEFAULT '{}',
  testimonial_quote text,
  testimonial_author text,
  featured boolean DEFAULT false,
  published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  author_bio text,
  author_initials text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  cover_image text,
  read_time text,
  published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- ─── ROW LEVEL SECURITY ─────────────────────────────────────────────────────

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a contact request
CREATE POLICY "Public insert contact" ON contact_submissions FOR INSERT WITH CHECK (true);

-- Public read access for active content
CREATE POLICY "Public read team" ON team_members FOR SELECT USING (is_active = true);
CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read portfolio" ON portfolio_items FOR SELECT USING (published = true);
CREATE POLICY "Public read blog" ON blog_posts FOR SELECT USING (published = true);

-- ─── SEED DATA ──────────────────────────────────────────────────────────────

INSERT INTO team_members (name, role, bio, short_bio, initials, skills, order_index) VALUES
(
  'Ibn E Habib', 'Founder & Managing Director',
  'Leads client acquisition, partnerships, business development, and overall company growth. Focused on building strong client relationships and helping businesses achieve measurable marketing results.',
  'Leads business development and client partnerships. Focused on delivering measurable marketing results.',
  'IH', ARRAY['Business Development','Client Relations','Partnerships','Growth Strategy'], 0
),
(
  'Shomik Ujzaman', 'Creative Director & Head of Growth',
  'Oversees the agency''s creative vision, branding, content strategy, SEO, website development, social media marketing, and digital growth initiatives. Focused on creating impactful brand experiences and delivering measurable growth for clients.',
  'Shapes creative vision and growth strategy — from brand identity to SEO, content, and digital performance.',
  'SU', ARRAY['Brand Strategy','SEO','Content Strategy','Social Media','Web Development'], 1
),
(
  'Asmaul Hoque', 'Video Production Lead',
  'Specialises in video production, editing, and visual storytelling. Creates engaging visual content that helps brands connect with their audience and strengthen their digital presence across multiple platforms.',
  'Creates video and visual content that helps brands tell compelling stories across digital platforms.',
  'AH', ARRAY['Video Production','Video Editing','Visual Storytelling','Content Creation'], 2
)
ON CONFLICT DO NOTHING;

INSERT INTO testimonials (name, role, company, initials, quote, service_used, rating, featured) VALUES
('Karim Hossain','Owner','Spice Garden Restaurant','KH','ShohozMark transformed our restaurant completely. We went from struggling to fill tables to being fully booked every weekend. The team understands local audiences like no one else. I''ve recommended them to every business owner I know.','Social Media Marketing',5,true),
('Farida Begum','Managing Director','Skyline Properties','FB','Our new brand identity changed everything. Clients now take us more seriously from the very first interaction. The leads we get from Facebook have doubled since ShohozMark took over our advertising. Absolutely worth every taka.','Brand Identity & Digital Advertising',5,true),
('Rahul Chandra','Owner','Trend Fashion Store','RC','The influencer campaign they ran for our new collection was incredible. Everything sold out in 48 hours. We''ve never seen results like that before. ShohozMark knows how to reach young people in Rajshahi better than anyone.','Influencer Marketing',5,true),
('Dr. Aminur Rahman','Centre Manager','Mediscan Diagnostics','AR','We are now the top result on Google for diagnostic services in Rajshahi. Our appointment bookings have nearly tripled. The ShohozMark team is professional, responsive, and genuinely cares about our business growth.','Local SEO & Content Strategy',5,true),
('Nasrin Akter','Founder','Bloom Beauty Salon','NA','I was sceptical about social media marketing at first, but ShohozMark proved me wrong. Within two months, my salon was fully booked three weeks in advance. The graphics they create are stunning — customers comment on them all the time.','Social Media Marketing & Graphic Design',5,false)
ON CONFLICT DO NOTHING;

INSERT INTO portfolio_items (title, slug, category, industry, description, client, result, testimonial_quote, testimonial_author, featured) VALUES
(
  'How Spice Garden Grew Online Orders by 240%','spice-garden-restaurant','Social Media Marketing','Food & Beverage',
  'A full social media takeover — professional food photography, daily Facebook & Instagram posts, targeted local ads to Rajshahi foodies, and a Reserve Your Table campaign that drove direct bookings.',
  'Spice Garden Restaurant',
  '240% increase in online orders. Facebook followers grew by 3,200+ organically. Weekend occupancy went from 40% to 95% in 3 months.',
  'ShohozMark transformed our restaurant''s online presence completely. We used to struggle to fill tables. Now we''re fully booked and had to hire more staff.',
  'Owner, Spice Garden Restaurant', true
),
(
  'Rebranding Skyline Properties for the Digital Age','skyline-properties','Brand Identity','Real Estate',
  'Complete brand identity redesign — new logo, brand colours, and a comprehensive visual system. Followed by targeted Facebook lead generation campaigns showcasing premium properties.',
  'Skyline Properties',
  '3x increase in qualified leads. Cost per lead reduced by 62%. 15+ properties sold via social media in the first 6 months post-rebrand.',
  'Our new brand identity gave us the confidence to charge more and attract better clients. The team at ShohozMark understood exactly what we needed.',
  'MD, Skyline Properties', true
),
(
  'Trend Fashion''s Influencer Campaign That Sold Out in 48 Hours','trend-fashion-store','Influencer Marketing','Fashion & Apparel',
  'Partnered with 5 micro-influencers in Rajshahi with highly engaged followings in fashion and lifestyle. Each creator published authentic unboxing and styling content across Facebook and Instagram.',
  'Trend Fashion Store',
  'Entire new collection sold out in 48 hours. 40+ content pieces created. Combined campaign reach of 85,000+ local audience. 8x return on influencer spend.',
  'We honestly didn''t expect the influencer campaign to work this well. Everything sold out. We''ve already booked another campaign for next season.',
  'Owner, Trend Fashion Store', true
),
(
  'How Mediscan Became the Top-Ranked Diagnostic Centre in Rajshahi','mediscan-diagnostics','Local SEO','Healthcare',
  'Full local SEO campaign — optimised Google Business Profile, built local citations, and created monthly health-education blog content targeting Rajshahi-specific search terms.',
  'Mediscan Diagnostics',
  '#1 on Google for ''diagnostic centre Rajshahi''. 180% increase in appointment bookings year-over-year. Google Business Profile views increased 12x.',
  'We went from being invisible on Google to being the top result. Our appointment book is full every week now thanks to ShohozMark.',
  'Manager, Mediscan Diagnostics', false
)
ON CONFLICT DO NOTHING;
