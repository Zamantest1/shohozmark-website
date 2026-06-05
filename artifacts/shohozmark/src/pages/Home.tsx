import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Mail, Instagram, Facebook, BarChart3, PenTool, LayoutTemplate, Megaphone, Smartphone, Search } from "lucide-react";
import { Link } from "wouter";

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
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-hidden relative">
      
      {/* Background Noise Texture */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <img src={whiteLogo} alt="ShohozMark Logo" className="h-8 w-auto" />
            <span className="font-serif font-extrabold text-xl tracking-tight">ShohozMark</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <button onClick={() => scrollTo('services')} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo('why')} className="hover:text-primary transition-colors">Values</button>
            <button onClick={() => scrollTo('process')} className="hover:text-primary transition-colors">Process</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors">Contact</button>
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-2.5 rounded-sm transition-transform hover:scale-105 active:scale-95"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <motion.div 
            className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center"
            style={{ y: yHero, opacity: opacityHero }}
            initial="hidden"
            animate="visible"
            variants={STAGGER}
          >
            <motion.div variants={FADE_UP} className="mb-8 inline-block">
               <img src={greenLogo} alt="ShohozMark Green Logo" className="h-24 w-auto mx-auto drop-shadow-[0_0_15px_rgba(0,200,83,0.3)]" />
            </motion.div>
            
            <motion.h1 variants={FADE_UP} className="font-serif font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-6 max-w-5xl mx-auto">
              MARKETING <br /> <span className="text-primary italic font-light pr-2">MADE</span> EASY.
            </motion.h1>
            
            <motion.p variants={FADE_UP} className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-10">
              Big agency results. Local prices. We help Rajshahi businesses grow effortlessly.
            </motion.p>
            
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => scrollTo('contact')} className="bg-primary text-black font-bold text-lg px-8 py-4 rounded-sm hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center group">
                Start Growing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('services')} className="bg-transparent text-white border border-border font-bold text-lg px-8 py-4 rounded-sm hover:bg-white/5 transition-all w-full sm:w-auto justify-center">
                See Services
              </button>
            </motion.div>
          </motion.div>

          {/* Decorative geometric elements */}
          <div className="absolute left-0 bottom-0 w-64 h-64 border-t border-r border-primary/20 -translate-x-1/2 translate-y-1/2 rotate-45"></div>
          <div className="absolute right-0 top-32 w-48 h-48 border-b border-l border-primary/20 translate-x-1/2 -translate-y-1/2 rotate-[30deg]"></div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 md:py-32 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
              className="mb-16"
            >
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">01 — Services</motion.span>
              <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-6xl font-bold max-w-3xl">What we do best.</motion.h2>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={STAGGER}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { title: "Social Media Marketing", desc: "Facebook, Instagram campaigns tailored for Rajshahi audiences.", icon: <Smartphone className="w-8 h-8 text-primary" /> },
                { title: "Graphic Design", desc: "Logos, banners, menus, flyers that make your brand memorable.", icon: <PenTool className="w-8 h-8 text-primary" /> },
                { title: "Content Strategy", desc: "Engaging content that converts scrollers into loyal customers.", icon: <LayoutTemplate className="w-8 h-8 text-primary" /> },
                { title: "Brand Identity", desc: "Full brand systems for restaurants, real estate & retail.", icon: <CheckCircle2 className="w-8 h-8 text-primary" /> },
                { title: "Digital Advertising", desc: "Targeted ads that reach local buyers exactly when they're looking.", icon: <Megaphone className="w-8 h-8 text-primary" /> },
                { title: "Local SEO", desc: "Get discovered by customers searching for businesses in your area.", icon: <Search className="w-8 h-8 text-primary" /> }
              ].map((s, i) => (
                <motion.div 
                  key={i} variants={FADE_UP}
                  className="bg-card border border-card-border p-8 rounded-sm hover:border-t-primary hover:-translate-y-2 transition-all duration-300 group"
                  style={{ borderTopWidth: '4px' }}
                >
                  <div className="mb-6 bg-background inline-flex p-3 rounded-sm border border-border group-hover:border-primary/50 transition-colors">{s.icon}</div>
                  <h3 className="font-serif text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TAGLINE MARQUEE SECTION */}
        <section className="py-24 bg-primary overflow-hidden relative rotate-[-2deg] scale-[1.05]">
          <div className="whitespace-nowrap flex items-center gap-12 font-serif text-6xl md:text-8xl font-black text-black uppercase tracking-tighter mix-blend-multiply opacity-90">
             <span className="animate-[pulse_3s_ease-in-out_infinite]">SHOHOZ-E GROW KORO</span> <span className="text-white">&times;</span>
             <span>MARKETING MADE EASY</span> <span className="text-white">&times;</span>
             <span>BIG AGENCY RESULTS. LOCAL PRICES</span> <span className="text-white">&times;</span>
             <span>YOUR BRAND. OUR MISSION</span> <span className="text-white">&times;</span>
          </div>
        </section>

        {/* WHY SHOHOZMARK (VALUES) */}
        <section id="why" className="py-24 md:py-32 bg-background relative z-10 mt-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
                className="lg:col-span-5"
              >
                <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">02 — Values</motion.span>
                <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-6xl font-bold mb-6">Why local brands choose us.</motion.h2>
                <motion.p variants={FADE_UP} className="text-muted-foreground text-lg mb-8">
                  We don't do cookie-cutter. We build tailored strategies for restaurants, retail, and real estate in Rajshahi.
                </motion.p>
                <motion.div variants={FADE_UP}>
                   <img src={yellowLogo} alt="ShohozMark Highlight Logo" className="w-32 opacity-80" />
                </motion.div>
              </motion.div>

              <div className="lg:col-span-7 flex flex-col gap-8">
                {[
                  { num: "01", title: "Affordable", desc: "Premium results at prices local businesses can actually afford." },
                  { num: "02", title: "Local First", desc: "We understand local markets. Restaurants, real estate, retail — we speak their language." },
                  { num: "03", title: "Creative", desc: "Bold designs and fresh campaigns that make local brands stand out." },
                  { num: "04", title: "Trustworthy", desc: "We deliver what we promise. Transparent pricing, honest communication, real results." }
                ].map((val, i) => (
                  <motion.div 
                    key={i}
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP}
                    className="flex gap-6 items-start group"
                  >
                    <div className="font-serif text-4xl md:text-5xl font-black text-transparent [-webkit-text-stroke:1px_#2E2E2E] group-hover:[-webkit-text-stroke:1px_#00C853] transition-all pt-1">
                      {val.num}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{val.title}</h3>
                      <p className="text-muted-foreground text-lg">{val.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-24 border-y border-border relative overflow-hidden bg-card">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="py-8 md:py-0">
                <div className="font-serif text-6xl md:text-7xl font-extrabold text-primary mb-2">50+</div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Local Brands Served</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="py-8 md:py-0">
                <div className="font-serif text-6xl md:text-7xl font-extrabold text-primary mb-2">100%</div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Client Satisfaction</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="py-8 md:py-0">
                <div className="font-serif text-6xl md:text-7xl font-extrabold text-primary mb-2 flex items-center justify-center gap-2">
                  <MapPin className="w-12 h-12" />
                </div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Rajshahi Based</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="mb-16">
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">03 — Process</motion.span>
              <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-6xl font-bold">How we work.</motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
               {/* Connecting Line (desktop only) */}
               <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-border -translate-y-1/2 z-0"></div>

               {[
                 { step: "1", title: "Discovery", desc: "We learn about your brand, goals, and audience." },
                 { step: "2", title: "Strategy", desc: "We map out a plan tailored to your budget." },
                 { step: "3", title: "Create", desc: "We design, write, and build the assets." },
                 { step: "4", title: "Launch", desc: "We execute the campaign and track results." }
               ].map((p, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative z-10 flex flex-col items-center group"
                 >
                    <div className="w-16 h-16 rounded-full bg-background border border-primary text-primary flex items-center justify-center font-serif text-2xl font-bold mb-6 group-hover:bg-primary group-hover:text-black transition-colors shadow-[0_0_15px_rgba(0,200,83,0.15)]">
                      {p.step}
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-[200px]">{p.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* CTA / CONTACT SECTION */}
        <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, #000 2px, transparent 2px)", backgroundSize: "32px 32px" }}></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="font-serif text-5xl md:text-7xl font-black mb-6 leading-tight">Ready to grow<br/>your business?</h2>
              <p className="text-xl opacity-90 font-medium mb-10 max-w-lg">
                Let's make marketing easy. Reach out today for a free consultation.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:hello@shohozmark.com" className="flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-transform w-fit">
                  <div className="w-12 h-12 bg-black text-primary rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@shohozmark.com
                </a>
                <div className="flex items-center gap-4 text-xl font-bold w-fit">
                  <div className="w-12 h-12 bg-black text-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  Rajshahi, Bangladesh
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full max-w-md bg-black p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl">
              <h3 className="font-serif text-2xl text-white font-bold mb-6">Send us a message</h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 p-4 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 p-4 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors" />
                <textarea placeholder="Tell us about your business" rows={4} className="bg-white/5 border border-white/10 p-4 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                <button className="bg-primary text-black font-bold py-4 rounded-sm hover:bg-white transition-colors mt-2">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <img src={whiteLogo} alt="ShohozMark" className="h-10 w-auto mb-6" />
              <p className="text-muted-foreground max-w-sm mb-8">
                Marketing Made Easy. The leading creative agency for local businesses in Rajshahi.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Navigation</h4>
              <ul className="flex flex-col gap-4 text-muted-foreground">
                <li><button onClick={() => scrollTo('services')} className="hover:text-primary transition-colors">Services</button></li>
                <li><button onClick={() => scrollTo('why')} className="hover:text-primary transition-colors">Values</button></li>
                <li><button onClick={() => scrollTo('process')} className="hover:text-primary transition-colors">Process</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Contact</h4>
              <ul className="flex flex-col gap-4 text-muted-foreground">
                <li>hello@shohozmark.com</li>
                <li>Rajshahi, Bangladesh</li>
                <li>shohozmark.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
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
