import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES } from "@/data/services";
import { Link } from "wouter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  useSEO({ title: "Services — ShohozMark", description: "Marketing services tailored for Rajshahi businesses." });

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif font-extrabold tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}>Everything you need to grow.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-xl">We offer end-to-end digital marketing services designed specifically for local businesses in Rajshahi.</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {SERVICES.map((s, i) => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card border border-border p-8 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: s.color }} />
                <h3 className="font-serif text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6">{s.tagline}</p>
                <ul className="mb-8 space-y-2">
                  {s.features.slice(0, 3).map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
                  Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary text-black rounded-sm p-12 text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-4">Not sure where to start?</h2>
            <p className="mb-8 opacity-90 max-w-xl mx-auto">Book a free discovery call with our team. We'll audit your current marketing and recommend the best path forward for your specific business.</p>
            <ConsultationModal>
              <button className="bg-black text-white font-bold px-8 py-4 rounded-sm hover:bg-black/90 transition-transform hover:scale-105">Book Free Consultation</button>
            </ConsultationModal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
