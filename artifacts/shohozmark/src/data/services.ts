export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  color: string;
  features: string[];
  benefits: ServiceBenefit[];
  process: ServiceProcess[];
  faqs: FAQ[];
  cta: string;
  industries: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const SERVICES: Service[] = [
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Turn Followers Into Loyal Customers",
    shortDescription: "Facebook, Instagram campaigns tailored for Rajshahi audiences.",
    longDescription:
      "We create and manage high-performing social media campaigns specifically designed for local Bangladeshi audiences. From daily content to paid promotions, we handle everything so you can focus on running your business.",
    icon: "Smartphone",
    color: "#00C853",
    features: [
      "Facebook & Instagram page management",
      "Content calendar planning",
      "Paid ad campaigns (boosted posts & Meta Ads)",
      "Audience targeting for Rajshahi & nearby districts",
      "Monthly analytics reports",
      "Story & Reel creation",
      "Community management & comment replies",
    ],
    benefits: [
      { title: "More Footfall", description: "Targeted local campaigns bring real customers through your door." },
      { title: "Brand Awareness", description: "Consistent posting keeps your brand top-of-mind for your audience." },
      { title: "Measurable ROI", description: "Every taka spent is tracked so you know exactly what's working." },
    ],
    process: [
      { step: 1, title: "Audit", description: "We review your current social presence and identify gaps." },
      { step: 2, title: "Strategy", description: "We build a content plan aligned with your business goals." },
      { step: 3, title: "Execute", description: "We create, schedule, and publish content consistently." },
      { step: 4, title: "Optimise", description: "We track performance and refine based on real data." },
    ],
    faqs: [
      { question: "How soon will I see results?", answer: "Most clients see meaningful engagement improvements within the first 30 days and measurable business results within 60–90 days." },
      { question: "Do you handle the comment replies?", answer: "Yes. Our team manages your community — responding to comments, messages, and reviews promptly." },
      { question: "Which platforms do you work with?", answer: "Primarily Facebook and Instagram. We can also manage YouTube Shorts and TikTok on request." },
      { question: "Do I need to provide content?", answer: "No. We handle everything from photography briefing to copywriting. You just approve before publishing." },
    ],
    cta: "Get a Free Social Media Audit",
    industries: ["Restaurants", "Retail", "Real Estate", "Healthcare", "Education"],
    seo: {
      title: "Social Media Marketing in Rajshahi — ShohozMark",
      description: "Professional Facebook & Instagram marketing for local businesses in Rajshahi. Affordable packages, real results. Get your free audit today.",
      keywords: ["social media marketing Rajshahi", "Facebook marketing Bangladesh", "Instagram marketing Rajshahi", "local social media agency"],
    },
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design",
    tagline: "Designs That Make People Stop & Look",
    shortDescription: "Logos, banners, menus, flyers that make your brand memorable.",
    longDescription:
      "Great design is the difference between being noticed and being ignored. Our design team creates visuals that are bold, on-brand, and built to convert — from social media graphics to full print materials.",
    icon: "PenTool",
    color: "#00C853",
    features: [
      "Logo design & brand mark creation",
      "Social media post templates",
      "Restaurant menu design",
      "Banner & billboard design",
      "Flyers, brochures & leaflets",
      "Business card & stationery design",
      "Digital ad creatives",
    ],
    benefits: [
      { title: "Professional Image", description: "Polished design signals credibility and builds customer trust instantly." },
      { title: "Brand Consistency", description: "Cohesive visuals across every touchpoint reinforce your brand identity." },
      { title: "Higher Conversions", description: "Well-designed ads and posts outperform generic graphics every time." },
    ],
    process: [
      { step: 1, title: "Brief", description: "We understand your brand, audience, and design objectives." },
      { step: 2, title: "Concept", description: "We present initial design directions for your feedback." },
      { step: 3, title: "Refine", description: "We iterate based on your input until it's exactly right." },
      { step: 4, title: "Deliver", description: "You receive print-ready and web-ready files in all formats." },
    ],
    faqs: [
      { question: "How many revisions do I get?", answer: "All packages include at least 2 rounds of revisions. We work until you're happy." },
      { question: "What file formats will I receive?", answer: "You'll receive PNG, JPG, PDF, and editable source files (AI or PSD) upon request." },
      { question: "How fast can you turnaround a design?", answer: "Standard turnaround is 2–5 business days. Rush orders (24–48 hrs) are available." },
      { question: "Can you match our existing brand style?", answer: "Absolutely. Send us your brand guidelines and we'll work within your established system." },
    ],
    cta: "See Our Design Portfolio",
    industries: ["Restaurants", "Retail", "Real Estate", "Fashion", "Events"],
    seo: {
      title: "Graphic Design Services in Rajshahi — ShohozMark",
      description: "Professional logo, banner, menu and flyer design for local businesses in Rajshahi, Bangladesh. Affordable rates, fast turnaround.",
      keywords: ["graphic design Rajshahi", "logo design Bangladesh", "menu design Rajshahi", "flyer design Bangladesh"],
    },
  },
  {
    id: "content-strategy",
    slug: "content-strategy",
    title: "Content Strategy",
    tagline: "Content That Converts Scrollers to Buyers",
    shortDescription: "Engaging content that converts scrollers into loyal customers.",
    longDescription:
      "Strategy without content is a plan without execution. We research what your audience cares about, build a content roadmap, and produce everything — copy, video scripts, captions, and blogs — that turns browsers into buyers.",
    icon: "LayoutTemplate",
    color: "#00C853",
    features: [
      "Content audit & gap analysis",
      "Monthly content calendar",
      "Copywriting for social, web & ads",
      "Video script & reel scripting",
      "Blog article writing",
      "Email campaign copy",
      "Content performance tracking",
    ],
    benefits: [
      { title: "Consistent Voice", description: "A documented strategy keeps every piece of content on-brand and purposeful." },
      { title: "SEO Benefits", description: "Quality content builds domain authority and drives long-term organic traffic." },
      { title: "Customer Education", description: "Strategic content answers buyer questions and reduces sales friction." },
    ],
    process: [
      { step: 1, title: "Research", description: "We analyse your audience, competitors and content gaps." },
      { step: 2, title: "Plan", description: "We build a 30/60/90-day content roadmap with clear objectives." },
      { step: 3, title: "Produce", description: "Our writers and creatives bring the plan to life." },
      { step: 4, title: "Measure", description: "We track engagement, reach, and conversion metrics monthly." },
    ],
    faqs: [
      { question: "What types of content do you produce?", answer: "Social posts, blog articles, email newsletters, video scripts, website copy, and ad copy." },
      { question: "Do you write in Bangla or English?", answer: "Both. We write content in Bangla, English, or a mix depending on your audience." },
      { question: "How do you ensure content fits our brand voice?", answer: "We create a tone-of-voice document in the strategy phase that guides all future content." },
      { question: "Can I see content before it's published?", answer: "Yes. All content goes through your approval before going live." },
    ],
    cta: "Request a Free Content Audit",
    industries: ["Restaurants", "Real Estate", "Healthcare", "E-commerce", "Education"],
    seo: {
      title: "Content Strategy & Marketing in Rajshahi — ShohozMark",
      description: "Professional content strategy and copywriting services for local Bangladeshi businesses. Build authority, drive traffic, and convert customers.",
      keywords: ["content marketing Rajshahi", "content strategy Bangladesh", "copywriting Rajshahi", "blog writing Bangladesh"],
    },
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    title: "Brand Identity",
    tagline: "Build a Brand People Remember and Trust",
    shortDescription: "Full brand systems for restaurants, real estate & retail.",
    longDescription:
      "Your brand is more than a logo. It's the feeling customers get when they see your business. We craft complete brand identities — from naming and logo to colour systems and brand guidelines — that give local businesses a foundation to grow from.",
    icon: "CheckCircle2",
    color: "#00C853",
    features: [
      "Brand strategy & positioning",
      "Logo design & icon system",
      "Brand colour palette & typography",
      "Brand guideline document",
      "Business card & stationery design",
      "Social media profile kit",
      "Signage & storefront design",
    ],
    benefits: [
      { title: "Stand Out Locally", description: "A distinctive brand identity makes you the obvious choice in a crowded market." },
      { title: "Command Premium Prices", description: "Strong branding justifies higher prices and attracts better customers." },
      { title: "Built to Scale", description: "A documented brand system makes expansion and hiring far easier." },
    ],
    process: [
      { step: 1, title: "Discovery", description: "We deep-dive into your business, values, and target customers." },
      { step: 2, title: "Strategy", description: "We define your positioning, voice, and brand personality." },
      { step: 3, title: "Design", description: "We create the visual identity system with multiple concepts." },
      { step: 4, title: "Handover", description: "You receive a complete brand kit with guidelines for future use." },
    ],
    faqs: [
      { question: "How long does a full brand identity take?", answer: "Typically 2–4 weeks depending on complexity and feedback cycles." },
      { question: "What if I only need a logo refresh?", answer: "We offer standalone logo refresh packages. Contact us for a custom quote." },
      { question: "Do you provide brand guidelines?", answer: "Yes. Every full brand identity project includes a comprehensive brand guideline PDF." },
      { question: "Can you work with existing brand elements?", answer: "Yes. We can evolve your existing identity rather than starting from scratch if preferred." },
    ],
    cta: "Start Your Brand Journey",
    industries: ["Restaurants", "Real Estate", "Retail", "Fashion", "Startups"],
    seo: {
      title: "Brand Identity Design in Rajshahi — ShohozMark",
      description: "Complete brand identity packages for local businesses in Rajshahi, Bangladesh. Logo, brand guidelines, and full visual system. Affordable rates.",
      keywords: ["brand identity Rajshahi", "logo design Bangladesh", "branding agency Rajshahi", "brand guidelines Bangladesh"],
    },
  },
  {
    id: "digital-advertising",
    slug: "digital-advertising",
    title: "Digital Advertising",
    tagline: "Reach the Right People at the Right Moment",
    shortDescription: "Targeted ads that reach local buyers exactly when they're looking.",
    longDescription:
      "We run data-driven digital advertising campaigns across Facebook, Instagram, and Google that put your business in front of local customers who are actively looking for what you offer — with full transparency on every taka spent.",
    icon: "Megaphone",
    color: "#00C853",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Search & Display Ads",
      "YouTube video ads",
      "Retargeting campaigns",
      "Local awareness ads",
      "Lead generation campaigns",
      "Monthly performance reporting",
    ],
    benefits: [
      { title: "Immediate Visibility", description: "Unlike SEO, ads put you at the top of results from day one." },
      { title: "Hyper-local Targeting", description: "Target customers by city, neighbourhood, age, and interest — down to Rajshahi streets." },
      { title: "Scalable Budget", description: "Start small and scale what works. No minimum spend required." },
    ],
    process: [
      { step: 1, title: "Goal Setting", description: "We define what success looks like — leads, footfall, sales, or awareness." },
      { step: 2, title: "Campaign Build", description: "We set up targeting, creatives, and tracking pixels." },
      { step: 3, title: "Launch & Monitor", description: "Campaigns go live with daily monitoring for the first 2 weeks." },
      { step: 4, title: "Optimise", description: "We analyse results weekly and adjust bids, audiences, and creative." },
    ],
    faqs: [
      { question: "What is the minimum ad budget?", answer: "We recommend a minimum of ৳5,000/month in ad spend. Our management fee is separate." },
      { question: "Do you handle ad account setup?", answer: "Yes. We set up your Business Manager, ad account, and pixel from scratch if needed." },
      { question: "How do you measure ad performance?", answer: "We track clicks, impressions, leads, cost-per-result, and ROAS — shared in monthly reports." },
      { question: "Can I pause or stop anytime?", answer: "Yes. There are no lock-in contracts. You can pause or stop campaigns at any time." },
    ],
    cta: "Get a Free Ad Account Audit",
    industries: ["Restaurants", "Retail", "Real Estate", "Events", "Healthcare"],
    seo: {
      title: "Digital Advertising Agency in Rajshahi — ShohozMark",
      description: "Facebook Ads, Google Ads, and Meta advertising management for local businesses in Rajshahi. Transparent pricing, measurable results.",
      keywords: ["Facebook ads Rajshahi", "Google ads Bangladesh", "digital advertising Rajshahi", "Meta ads agency Bangladesh"],
    },
  },
  {
    id: "local-seo",
    slug: "local-seo",
    title: "Local SEO",
    tagline: "Be Found When Customers Search Near You",
    shortDescription: "Get discovered by customers searching for businesses in your area.",
    longDescription:
      "When someone in Rajshahi searches 'best restaurant near me' or 'real estate agent Rajshahi,' we make sure your business appears first. Our local SEO service optimises your online presence so customers find you at the exact moment they're ready to buy.",
    icon: "Search",
    color: "#00C853",
    features: [
      "Google Business Profile optimisation",
      "Local keyword research & on-page SEO",
      "Citation building & directory listings",
      "Review generation strategy",
      "Local landing page creation",
      "Competitor analysis",
      "Monthly ranking reports",
    ],
    benefits: [
      { title: "Free Organic Traffic", description: "Once ranked, organic search traffic costs nothing per click — unlike ads." },
      { title: "High Purchase Intent", description: "People searching locally are ready to buy. Capture them at the right moment." },
      { title: "Long-term Growth", description: "SEO compounds over time. Rankings you build today pay dividends for years." },
    ],
    process: [
      { step: 1, title: "SEO Audit", description: "We audit your current rankings, Google Business Profile, and website." },
      { step: 2, title: "Keyword Strategy", description: "We identify the most valuable local search terms for your business." },
      { step: 3, title: "On-page Optimisation", description: "We optimise your website pages, titles, and meta descriptions." },
      { step: 4, title: "Build & Track", description: "We build citations, manage reviews, and track rankings monthly." },
    ],
    faqs: [
      { question: "How long does SEO take to work?", answer: "Expect early improvements in 2–3 months, with significant results typically in 4–6 months." },
      { question: "Do you guarantee page-one rankings?", answer: "No ethical agency can guarantee rankings — search engines control that. We do guarantee our work follows best practices for sustained growth." },
      { question: "Is a website required for local SEO?", answer: "Not necessarily. Google Business Profile optimisation can generate results even without a website." },
      { question: "Do you work in Bangla SEO as well?", answer: "Yes. We optimise for both Bangla and English search queries relevant to your audience." },
    ],
    cta: "Get a Free SEO Audit",
    industries: ["Restaurants", "Real Estate", "Healthcare", "Retail", "Services"],
    seo: {
      title: "Local SEO Services in Rajshahi — ShohozMark",
      description: "Local SEO for businesses in Rajshahi, Bangladesh. Get found on Google when local customers search for your services. Free SEO audit available.",
      keywords: ["local SEO Rajshahi", "SEO agency Bangladesh", "Google Business Profile Rajshahi", "SEO services Bangladesh"],
    },
  },
  {
    id: "influencer-marketing",
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "Grow Through Voices Your Audience Already Trusts",
    shortDescription: "Connect your brand with local influencers and content creators in Rajshahi.",
    longDescription:
      "Influencer marketing is one of the fastest-growing channels for local brands in Bangladesh. We connect you with the right local creators — food bloggers, lifestyle vloggers, and niche community leaders — to generate authentic content and reach audiences that trust the recommendation.",
    icon: "Users",
    color: "#00C853",
    features: [
      "Local influencer identification & vetting",
      "Campaign concept & brief creation",
      "Influencer outreach & negotiation",
      "Content review & approval workflow",
      "Campaign performance tracking",
      "Micro & nano influencer campaigns",
      "UGC (user-generated content) campaigns",
    ],
    benefits: [
      { title: "Authentic Reach", description: "Content from trusted local voices converts at far higher rates than traditional ads." },
      { title: "Affordable Entry", description: "Micro-influencers in Rajshahi offer massive value at a fraction of celebrity rates." },
      { title: "Content Library", description: "Influencer campaigns generate ready-to-reuse photo and video assets for your brand." },
    ],
    process: [
      { step: 1, title: "Identify", description: "We find the best-fit creators for your brand, audience, and budget." },
      { step: 2, title: "Brief", description: "We create a clear campaign brief that protects your brand and guides creators." },
      { step: 3, title: "Execute", description: "Creators produce content; we review and ensure it's on-brand before publishing." },
      { step: 4, title: "Amplify", description: "We boost top-performing influencer content with paid promotion for maximum reach." },
    ],
    faqs: [
      { question: "What type of influencers do you work with?", answer: "Primarily micro (5K–50K followers) and nano (1K–5K) influencers based in Rajshahi and greater Bangladesh — highly engaged, affordable, and locally trusted." },
      { question: "How do you vet influencers?", answer: "We check engagement rate, audience demographics, content quality, and past brand partnerships to ensure alignment with your brand values." },
      { question: "Who owns the content after the campaign?", answer: "Usage rights are negotiated upfront. We can secure full brand ownership of all created content." },
      { question: "Can you run a campaign for a restaurant launch?", answer: "Absolutely. Influencer events and tasting campaigns for restaurant launches are one of our specialities." },
    ],
    cta: "Explore Influencer Campaigns",
    industries: ["Restaurants", "Fashion", "Beauty", "Retail", "Events"],
    seo: {
      title: "Influencer Marketing in Rajshahi — ShohozMark",
      description: "Connect with local influencers and content creators in Rajshahi, Bangladesh. Authentic campaigns that drive real results for local brands.",
      keywords: ["influencer marketing Rajshahi", "content creator Bangladesh", "influencer agency Rajshahi", "UGC marketing Bangladesh"],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
