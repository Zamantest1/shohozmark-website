import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, Lightbulb, Heart, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { useSEO } from "@/lib/seo";
import { TEAM_MEMBERS } from "@/data/team";
import greenLogo from "@assets/Green_1780696036870.png";
import yellowLogo from "@assets/Yellow_1780696036871.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const VALUES = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Affordable",
    desc: "World-class marketing at prices local businesses can actually afford. No hidden fees, no inflated retainers."
  },
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "Local First",
    desc: "We live and work in Rajshahi. We understand the market, the culture, and the customers better than any outside agency."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "Creative",
    desc: "Bold ideas, fresh campaigns, and designs that make your brand impossible to ignore — even on a tight budget."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Trustworthy",
    desc: "Transparent pricing, honest communication, and results you can verify. We deliver what we promise, every time."
  }
];

const STATS = [
  { value: "50+", label: "Local Brands Served" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "3+", label: "Years in Rajshahi" },
  { value: "7", label: "Service Specialities" }
];

const INDUSTRIES = [
  { name: "Restaurants & Food", desc: "Menu design, social media, influencer campaigns, and delivery platform marketing." },
  { name: "Real Estate", desc: "Property listing content, targeted ads, lead generation, and brand identity." },
  { name: "Retail & Fashion", desc: "Product photography briefs, seasonal campaigns, and e-commerce content strategy." },
];

export default function About() {
  useSEO({
    title: "About ShohozMark — Rajshahi's Local Marketing Agency",
    description: "ShohozMark is a Rajshahi-based digital marketing agency founded to make world-class marketing accessible to every local business in Bangladesh. Learn our story, mission, and values.",
    keywords: ["about ShohozMark", "marketing agency Rajshahi", "digital marketing Bangladesh", "local marketing agency", "Sabbir Ahmed ShohozMark"],
    canonical: "https://shohozmark.com/about",
  });

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />

      <main className="pt-24 sm:pt-32">

        {/* ── HERO ── */}
        <section className="pb-16 sm:pb-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">
                  Our Story
                </motion.span>
                <motion.h1 variants={FADE_UP} className="font-serif font-extrabold tracking-tight mb-5" style={{ fontSize: "clamp(1.6rem, 3vw, 2.75rem)" }}>
                  We believe every local business deserves great marketing.
                </motion.h1>
                <motion.p variants={FADE_UP} className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                  ShohozMark was founded in Rajshahi with one observation: the businesses that serve our community every day — the restaurants, shops, and agencies that make this city thrive — had no access to the kind of marketing that big brands in Dhaka take for granted.
                </motion.p>
                <motion.p variants={FADE_UP} className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                  We built ShohozMark to change that. "Shohoz" means <em className="text-foreground not-italic font-medium">easy</em> in Bengali — and that's exactly what we've made great marketing for local businesses.
                </motion.p>
                <motion.div variants={FADE_UP}>
                  <ConsultationModal>
                    <button className="bg-primary text-black font-bold px-6 py-3 rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 inline-flex items-center gap-2">
                      Work With Us <ArrowRight className="w-4 h-4" />
                    </button>
                  </ConsultationModal>
                </motion.div>
              </div>

              <motion.div variants={FADE_UP} className="relative">
                <div className="bg-card border border-border rounded-sm p-8 sm:p-10 relative">
                  <img src={greenLogo} alt="ShohozMark" className="h-16 sm:h-20 w-auto mb-6 opacity-90" />
                  <blockquote className="font-serif text-xl sm:text-2xl font-bold leading-snug mb-6">
                    "Big agency results. Local prices. That's the ShohozMark promise."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="font-serif font-bold text-primary text-sm">SA</span>
                    </div>
                    <div>
                      <div className="font-bold text-sm">Sabbir Ahmed</div>
                      <div className="text-xs text-muted-foreground">Founder & Creative Director</div>
                    </div>
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-primary/30 rounded-tr-sm" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-primary/30 rounded-bl-sm" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-12 sm:py-16 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="font-serif font-extrabold text-primary mb-1" style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)" }}>{stat.value}</div>
                  <div className="text-muted-foreground font-medium uppercase tracking-wider text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="mb-12 sm:mb-14">
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Our Values</motion.span>
              <motion.h2 variants={FADE_UP} className="font-serif font-bold max-w-xl" style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)" }}>
                What we stand for.
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {VALUES.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-6 sm:p-8 rounded-sm group hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    {val.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">{val.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES WE SERVE ── */}
        <section className="py-16 sm:py-24 border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              <motion.div variants={FADE_UP} className="lg:col-span-2">
                <span className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Who We Serve</span>
                <h2 className="font-serif font-bold mb-4" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
                  Built for Rajshahi's most important industries.
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  We don't try to serve everyone. We've deep-dived into three industries that define local commerce in Rajshahi — and we know their customers, challenges, and opportunities inside-out.
                </p>
                <img src={yellowLogo} alt="ShohozMark" className="w-20 opacity-70" />
              </motion.div>

              <div className="lg:col-span-3 flex flex-col gap-4">
                {INDUSTRIES.map((ind, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="bg-background border border-border rounded-sm p-6 flex gap-5 items-start group hover:border-primary/30 transition-colors"
                  >
                    <div className="font-serif font-black text-primary/20 text-3xl shrink-0 leading-none group-hover:text-primary/40 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1.5 group-hover:text-primary transition-colors">{ind.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TEAM TEASER ── */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div>
                <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">The People</motion.span>
                <motion.h2 variants={FADE_UP} className="font-serif font-bold" style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)" }}>
                  The team behind your growth.
                </motion.h2>
              </div>
              <motion.div variants={FADE_UP}>
                <Link href="/team" className="text-primary text-sm font-bold hover:underline shrink-0">
                  Meet Everyone →
                </Link>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {TEAM_MEMBERS.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-sm p-6 text-center group hover:border-primary/30 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary transition-colors"
                    style={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)" }}>
                    <span className="font-serif font-black text-primary text-xl">{member.initials}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-0.5">{member.name}</h3>
                  <p className="text-primary text-xs font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{member.shortBio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLIENT STRIP ── */}
        <section className="py-8 sm:py-10 border-b border-border bg-card overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5 text-center">
            <span className="text-muted-foreground/60 text-xs font-medium tracking-[0.25em] uppercase">Trusted by Rajshahi's best</span>
          </div>
          <div className="flex gap-6 overflow-hidden">
            <motion.div
              className="flex gap-6 min-w-max px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            >
              {[
                "Spice Garden", "Skyline Properties", "Trend Fashion", "Mediscan", "Bloom Beauty", "Nova Real Estate",
                "Spice Garden", "Skyline Properties", "Trend Fashion", "Mediscan", "Bloom Beauty", "Nova Real Estate"
              ].map((client, i) => (
                <div key={i} className="px-5 py-2.5 bg-background/50 border border-border/50 rounded-full flex items-center">
                  <span className="font-serif font-bold text-muted-foreground/50 text-base whitespace-nowrap hover:text-muted-foreground/80 transition-opacity">{client}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}>
              <motion.h2 variants={FADE_UP} className="font-serif font-bold mb-4" style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)" }}>
                Ready to grow your business with us?
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-muted-foreground text-base sm:text-lg mb-8">
                Free consultation. No commitment. Just a conversation about your goals.
              </motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ConsultationModal>
                  <button className="bg-primary text-black font-bold px-8 py-3.5 rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 inline-flex items-center gap-2">
                    Get a Free Consultation <ArrowRight className="w-4 h-4" />
                  </button>
                </ConsultationModal>
                <Link href="/services" className="text-foreground font-bold px-8 py-3.5 border border-border rounded-sm hover:border-primary/50 hover:text-primary transition-colors">
                  See Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
