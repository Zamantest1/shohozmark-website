export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
  serviceUsed: string;
  initials: string;
  featured: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Karim Hossain",
    role: "Owner",
    company: "Spice Garden Restaurant",
    industry: "Food & Beverage",
    quote: "ShohozMark transformed our restaurant completely. We went from struggling to fill tables to being fully booked every weekend. The team understands local audiences like no one else. I've recommended them to every business owner I know.",
    rating: 5,
    serviceUsed: "Social Media Marketing",
    initials: "KH",
    featured: true,
  },
  {
    id: "t2",
    name: "Farida Begum",
    role: "Managing Director",
    company: "Skyline Properties",
    industry: "Real Estate",
    quote: "Our new brand identity changed everything. Clients now take us more seriously from the very first interaction. The leads we get from Facebook have doubled since ShohozMark took over our advertising. Absolutely worth every taka.",
    rating: 5,
    serviceUsed: "Brand Identity & Digital Advertising",
    initials: "FB",
    featured: true,
  },
  {
    id: "t3",
    name: "Rahul Chandra",
    role: "Owner",
    company: "Trend Fashion Store",
    industry: "Fashion & Retail",
    quote: "The influencer campaign they ran for our new collection was incredible. Everything sold out in 48 hours. We've never seen results like that before. ShohozMark knows how to reach young people in Rajshahi better than anyone.",
    rating: 5,
    serviceUsed: "Influencer Marketing",
    initials: "RC",
    featured: true,
  },
  {
    id: "t4",
    name: "Dr. Aminur Rahman",
    role: "Centre Manager",
    company: "Mediscan Diagnostics",
    industry: "Healthcare",
    quote: "We are now the top result on Google for diagnostic services in Rajshahi. Our appointment bookings have nearly tripled. The ShohozMark team is professional, responsive, and genuinely cares about our business growth.",
    rating: 5,
    serviceUsed: "Local SEO & Content Strategy",
    initials: "AR",
    featured: true,
  },
  {
    id: "t5",
    name: "Nasrin Akter",
    role: "Founder",
    company: "Bloom Beauty Salon",
    industry: "Beauty & Wellness",
    quote: "I was sceptical about social media marketing at first, but ShohozMark proved me wrong. Within two months, my salon was fully booked three weeks in advance. The graphics they create are stunning — customers comment on them all the time.",
    rating: 5,
    serviceUsed: "Social Media Marketing & Graphic Design",
    initials: "NA",
    featured: false,
  },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.featured);
}
