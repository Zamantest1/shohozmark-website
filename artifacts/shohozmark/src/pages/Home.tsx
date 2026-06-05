import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, MapPin, Mail, Instagram, Facebook,
  BarChart3, PenTool, LayoutTemplate, Megaphone, Smartphone, Search, Menu, X
} from "lucide-react";

import greenLogo from "@assets/Green_1780696036870.png";
import whiteLogo from "@assets/White_1780696036870.png";
import blackLogo from "@assets/Black_1780696036868.png";
import yellowLogo from "@assets/Yellow_1780696036871.png";

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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, mobileMenuOpen ? 300 : 0);
  };

  const NAV_LINKS = [
    { label: "Services", id: "services" },
    { label: "Values", id: "why" },
    { label: "Process", id: "process" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden relative">

      {/* Background Noise Texture */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-md"
        } border-b border-border/50`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0"
            data-testid="nav-logo"
          >
            <img src={whiteLogo} alt="ShohozMark Logo" className="h-6 sm:h-8 w-auto shrink-0" />
            <span className="font-serif font-extrabold text-base sm:text-xl tracking-tight truncate">
              ShohozMark
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium tracking-wide shrink-0">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-primary transition-colors whitespace-nowrap"
                data-testid={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:block bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 sm:px-6 py-2 sm:py-2.5 text-sm rounded-sm transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
              data-testid="nav-cta"
            >
              Let's Talk
            </button>
            <button
              className="md:hidden p-2 -mr-1 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              data-testid="nav-hamburger"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="w-full text-left py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/40 last:border-0"
                    data-testid={`mobile-nav-${link.id}`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("contact")}
                  className="mt-4 bg-primary text-primary-foreground font-bold py-3 rounded-sm w-full text-center hover:bg-primary/90 transition-colors"
                  data-testid="mobile-nav-cta"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
              data-testid="hero-heading"
            >
              MARKETING{" "}
              <br />
              <span className="text-primary italic font-light pr-1">MADE</span>{" "}
              EASY.
            </motion.h1>

            <motion.p
              variants={FADE_UP}
              className="text-base sm:text-xl md:text-2xl text-muted-foreground font-light max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
              data-testid="hero-subtitle"
            >
              Big agency results. Local prices. We help Rajshahi businesses grow effortlessly.
            </motion.p>

            <motion.div
              variants={FADE_UP}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto"
            >
              <button
                onClick={() => scrollTo("contact")}
                className="bg-primary text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center group"
                data-testid="hero-cta-primary"
              >
                Start Growing{" "}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="bg-transparent text-white border border-border font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm hover:bg-white/5 transition-all w-full sm:w-auto justify-center"
                data-testid="hero-cta-secondary"
              >
                See Services
              </button>
            </motion.div>
          </motion.div>

          {/* Decorative geometric — hidden on small screens to prevent overflow */}
          <div className="hidden sm:block absolute left-0 bottom-0 w-64 h-64 border-t border-r border-primary/20 -translate-x-1/2 translate-y-1/2 rotate-45 pointer-events-none" />
          <div className="hidden sm:block absolute right-0 top-32 w-48 h-48 border-b border-l border-primary/20 translate-x-1/2 -translate-y-1/2 rotate-[30deg] pointer-events-none" />
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-16 sm:py-24 md:py-32 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
              className="mb-10 sm:mb-16"
            >
              <motion.span
                variants={FADE_UP}
                className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block"
              >
                01 — Services
              </motion.span>
              <motion.h2
                variants={FADE_UP}
                className="font-serif font-bold max-w-3xl"
                style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}
              >
                What we do best.
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={STAGGER}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                {
                  title: "Social Media Marketing",
                  desc: "Facebook, Instagram campaigns tailored for Rajshahi audiences.",
                  icon: <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
                },
                {
                  title: "Graphic Design",
                  desc: "Logos, banners, menus, flyers that make your brand memorable.",
                  icon: <PenTool className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
                },
                {
                  title: "Content Strategy",
                  desc: "Engaging content that converts scrollers into loyal customers.",
                  icon: <LayoutTemplate className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
                },
                {
                  title: "Brand Identity",
                  desc: "Full brand systems for restaurants, real estate & retail.",
                  icon: <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
                },
                {
                  title: "Digital Advertising",
                  desc: "Targeted ads that reach local buyers exactly when they're looking.",
                  icon: <Megaphone className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
                },
                {
                  title: "Local SEO",
                  desc: "Get discovered by customers searching for businesses in your area.",
                  icon: <Search className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={FADE_UP}
                  className="bg-card border border-card-border p-6 sm:p-8 rounded-sm hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group"
                  style={{ borderTopWidth: "4px", borderTopColor: "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = "#00C853")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = "transparent")}
                  data-testid={`service-card-${i}`}
                >
                  <div className="mb-4 sm:mb-6 bg-background inline-flex p-2.5 sm:p-3 rounded-sm border border-border group-hover:border-primary/50 transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TAGLINE MARQUEE ── */}
        <div className="overflow-hidden bg-primary py-6 sm:py-8 relative">
          <motion.div
            className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[
              "SHOHOZ-E GROW KORO",
              "MARKETING MADE EASY",
              "BIG AGENCY RESULTS. LOCAL PRICES",
              "YOUR BRAND. OUR MISSION",
              "SHOHOZ-E GROW KORO",
              "MARKETING MADE EASY",
              "BIG AGENCY RESULTS. LOCAL PRICES",
              "YOUR BRAND. OUR MISSION",
            ].map((text, i) => (
              <React.Fragment key={i}>
                <span
                  className="font-serif font-black text-black uppercase tracking-tighter shrink-0"
                  style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
                >
                  {text}
                </span>
                <span className="text-black/40 font-black text-2xl sm:text-4xl shrink-0">&times;</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* ── VALUES ── */}
        <section id="why" className="py-16 sm:py-24 md:py-32 bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={STAGGER}
                className="lg:col-span-5"
              >
                <motion.span
                  variants={FADE_UP}
                  className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block"
                >
                  02 — Values
                </motion.span>
                <motion.h2
                  variants={FADE_UP}
                  className="font-serif font-bold mb-4 sm:mb-6"
                  style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}
                >
                  Why local brands choose us.
                </motion.h2>
                <motion.p variants={FADE_UP} className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
                  We don't do cookie-cutter. We build tailored strategies for restaurants, retail, and real estate in Rajshahi.
                </motion.p>
                <motion.div variants={FADE_UP}>
                  <img src={yellowLogo} alt="ShohozMark Highlight Logo" className="w-24 sm:w-32 opacity-80" />
                </motion.div>
              </motion.div>

              <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
                {[
                  { num: "01", title: "Affordable", desc: "Premium results at prices local businesses can actually afford." },
                  { num: "02", title: "Local First", desc: "We understand local markets. Restaurants, real estate, retail — we speak their language." },
                  { num: "03", title: "Creative", desc: "Bold designs and fresh campaigns that make local brands stand out." },
                  { num: "04", title: "Trustworthy", desc: "We deliver what we promise. Transparent pricing, honest communication, real results." },
                ].map((val, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={FADE_UP}
                    className="flex gap-4 sm:gap-6 items-start group"
                    data-testid={`value-card-${i}`}
                  >
                    <div
                      className="font-serif font-black text-transparent shrink-0 pt-1"
                      style={{
                        fontSize: "clamp(2rem, 8vw, 3rem)",
                        WebkitTextStroke: "1px #2E2E2E",
                      }}
                    >
                      {val.num}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        {val.title}
                      </h3>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
              {[
                { value: "50+", label: "Local Brands Served" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "3+", label: "Years in Rajshahi" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-8 sm:py-0"
                  data-testid={`stat-${i}`}
                >
                  <div
                    className="font-serif font-extrabold text-primary mb-2"
                    style={{ fontSize: "clamp(3rem, 12vw, 4.5rem)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium uppercase tracking-wider text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="process" className="py-16 sm:py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="mb-12 sm:mb-16"
            >
              <motion.span
                variants={FADE_UP}
                className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block"
              >
                03 — Process
              </motion.span>
              <motion.h2
                variants={FADE_UP}
                className="font-serif font-bold"
                style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)" }}
              >
                How we work.
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
              {/* Connecting line — desktop only */}
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-border z-0" />

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
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center group"
                  data-testid={`process-step-${i}`}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-background border border-primary text-primary flex items-center justify-center font-serif text-lg sm:text-2xl font-bold mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-black transition-colors shadow-[0_0_15px_rgba(0,200,83,0.15)]">
                    {p.step}
                  </div>
                  <h3 className="font-serif text-base sm:text-xl font-bold mb-1 sm:mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm max-w-[160px] sm:max-w-[200px]">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT / CTA ── */}
        <section
          id="contact"
          className="py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at center, #000 2px, transparent 2px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h2
                className="font-serif font-black mb-4 sm:mb-6 leading-tight"
                style={{ fontSize: "clamp(2rem, 10vw, 4.5rem)" }}
                data-testid="contact-heading"
              >
                Ready to grow
                <br />
                your business?
              </h2>
              <p className="text-base sm:text-xl opacity-90 font-medium mb-8 sm:mb-10 max-w-lg">
                Let's make marketing easy. Reach out today for a free consultation.
              </p>

              <div className="flex flex-col gap-4 sm:gap-6">
                <a
                  href="mailto:hello@shohozmark.com"
                  className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl font-bold hover:translate-x-2 transition-transform w-fit"
                  data-testid="contact-email"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-primary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  hello@shohozmark.com
                </a>
                <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl font-bold">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-primary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  Rajshahi, Bangladesh
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 max-w-md bg-black p-6 sm:p-10 rounded-sm border border-white/10 shadow-2xl">
              <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-5 sm:mb-6">
                Send us a message
              </h3>
              <form className="flex flex-col gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-sm text-white text-sm sm:text-base placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
                  data-testid="contact-input-name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-sm text-white text-sm sm:text-base placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
                  data-testid="contact-input-email"
                />
                <textarea
                  placeholder="Tell us about your business"
                  rows={4}
                  className="bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-sm text-white text-sm sm:text-base placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  data-testid="contact-input-message"
                />
                <button
                  type="submit"
                  className="bg-primary text-black font-bold py-3.5 sm:py-4 rounded-sm hover:bg-white transition-colors mt-1"
                  data-testid="contact-submit"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-background border-t border-border pt-12 sm:pt-20 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
            <div className="sm:col-span-2">
              <img src={whiteLogo} alt="ShohozMark" className="h-8 sm:h-10 w-auto mb-4 sm:mb-6" />
              <p className="text-muted-foreground text-sm sm:text-base max-w-sm mb-6 sm:mb-8">
                Marketing Made Easy. The leading creative agency for local businesses in Rajshahi.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                  aria-label="Facebook"
                  data-testid="footer-facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                  aria-label="Instagram"
                  data-testid="footer-instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg mb-4 sm:mb-6">Navigation</h4>
              <ul className="flex flex-col gap-3 sm:gap-4 text-muted-foreground text-sm sm:text-base">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="hover:text-primary transition-colors"
                      data-testid={`footer-nav-${link.id}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact</h4>
              <ul className="flex flex-col gap-3 sm:gap-4 text-muted-foreground text-sm sm:text-base">
                <li>hello@shohozmark.com</li>
                <li>Rajshahi, Bangladesh</li>
                <li>shohozmark.com</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ShohozMark. All rights reserved.</p>
            <div className="flex items-center gap-2 font-serif">
              <img src={greenLogo} alt="ShohozMark icon" className="w-4 h-4" />
              Marketing Made Easy.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
