import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, MapPin, Mail, Instagram, Facebook,
  BarChart3, PenTool, LayoutTemplate, Megaphone, Smartphone, Search, Menu, X, Users
} from "lucide-react";
import { Link } from "wouter";

import greenLogo from "@assets/Green_1780696036870.png";
import yellowLogo from "@assets/Yellow_1780696036871.png";

import { SERVICES } from "@/data/services";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { getFeaturedBlogPosts } from "@/data/blog";
import { getAvatarPlaceholder } from "@/lib/media";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FADE_UP = {
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

  const testimonials = getFeaturedTestimonials();
  const blogPosts = getFeaturedBlogPosts().slice(0, 2);

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

            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
              <ConsultationModal>
                <button className="bg-primary text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center group">
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
          </motion.div>
        </section>

        {/* ── CLIENT TRUST BAR ── */}
        <section className="py-10 sm:py-12 border-y border-border bg-card overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
            <span className="text-muted-foreground text-sm font-medium tracking-widest uppercase">Trusted by Rajshahi's best</span>
          </div>
          <div className="flex gap-6 overflow-hidden">
            <motion.div 
              className="flex gap-6 min-w-max px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[
                "Spice Garden", "Skyline Properties", "Trend Fashion", "Mediscan", "Bloom Beauty", "Nova Real Estate",
                "Spice Garden", "Skyline Properties", "Trend Fashion", "Mediscan", "Bloom Beauty", "Nova Real Estate"
              ].map((client, i) => (
                <div key={i} className="px-6 py-3 bg-background/50 border border-border rounded-full flex items-center justify-center">
                  <span className="font-serif font-bold text-muted-foreground text-lg whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">{client}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-16 sm:py-24 md:py-32 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="mb-10 sm:mb-16">
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">01 — Services</motion.span>
              <motion.h2 variants={FADE_UP} className="font-serif font-bold max-w-3xl" style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}>What we do best.</motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={STAGGER} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {SERVICES.map((s, i) => (
                <Link key={s.id} href={`/services/${s.slug}`}>
                  <motion.div variants={FADE_UP} className="bg-card border border-card-border p-6 sm:p-8 rounded-sm hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group cursor-pointer" style={{ borderTopWidth: "4px", borderTopColor: "transparent" }} onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = s.color)} onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = "transparent")}>
                    <div className="mb-4 sm:mb-6 bg-background inline-flex p-2.5 sm:p-3 rounded-sm border border-border group-hover:border-primary/50 transition-colors">
                      {ICONS[s.icon]}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{s.shortDescription}</p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            <div className="bg-primary/10 border border-primary/20 rounded-sm p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">Need a custom strategy?</h3>
                <p className="text-muted-foreground">Let's discuss how we can tailor these services to your business goals.</p>
              </div>
              <ConsultationModal>
                <button className="bg-primary text-black font-bold px-6 py-3 rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 shrink-0">Get a Free Consultation</button>
              </ConsultationModal>
            </div>
          </div>
        </section>

        {/* ── TAGLINE MARQUEE ── */}
        <div className="overflow-hidden bg-primary py-6 sm:py-8 relative">
          <motion.div className="flex items-center gap-8 sm:gap-12 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}>
            {[
              "SHOHOZ-E GROW KORO", "MARKETING MADE EASY", "BIG AGENCY RESULTS. LOCAL PRICES", "YOUR BRAND. OUR MISSION",
              "SHOHOZ-E GROW KORO", "MARKETING MADE EASY", "BIG AGENCY RESULTS. LOCAL PRICES", "YOUR BRAND. OUR MISSION",
            ].map((text, i) => (
              <React.Fragment key={i}>
                <span className="font-serif font-black text-black uppercase tracking-tighter shrink-0" style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}>{text}</span>
                <span className="text-black/40 font-black text-2xl sm:text-4xl shrink-0">&times;</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* ── VALUES ── */}
        <section id="why" className="py-16 sm:py-24 md:py-32 bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="lg:col-span-5">
                <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">02 — Values</motion.span>
                <motion.h2 variants={FADE_UP} className="font-serif font-bold mb-4 sm:mb-6" style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}>Why local brands choose us.</motion.h2>
                <motion.p variants={FADE_UP} className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">We don't do cookie-cutter. We build tailored strategies for restaurants, retail, and real estate in Rajshahi.</motion.p>
                <motion.div variants={FADE_UP}><img src={yellowLogo} alt="ShohozMark Highlight Logo" className="w-24 sm:w-32 opacity-80" /></motion.div>
              </motion.div>

              <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
                {[
                  { num: "01", title: "Affordable", desc: "Premium results at prices local businesses can actually afford." },
                  { num: "02", title: "Local First", desc: "We understand local markets. Restaurants, real estate, retail — we speak their language." },
                  { num: "03", title: "Creative", desc: "Bold designs and fresh campaigns that make local brands stand out." },
                  { num: "04", title: "Trustworthy", desc: "We deliver what we promise. Transparent pricing, honest communication, real results." },
                ].map((val, i) => (
                  <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP} className="flex gap-4 sm:gap-6 items-start group">
                    <div className="font-serif font-black text-transparent shrink-0 pt-1" style={{ fontSize: "clamp(2rem, 8vw, 3rem)", WebkitTextStroke: "1px #2E2E2E" }}>{val.num}</div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">{val.title}</h3>
                      <p className="text-muted-foreground text-base sm:text-lg">{val.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-16 sm:py-24 border-y border-border relative overflow-hidden bg-card">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 text-center">
              {[
                { value: "50+", label: "Local Brands Served" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "3+", label: "Years in Rajshahi" },
                { value: "7", label: "Service Specialities" }
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="py-4">
                  <div className="font-serif font-extrabold text-primary mb-2" style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)" }}>{stat.value}</div>
                  <div className="text-muted-foreground font-medium uppercase tracking-wider text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 sm:py-24 md:py-32 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="mb-12 sm:mb-16 text-center">
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">04 — Testimonials</motion.span>
              <motion.h2 variants={FADE_UP} className="font-serif font-bold" style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}>What our clients say.</motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
              {testimonials.map((t, i) => (
                <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-card-border p-6 sm:p-8 rounded-sm border-l-4 border-l-primary flex flex-col">
                  <div className="text-primary mb-4 text-xl">★★★★★</div>
                  <p className="text-white text-base sm:text-lg italic mb-8 flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={getAvatarPlaceholder(t.initials)} alt={t.name} className="w-12 h-12 rounded-full border border-border" />
                    <div>
                      <div className="font-bold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                      <div className="text-[10px] text-primary/80 mt-1 uppercase tracking-wider">{t.serviceUsed}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-xl font-bold mb-2">Request a Free Audit</h3>
                <p className="text-sm text-muted-foreground">Let's see where your business has room to grow.</p>
              </div>
              <form className="flex w-full sm:w-auto gap-2" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Email Address" className="bg-background border border-input rounded-sm px-3 py-2 text-sm flex-1 min-w-[200px]" required />
                <button type="submit" className="bg-primary text-black font-bold px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors whitespace-nowrap">Submit</button>
              </form>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="process" className="py-16 sm:py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="mb-12 sm:mb-16">
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">05 — Process</motion.span>
              <motion.h2 variants={FADE_UP} className="font-serif font-bold" style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}>How we work.</motion.h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-border z-0" />
              {[
                { step: "1", title: "Discovery", desc: "We learn about your brand, goals, and audience." },
                { step: "2", title: "Strategy", desc: "We map out a plan tailored to your budget." },
                { step: "3", title: "Create", desc: "We design, write, and build the assets." },
                { step: "4", title: "Launch", desc: "We execute the campaign and track results." },
              ].map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative z-10 flex flex-col items-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-background border border-primary text-primary flex items-center justify-center font-serif text-lg sm:text-2xl font-bold mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-black transition-colors shadow-[0_0_15px_rgba(0,200,83,0.15)]">{p.step}</div>
                  <h3 className="font-serif text-base sm:text-xl font-bold mb-1 sm:mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm max-w-[160px] sm:max-w-[200px]">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 sm:py-24 bg-card border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="mb-10 text-center">
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">06 — FAQ</motion.span>
              <motion.h2 variants={FADE_UP} className="font-serif font-bold" style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}>Common questions.</motion.h2>
            </motion.div>

            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How much do your services cost?", a: "We offer flexible packages starting from ৳5,000/month. Every business is different, so we build custom proposals. Contact us for a free consultation and quote." },
                { q: "Do I need to sign a long-term contract?", a: "No. We work on monthly agreements with no lock-in. You can pause or cancel any service with 30 days' notice." },
                { q: "How quickly can you start?", a: "We can onboard new clients within 3–5 business days. For urgent campaigns, we offer expedited onboarding." },
                { q: "Do you work with businesses outside Rajshahi?", a: "Yes. While we specialise in Rajshahi and the greater Rajshahi division, we work with businesses across Bangladesh." },
                { q: "Can I see results before committing to a package?", a: "Yes. We offer a free audit for your social media or SEO which gives you a clear picture of opportunities before you invest." },
                { q: "What makes ShohozMark different from other agencies?", a: "We are a local agency that deeply understands the Rajshahi market. We don't use templates — every strategy is custom-built for your business and audience." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="font-serif text-lg text-left hover:text-primary transition-colors data-[state=open]:text-primary border-l-2 border-transparent data-[state=open]:border-primary pl-4">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pl-4 pb-6">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── SERVICE AREA ── */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Service Areas</span>
            <h2 className="font-serif text-3xl font-bold mb-6">Local Expertise Across Rajshahi</h2>
            <p className="text-muted-foreground text-lg mb-8">We proudly serve businesses across the greater Rajshahi area, including Rajpara, Boalia, Motihar, and Shah Makhdum upazilas. Our local presence means we understand the market dynamics and consumer behaviour specific to our city.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Restaurant & Food", "Real Estate", "Retail & Fashion", "Healthcare", "Education", "Beauty & Wellness"].map(ind => (
                <span key={ind} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">{ind}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FROM THE BLOG ── */}
        <section className="py-16 sm:py-24 border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
              <div>
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">07 — From the Blog</span>
                <h2 className="font-serif text-3xl font-bold">Marketing insights for local businesses.</h2>
              </div>
              <Link href="/blog" className="text-primary font-bold hover:underline shrink-0">View All Posts →</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="bg-background border border-border rounded-sm p-6 sm:p-8 hover:border-primary transition-colors group flex flex-col">
                  <span className="text-xs font-bold px-2 py-1 bg-muted rounded-sm text-muted-foreground w-fit mb-4">{post.category}</span>
                  <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-bold text-foreground">{post.author}</span> • {post.readTime} min read
                    </div>
                    <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT / CTA ── */}
        <section id="contact" className="py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #000 2px, transparent 2px)", backgroundSize: "32px 32px" }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div>
                <h2 className="font-serif font-extrabold text-black mb-6" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1 }}>Let's talk about growing your business.</h2>
                <p className="text-black/80 text-lg sm:text-xl mb-8 sm:mb-10 max-w-md">Drop us a line or visit our office. We'd love to hear about what you're building in Rajshahi.</p>
                <div className="space-y-4 sm:space-y-6 text-black font-medium">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                    <span className="text-sm sm:text-base">Rajshahi City, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center shrink-0"><Mail className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                    <span className="text-sm sm:text-base">hello@shohozmark.com</span>
                  </div>
                </div>
                <div className="mt-10 pt-10 border-t border-black/10 flex items-center gap-6">
                  <span className="text-black font-bold uppercase tracking-wider text-sm">Follow Us</span>
                  <a href="#" className="w-10 h-10 bg-black/10 hover:bg-black hover:text-primary transition-colors rounded-full flex items-center justify-center"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-black/10 hover:bg-black hover:text-primary transition-colors rounded-full flex items-center justify-center"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>

              <div className="bg-background text-foreground p-6 sm:p-10 rounded-sm shadow-2xl">
                <h3 className="font-serif text-2xl font-bold mb-6">Send a message</h3>
                <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="text-xs sm:text-sm font-medium text-muted-foreground">Name</label>
                      <input type="text" className="w-full bg-card border border-input rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="text-xs sm:text-sm font-medium text-muted-foreground">Phone</label>
                      <input type="tel" className="w-full bg-card border border-input rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="+880 1..." />
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-muted-foreground">Message</label>
                    <textarea className="w-full bg-card border border-input rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm min-h-[100px] sm:min-h-[120px] focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button type="submit" className="w-full bg-primary text-black font-bold py-3 sm:py-3.5 rounded-sm hover:bg-primary/90 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                      Send Message
                    </button>
                    <ConsultationModal>
                      <button type="button" className="w-full bg-card border border-border text-foreground font-bold py-3 sm:py-3.5 rounded-sm hover:border-primary transition-colors">
                        Book a Discovery Call
                      </button>
                    </ConsultationModal>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
