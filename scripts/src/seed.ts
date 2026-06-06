import { db, teamMembersTable, testimonialsTable, portfolioItemsTable } from "@workspace/db";

async function seed() {
  console.log("Seeding database...");

  await db.insert(teamMembersTable).values([
    {
      name: "Ibn E Habib",
      role: "Founder & Managing Director",
      bio: "Leads client acquisition, partnerships, business development, and overall company growth. Focused on building strong client relationships and helping businesses achieve measurable marketing results.",
      shortBio: "Leads business development and client partnerships. Focused on delivering measurable marketing results.",
      initials: "IH",
      photoUrl: null,
      skills: ["Business Development", "Client Relations", "Partnerships", "Growth Strategy"],
      orderIndex: 0,
      isActive: true,
    },
    {
      name: "Shomik Ujzaman",
      role: "Creative Director & Head of Growth",
      bio: "Oversees the agency's creative vision, branding, content strategy, SEO, website development, social media marketing, and digital growth initiatives. Focused on creating impactful brand experiences, driving audience engagement, and delivering measurable growth for clients through creative and data-driven strategies.",
      shortBio: "Shapes creative vision and growth strategy — from brand identity to SEO, content, and digital performance.",
      initials: "SU",
      photoUrl: null,
      skills: ["Brand Strategy", "SEO", "Content Strategy", "Social Media", "Web Development"],
      orderIndex: 1,
      isActive: true,
    },
    {
      name: "Asmaul Hoque",
      role: "Video Production Lead",
      bio: "Specializes in video production, editing, and visual storytelling. Creates engaging visual content that helps brands connect with their audience and strengthen their digital presence across multiple platforms.",
      shortBio: "Creates video and visual content that helps brands tell compelling stories across digital platforms.",
      initials: "AH",
      photoUrl: null,
      skills: ["Video Production", "Video Editing", "Visual Storytelling", "Content Creation"],
      orderIndex: 2,
      isActive: true,
    },
  ]).onConflictDoNothing();
  console.log("✓ Team members seeded");

  await db.insert(testimonialsTable).values([
    {
      name: "Karim Hossain",
      role: "Owner",
      company: "Spice Garden Restaurant",
      initials: "KH",
      quote: "ShohozMark transformed our restaurant completely. We went from struggling to fill tables to being fully booked every weekend. The team understands local audiences like no one else. I've recommended them to every business owner I know.",
      serviceUsed: "Social Media Marketing",
      rating: 5,
      featured: true,
    },
    {
      name: "Farida Begum",
      role: "Managing Director",
      company: "Skyline Properties",
      initials: "FB",
      quote: "Our new brand identity changed everything. Clients now take us more seriously from the very first interaction. The leads we get from Facebook have doubled since ShohozMark took over our advertising. Absolutely worth every taka.",
      serviceUsed: "Brand Identity & Digital Advertising",
      rating: 5,
      featured: true,
    },
    {
      name: "Rahul Chandra",
      role: "Owner",
      company: "Trend Fashion Store",
      initials: "RC",
      quote: "The influencer campaign they ran for our new collection was incredible. Everything sold out in 48 hours. We've never seen results like that before. ShohozMark knows how to reach young people in Rajshahi better than anyone.",
      serviceUsed: "Influencer Marketing",
      rating: 5,
      featured: true,
    },
    {
      name: "Dr. Aminur Rahman",
      role: "Centre Manager",
      company: "Mediscan Diagnostics",
      initials: "AR",
      quote: "We are now the top result on Google for diagnostic services in Rajshahi. Our appointment bookings have nearly tripled. The ShohozMark team is professional, responsive, and genuinely cares about our business growth.",
      serviceUsed: "Local SEO & Content Strategy",
      rating: 5,
      featured: true,
    },
    {
      name: "Nasrin Akter",
      role: "Founder",
      company: "Bloom Beauty Salon",
      initials: "NA",
      quote: "I was sceptical about social media marketing at first, but ShohozMark proved me wrong. Within two months, my salon was fully booked three weeks in advance. The graphics they create are stunning — customers comment on them all the time.",
      serviceUsed: "Social Media Marketing & Graphic Design",
      rating: 5,
      featured: false,
    },
  ]).onConflictDoNothing();
  console.log("✓ Testimonials seeded");

  await db.insert(portfolioItemsTable).values([
    {
      title: "How Spice Garden Grew Online Orders by 240%",
      slug: "spice-garden-restaurant",
      category: "Social Media Marketing",
      industry: "Food & Beverage",
      description: "A full social media takeover — professional food photography, daily Facebook & Instagram posts, targeted local ads to Rajshahi foodies, and a Reserve Your Table campaign that drove direct bookings.",
      client: "Spice Garden Restaurant",
      result: "240% increase in online orders. Facebook followers grew by 3,200+ organically. Weekend occupancy went from 40% to 95% in 3 months.",
      coverImage: null,
      images: [],
      testimonialQuote: "ShohozMark transformed our restaurant's online presence completely. We used to struggle to fill tables on weekends. Now we're fully booked and had to hire more staff.",
      testimonialAuthor: "Owner, Spice Garden Restaurant",
      featured: true,
      published: true,
    },
    {
      title: "Rebranding Skyline Properties for the Digital Age",
      slug: "skyline-properties",
      category: "Brand Identity",
      industry: "Real Estate",
      description: "Complete brand identity redesign — new logo, brand colours, and a comprehensive visual system. Followed by targeted Facebook lead generation campaigns showcasing premium properties.",
      client: "Skyline Properties",
      result: "3x increase in qualified leads. Cost per lead reduced by 62%. 15+ properties sold via social media in the first 6 months post-rebrand.",
      coverImage: null,
      images: [],
      testimonialQuote: "Our new brand identity gave us the confidence to charge more and attract better clients. The team at ShohozMark understood exactly what we needed.",
      testimonialAuthor: "MD, Skyline Properties",
      featured: true,
      published: true,
    },
    {
      title: "Trend Fashion's Influencer Campaign That Sold Out in 48 Hours",
      slug: "trend-fashion-store",
      category: "Influencer Marketing",
      industry: "Fashion & Apparel",
      description: "Partnered with 5 micro-influencers in Rajshahi with highly engaged followings in fashion and lifestyle. Each creator published authentic unboxing and styling content across Facebook and Instagram.",
      client: "Trend Fashion Store",
      result: "Entire new collection sold out in 48 hours. 40+ content pieces created. Combined campaign reach of 85,000+ local audience. 8x return on influencer spend.",
      coverImage: null,
      images: [],
      testimonialQuote: "We honestly didn't expect the influencer campaign to work this well. Everything sold out. We've already booked another campaign for next season.",
      testimonialAuthor: "Owner, Trend Fashion Store",
      featured: true,
      published: true,
    },
    {
      title: "How Mediscan Became the Top-Ranked Diagnostic Centre in Rajshahi",
      slug: "mediscan-diagnostics",
      category: "Local SEO",
      industry: "Healthcare",
      description: "Full local SEO campaign — optimised Google Business Profile, built local citations, and created monthly health-education blog content targeting Rajshahi-specific search terms.",
      client: "Mediscan Diagnostics",
      result: "#1 on Google for 'diagnostic centre Rajshahi'. 180% increase in appointment bookings year-over-year. Google Business Profile views increased 12x.",
      coverImage: null,
      images: [],
      testimonialQuote: "We went from being invisible on Google to being the top result. Our appointment book is full every week now thanks to ShohozMark.",
      testimonialAuthor: "Manager, Mediscan Diagnostics",
      featured: false,
      published: true,
    },
  ]).onConflictDoNothing();
  console.log("✓ Portfolio items seeded");

  console.log("✅ Database seeded successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
