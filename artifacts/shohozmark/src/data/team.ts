export interface SocialLink {
  platform: "facebook" | "instagram" | "linkedin" | "twitter";
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  shortBio: string;
  initials: string;
  photo: string | null;
  socialLinks: SocialLink[];
  skills: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "founder",
    name: "Ibn E Habib",
    role: "Founder & Managing Director",
    bio: "Leads client acquisition, partnerships, business development, and overall company growth. Focused on building strong client relationships and helping businesses achieve measurable marketing results.",
    shortBio: "Leads business development and client partnerships. Focused on delivering measurable marketing results.",
    initials: "IH",
    photo: null,
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "instagram", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
    skills: ["Business Development", "Client Relations", "Partnerships", "Growth Strategy"],
  },
  {
    id: "creative-director",
    name: "Shomik Ujzaman",
    role: "Creative Director & Co Founder",
    bio: "Oversees the agency's creative vision, branding, content strategy, SEO, website development, social media marketing, and digital growth initiatives. Focused on creating impactful brand experiences, driving audience engagement, and delivering measurable growth for clients through creative and data-driven strategies.",
    shortBio: "Shapes creative vision and growth strategy — from brand identity to SEO, content, and digital performance.",
    initials: "SU",
    photo: null,
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "instagram", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
    skills: ["Brand Strategy", "SEO", "Content Strategy", "Social Media", "Web Development"],
  },
  {
    id: "video-lead",
    name: "Asmaul Hoque",
    role: "Video Production Lead",
    bio: "Specializes in video production, editing, and visual storytelling. Creates engaging visual content that helps brands connect with their audience and strengthen their digital presence across multiple platforms.",
    shortBio: "Creates video and visual content that helps brands tell compelling stories across digital platforms.",
    initials: "AH",
    photo: null,
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "instagram", url: "#" },
    ],
    skills: ["Video Production", "Video Editing", "Visual Storytelling", "Content Creation"],
  },
];
