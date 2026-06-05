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
    name: "Sabbir Ahmed",
    role: "Founder & Creative Director",
    bio: "Sabbir founded ShohozMark with one mission: make world-class marketing accessible to every local business in Rajshahi. With over 5 years of experience in digital marketing and brand strategy across Bangladesh, he's helped 50+ businesses transform their online presence and grow their customer base.",
    shortBio: "5+ years in digital marketing. Founded ShohozMark to make great marketing affordable for local businesses.",
    initials: "SA",
    photo: null,
    socialLinks: [
      { platform: "facebook", url: "https://facebook.com/shohozmark" },
      { platform: "instagram", url: "https://instagram.com/shohozmark" },
      { platform: "linkedin", url: "#" },
    ],
    skills: ["Brand Strategy", "Social Media", "Digital Advertising", "Business Development"],
  },
  {
    id: "designer",
    name: "Nusrat Jahan",
    role: "Lead Graphic Designer",
    bio: "Nusrat brings brands to life through bold, purposeful design. With a background in fine arts from Rajshahi University and 3 years of agency experience, she leads our design studio with an eye for detail and a passion for helping local brands look their absolute best.",
    shortBio: "3 years in brand design. Creates bold visuals that help local businesses stand out.",
    initials: "NJ",
    photo: null,
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "instagram", url: "#" },
    ],
    skills: ["Logo Design", "Brand Identity", "Print Design", "Social Media Graphics"],
  },
  {
    id: "strategist",
    name: "Rafiqul Islam",
    role: "Digital Marketing Strategist",
    bio: "Rafiqul is our data guy. He builds and manages paid advertising campaigns across Facebook and Google, turning budgets of all sizes into measurable business results. His analytical approach and deep understanding of local consumer behaviour make him one of Rajshahi's most effective digital marketers.",
    shortBio: "Performance marketing specialist. Manages ad campaigns that consistently deliver measurable ROI.",
    initials: "RI",
    photo: null,
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
    skills: ["Meta Ads", "Google Ads", "Analytics", "Content Strategy"],
  },
];
