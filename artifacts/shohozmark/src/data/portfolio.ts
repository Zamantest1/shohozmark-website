export interface CampaignResult {
  metric: string;
  value: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  clientName: string;
  clientType: string;
  industry: string;
  serviceUsed: string[];
  title: string;
  tagline: string;
  challenge: string;
  solution: string;
  results: CampaignResult[];
  testimonialQuote: string | null;
  testimonialAuthor: string | null;
  tags: string[];
  featured: boolean;
  color: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "spice-garden",
    slug: "spice-garden-restaurant",
    clientName: "Spice Garden Restaurant",
    clientType: "Restaurant",
    industry: "Food & Beverage",
    serviceUsed: ["Social Media Marketing", "Graphic Design", "Digital Advertising"],
    title: "How Spice Garden Grew Online Orders by 240%",
    tagline: "From empty tables to fully booked weekends in 3 months.",
    challenge: "Spice Garden had great food but zero digital presence. They relied entirely on word of mouth and were losing customers to newer, more social-media-savvy competitors in Rajshahi.",
    solution: "We launched a full social media takeover — professional food photography, daily Facebook & Instagram posts, targeted local ads to Rajshahi foodies, and a 'Reserve Your Table' campaign that drove direct bookings.",
    results: [
      { metric: "Increase in online orders", value: "240%", description: "Within 3 months of campaign launch" },
      { metric: "Facebook followers gained", value: "3,200+", description: "Organic growth in 90 days" },
      { metric: "Average ad cost per booking", value: "৳28", description: "Extremely low cost-per-acquisition" },
      { metric: "Weekend occupancy", value: "95%", description: "Up from 40% before the campaign" },
    ],
    testimonialQuote: "ShohozMark transformed our restaurant's online presence completely. We used to struggle to fill tables on weekends. Now we're fully booked and had to hire more staff.",
    testimonialAuthor: "Owner, Spice Garden Restaurant",
    tags: ["Restaurant", "Social Media", "Paid Ads", "Food Photography"],
    featured: true,
    color: "#00C853",
  },
  {
    id: "skyline-properties",
    slug: "skyline-properties",
    clientName: "Skyline Properties",
    clientType: "Real Estate Agency",
    industry: "Real Estate",
    serviceUsed: ["Brand Identity", "Digital Advertising", "Content Strategy"],
    title: "Rebranding Skyline Properties for the Digital Age",
    tagline: "A complete brand overhaul that tripled qualified leads.",
    challenge: "Skyline was an established real estate agency with 10 years in Rajshahi but outdated branding that failed to communicate trust and professionalism online. Competitors were outranking them on Facebook with polished visuals.",
    solution: "We redesigned their complete brand identity — new logo, brand colours, and a comprehensive visual system. We then launched targeted Facebook lead generation campaigns showcasing their premium properties with professional listing graphics.",
    results: [
      { metric: "Increase in qualified leads", value: "3x", description: "Month-over-month improvement" },
      { metric: "Cost per lead reduction", value: "62%", description: "Compared to their previous ad campaigns" },
      { metric: "Brand consistency score", value: "100%", description: "Across all digital and print materials" },
      { metric: "Properties sold via social", value: "15+", description: "In the first 6 months post-rebrand" },
    ],
    testimonialQuote: "Our new brand identity gave us the confidence to charge more and attract better clients. The team at ShohozMark understood exactly what we needed.",
    testimonialAuthor: "MD, Skyline Properties",
    tags: ["Real Estate", "Brand Identity", "Lead Generation", "Rebranding"],
    featured: true,
    color: "#FFD600",
  },
  {
    id: "trend-fashion",
    slug: "trend-fashion-store",
    clientName: "Trend Fashion Store",
    clientType: "Retail",
    industry: "Fashion & Apparel",
    serviceUsed: ["Social Media Marketing", "Influencer Marketing", "Graphic Design"],
    title: "Trend Fashion's Influencer Campaign That Sold Out in 48 Hours",
    tagline: "One influencer campaign. One week. Sold out.",
    challenge: "Trend Fashion was launching a new seasonal collection and needed maximum local awareness in Rajshahi within a tight budget. Traditional advertising wasn't reaching their target 18–30 year old demographic.",
    solution: "We partnered with 5 micro-influencers in Rajshahi with highly engaged followings in fashion and lifestyle. Each creator received the new collection and published authentic unboxing and styling content across Facebook and Instagram.",
    results: [
      { metric: "Products sold out", value: "48hrs", description: "Entire new collection cleared" },
      { metric: "Content pieces created", value: "40+", description: "Photos & videos from 5 creators" },
      { metric: "Combined campaign reach", value: "85,000+", description: "Local Rajshahi audience" },
      { metric: "Return on influencer spend", value: "8x", description: "Revenue vs total campaign cost" },
    ],
    testimonialQuote: "We honestly didn't expect the influencer campaign to work this well. Everything sold out. We've already booked another campaign for next season.",
    testimonialAuthor: "Owner, Trend Fashion Store",
    tags: ["Fashion", "Influencer Marketing", "Social Media", "UGC"],
    featured: true,
    color: "#B9F6CA",
  },
  {
    id: "mediscan-clinic",
    slug: "mediscan-diagnostics",
    clientName: "Mediscan Diagnostics",
    clientType: "Healthcare Clinic",
    industry: "Healthcare",
    serviceUsed: ["Local SEO", "Content Strategy", "Social Media Marketing"],
    title: "How Mediscan Became the Top-Ranked Diagnostic Centre in Rajshahi",
    tagline: "Page one on Google. 180% increase in appointment bookings.",
    challenge: "Mediscan offered excellent diagnostic services but was invisible on Google. Patients were finding competitors first, even though Mediscan was better equipped and more affordable.",
    solution: "We executed a full local SEO campaign — optimised their Google Business Profile, built local citations, and created monthly health-education blog content targeting Rajshahi-specific search terms. We also managed their Facebook page with patient education content.",
    results: [
      { metric: "Google ranking for 'diagnostic centre Rajshahi'", value: "#1", description: "From page 3 to top result" },
      { metric: "Increase in appointment bookings", value: "180%", description: "Year-over-year comparison" },
      { metric: "Google Business Profile views", value: "12x", description: "Monthly views increase" },
      { metric: "Organic website traffic", value: "+340%", description: "From SEO content efforts" },
    ],
    testimonialQuote: "We went from being invisible on Google to being the top result. Our appointment book is full every week now thanks to ShohozMark.",
    testimonialAuthor: "Manager, Mediscan Diagnostics",
    tags: ["Healthcare", "Local SEO", "Google Business Profile", "Content"],
    featured: false,
    color: "#00C853",
  },
];

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return PORTFOLIO_ITEMS.find((item) => item.slug === slug);
}

export function getFeaturedPortfolioItems(): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter((item) => item.featured);
}
