import { useState, useEffect } from "react";
import { Link, useRoute, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES } from "@/data/services";
import whiteLogo from "@assets/White_1780696036870.png";
import { ConsultationModal } from "./ConsultationModal";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const closeMobile = () => setMobileMenuOpen(false);

  const isActive = (path: string) => {
    return location === path || location.startsWith(path + "/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-md"
      } border-b border-border/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" onClick={closeMobile} className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0" data-testid="nav-logo">
          <img src={whiteLogo} alt="ShohozMark Logo" className="h-6 sm:h-8 w-auto shrink-0" />
          <span className="font-serif font-extrabold text-base sm:text-xl tracking-tight truncate">
            ShohozMark
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium tracking-wide shrink-0">
          <div 
            className="relative" 
            onMouseEnter={() => setServicesOpen(true)} 
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" className={`flex items-center gap-1 hover:text-primary transition-colors py-2 ${isActive('/services') ? 'text-primary' : 'text-foreground'}`}>
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-[400px] bg-card border border-border rounded-sm shadow-xl p-4 grid grid-cols-2 gap-2"
                >
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setServicesOpen(false)} className="p-2 hover:bg-muted rounded-sm transition-colors text-sm flex flex-col">
                      <span className="font-bold text-primary">{s.title}</span>
                      <span className="text-xs text-muted-foreground truncate">{s.tagline}</span>
                    </Link>
                  ))}
                  <Link href="/services" onClick={() => setServicesOpen(false)} className="p-2 hover:bg-muted rounded-sm transition-colors text-sm font-bold col-span-2 text-center border-t border-border mt-2 pt-4">
                    View All Services →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/portfolio" className={`hover:text-primary transition-colors ${isActive('/portfolio') ? 'text-primary' : 'text-foreground'}`}>Portfolio</Link>
          <Link href="/team" className={`hover:text-primary transition-colors ${isActive('/team') ? 'text-primary' : 'text-foreground'}`}>Team</Link>
          <Link href="/blog" className={`hover:text-primary transition-colors ${isActive('/blog') ? 'text-primary' : 'text-foreground'}`}>Blog</Link>
        </div>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <ConsultationModal>
            <button className="hidden sm:block bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 sm:px-6 py-2 sm:py-2.5 text-sm rounded-sm transition-transform hover:scale-105 active:scale-95 whitespace-nowrap" data-testid="nav-cta">
              Let's Talk
            </button>
          </ConsultationModal>
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
              <Link href="/services" onClick={closeMobile} className="w-full text-left py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/40">
                All Services
              </Link>
              <div className="pl-4 py-2 border-b border-border/40 flex flex-col gap-2">
                {SERVICES.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={closeMobile} className="text-sm text-muted-foreground hover:text-primary py-1">
                    {s.title}
                  </Link>
                ))}
              </div>
              <Link href="/portfolio" onClick={closeMobile} className="w-full text-left py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/40">
                Portfolio
              </Link>
              <Link href="/team" onClick={closeMobile} className="w-full text-left py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/40">
                Team
              </Link>
              <Link href="/blog" onClick={closeMobile} className="w-full text-left py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/40">
                Blog
              </Link>
              <Link href="/#contact" onClick={closeMobile} className="mt-4 bg-primary text-primary-foreground font-bold py-3 rounded-sm w-full text-center hover:bg-primary/90 transition-colors block">
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
