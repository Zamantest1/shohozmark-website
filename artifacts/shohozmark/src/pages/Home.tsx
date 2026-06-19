import React from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight, CheckCircle2, MapPin, Mail, Instagram, Facebook,
  PenTool, LayoutTemplate, Megaphone, Smartphone, Search, Users
} from "lucide-react";
import { Link } from "wouter";

import greenLogo from "@assets/Green_1780696036870.png";

import { useQuery } from "@tanstack/react-query";
import { SERVICES } from "@/data/services";
import { getAvatarPlaceholder } from "@/lib/media";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { supabase, type Testimonial } from "@/lib/supabase";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.3], [0, 60]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const { data: testimonialsData } = useQuery<Testimonial[]>({
    queryKey: ["testimonials", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("featured", true)
        .order("created_at")
        .limit(4);
      if (error) throw error;
      return data;
    },
  });
  const testimonials = testimonialsData?.slice(0, 2) ?? [];

  const scrollTo = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const ICONS: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
    PenTool: <PenTool className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
    LayoutTemplate: <LayoutTemplate className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
    CheckCircle2: <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
    Megaphone: <Megaphone className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
    Search: <Search className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
    Users: <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
  };

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden relative">
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      <Navbar />

      <main className="relative z-10 pt-16 sm:pt-20">

        {/* ── HERO ── */}
        <section
          id="hero"
          className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-8 pb-14 sm:pt-10 sm:pb-20 overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

          <motion.div
            className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10 text-center flex flex-col items-center w-full"
            style={{ y: yHero, opacity: opacityHero }}
            initial="hidden"
            animate="visible"
            variants={STAGGER}
          >
            <motion.div variants={FADE_UP} className="mb-6 sm:mb-8 inline-block">
              <img
                src={greenLogo}
                alt="ShohozMark Green Logo"
                className="h-16 sm:h-20 md:h-24 w-auto mx-auto drop-shadow-[0_0_15px_rgba(0,200,83,0.3)]"
                data-testid="hero-logo"
              />
            </motion.div>

            <motion.h1
              variants={FADE_UP}
              className="font-serif font-extrabold tracking-tight leading-[1.05] mb-4 sm:mb-6 w-full"
              style={{ fontSize: "clamp(1.6rem, 8.5vw, 5rem)", textAlign: "center", maxWidth: "100%" }}
            >
              MARKETING <br />
              <span className="text-primary italic font-light pr-1">MADE</span> EASY.
            </motion.h1>

            <motion.p
              variants={FADE_UP}
              className="text-base sm:text-xl md:text-2xl text-muted-foreground font-light max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
            >
              Big agency results. Local prices. We help Rajshahi businesses grow effortlessly.
            </motion.p>

            <motion.div
              variants={FADE_UP}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto"
            >
              <ConsultationModal>
                <button
                  className="bg-primary text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center group"
                  data-testid="hero-cta-primary"
                >
                  Start Growing <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </ConsultationModal>
              <button
                onClick={() => scrollTo("services")}
                className="bg-transparent text-white border border-border font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm hover:bg-white/5 transition-all w-full sm:w-auto justify-center"
              >
                See Services
              </button>
            </motion.div>

            {/* Decorative corner lines */}
            <div className="hidden sm:block absolute top-12 right-10 w-16 h-16 border-t border-r border-border/40 pointer-events-none" />
            <div className="hidden sm:block absolute bottom-16 left-10 w-16 h-16 border-b border-l border-border/40 pointer-events-none" />
          </motion.div>
        </section>

        {/* ── CLIENT TRUST BAR ── */}
        <section className="py-8 sm:py-10 border-y border-border bg-card overflow-hidden">
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

        {/* ── SERVICES ── */}
        <section id="services" className="py-16 sm:py-24 md:py-28 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
              className="mb-10 sm:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
            >
              <div>
                <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">01 — Services</motion.span>
                <motion.h2 variants={FADE_UP} className="font-serif font-bold" style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}>What we do best.</motion.h2>
              </div>
              <motion.div variants={FADE_UP}>
                <Link href="/services" className="text-primary text-sm font-bold hover:underline shrink-0 hidden sm:block">
                  View All Services →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={STAGGER}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10"
            >
              {SERVICES.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`}>
                  <motion.div
                    variants={FADE_UP}
                    className="bg-card border border-card-border p-6 sm:p-7 rounded-sm hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group cursor-pointer h-full"
                    style={{ borderTopWidth: "3px", borderTopColor: "transparent" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = s.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = "transparent")}
                  >
                    <div className="mb-4 bg-background inline-flex p-2.5 rounded-sm border border-border group-hover:border-primary/50 transition-colors">
                      {ICONS[s.icon]}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{s.shortDescription}</p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/8 border border-primary/20 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5"
            >
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">Not sure which service fits?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">We'll audit your current marketing and recommend the right starting point — free.</p>
              </div>
              <ConsultationModal>
                <button className="bg-primary text-black font-bold px-6 py-3 rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 shrink-0 whitespace-nowrap">
                  Get a Free Consultation
                </button>
              </ConsultationModal>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-14 sm:py-20 border-b border-border relative overflow-hidden bg-card">
          <div className="absolute inset-0 bg-primary/4 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 text-center">
              {[
                { value: "50+", label: "Local Brands Served" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "3+", label: "Years in Rajshahi" },
                { value: "7", label: "Service Specialities" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-3"
                >
                  <div className="font-serif font-extrabold text-primary mb-1.5" style={{ fontSize: "clamp(2.25rem, 8vw, 3.75rem)" }}>{stat.value}</div>
                  <div className="text-muted-foreground font-medium uppercase tracking-wider text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 sm:py-24 md:py-28 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="mb-12 sm:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
            >
              <div>
                <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">02 — Results</motion.span>
                <motion.h2 variants={FADE_UP} className="font-serif font-bold" style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}>What our clients say.</motion.h2>
              </div>
              <motion.div variants={FADE_UP}>
                <Link href="/portfolio" className="text-primary text-sm font-bold hover:underline shrink-0 hidden sm:block">
                  See Full Portfolio →
                </Link>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-card border border-card-border p-6 sm:p-8 rounded-sm border-l-[3px] border-l-primary flex flex-col"
                >
                  <div className="text-primary mb-4 tracking-widest text-sm">★★★★★</div>
                  <p className="text-foreground/90 text-base sm:text-lg italic mb-8 flex-1 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="font-serif font-bold text-primary text-sm">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                    </div>
                    <span className="ml-auto text-[10px] text-primary/70 font-bold uppercase tracking-wider hidden sm:block">{t.service_used}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TAGLINE MARQUEE ── */}
        <div className="overflow-hidden bg-primary py-3.5 sm:py-4">
          <motion.div
            className="flex items-center gap-6 sm:gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          >
            {[
              "SHOHOZ-E GROW KORO", "MARKETING MADE EASY", "BIG AGENCY RESULTS. LOCAL PRICES", "YOUR BRAND. OUR MISSION",
              "SHOHOZ-E GROW KORO", "MARKETING MADE EASY", "BIG AGENCY RESULTS. LOCAL PRICES", "YOUR BRAND. OUR MISSION",
            ].map((text, i) => (
              <React.Fragment key={i}>
                <span className="font-serif font-black text-black uppercase tracking-tight shrink-0 text-sm sm:text-base md:text-lg">{text}</span>
                <span className="text-black/30 font-black text-lg sm:text-xl shrink-0">&times;</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* ── PROCESS ── */}
        <section id="process" className="py-16 sm:py-24 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="mb-12 sm:mb-16"
            >
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">03 — Process</motion.span>
              <motion.h2 variants={FADE_UP} className="font-serif font-bold" style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}>How we work.</motion.h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border z-0" />
              {[
                { step: "1", title: "Discovery", desc: "We learn about your brand, goals, and audience." },
                { step: "2", title: "Strategy", desc: "We map out a plan tailored to your budget." },
                { step: "3", title: "Create", desc: "We design, write, and build the assets." },
                { step: "4", title: "Launch", desc: "We execute the campaign and track results." },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative z-10 flex flex-col items-center group"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-background border border-primary/60 text-primary flex items-center justify-center font-serif text-lg sm:text-2xl font-bold mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-black transition-colors shadow-[0_0_20px_rgba(0,200,83,0.1)]">
                    {p.step}
                  </div>
                  <h3 className="font-serif text-base sm:text-xl font-bold mb-1 sm:mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm max-w-[160px] sm:max-w-[200px]">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-16 sm:py-24 md:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={STAGGER}
              >
                <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">04 — Contact</motion.span>
                <motion.h2 variants={FADE_UP} className="font-serif font-bold mb-4 sm:mb-6" style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}>Let's grow your business.</motion.h2>
                <motion.p variants={FADE_UP} className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10">
                  Ready to transform your local business? Drop us a message and we'll get back to you within 24 hours.
                </motion.p>
                <motion.div variants={FADE_UP} className="space-y-5">
                  <a href="mailto:hello@shohozmark.com" className="flex items-center gap-4 group hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm sm:text-base">hello@shohozmark.com</span>
                  </a>
                  <a href="https://www.facebook.com/shohozmark" target="_blank" rel="noreferrer" className="flex items-center gap-4 group hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                      <Facebook className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm sm:text-base">facebook.com/shohozmark</span>
                  </a>
                  <a href="https://www.instagram.com/shohozmark" target="_blank" rel="noreferrer" className="flex items-center gap-4 group hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm sm:text-base">instagram.com/shohozmark</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-background border border-border flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm sm:text-base">Rajshahi, Bangladesh</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-background border border-border rounded-sm p-6 sm:p-10 flex flex-col gap-4 sm:gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-card border border-input rounded-sm px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">Business</label>
                    <input
                      type="text"
                      placeholder="Business name"
                      className="w-full bg-card border border-input rounded-sm px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-card border border-input rounded-sm px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">Service Interested In</label>
                  <select className="w-full bg-card border border-input rounded-sm px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-primary transition-colors text-muted-foreground">
                    <option value="">Select a service</option>
                    {["Social Media Marketing", "Graphic Design", "Content Strategy", "Brand Identity", "Digital Advertising", "Local SEO", "Influencer Marketing"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business and goals..."
                    className="w-full bg-card border border-input rounded-sm px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-black font-bold py-3.5 px-6 rounded-sm hover:bg-primary/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group mt-1"
                >
                  Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.form>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
