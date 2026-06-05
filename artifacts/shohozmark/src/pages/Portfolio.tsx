import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { getPortfolioPlaceholder } from "@/lib/media";
import { ConsultationModal } from "@/components/ConsultationModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  useSEO({
    title: "Portfolio & Case Studies — ShohozMark",
    description: "See real results from ShohozMark's work with local businesses in Rajshahi. Case studies covering social media growth, brand identity, SEO, and digital advertising for restaurants, real estate, and retail.",
    keywords: ["marketing portfolio Rajshahi", "digital marketing case studies Bangladesh", "social media results", "brand design portfolio", "ShohozMark portfolio"],
    canonical: "https://shohozmark.com/portfolio",
  });
  const [filter, setFilter] = useState("All");

  const industries = ["All", ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.industry)))];
  const filtered = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(item => item.industry === filter);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>Our Work.</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">Real results for real local businesses. Browse our case studies to see how we help Rajshahi brands grow.</p>
          
          <div className="flex flex-wrap gap-2 mb-12">
            {industries.map(ind => (
              <button key={ind} onClick={() => setFilter(ind)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === ind ? "bg-primary text-black" : "bg-card border border-border text-foreground hover:border-primary"}`}>
                {ind}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filtered.map(item => (
                <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-card border border-border rounded-sm overflow-hidden flex flex-col">
                  <div className="h-48 w-full border-b border-border relative">
                    <img src={getPortfolioPlaceholder(item.clientName, item.color)} alt={item.clientName} className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: item.color }} />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold px-2 py-1 bg-muted rounded-sm text-muted-foreground">{item.industry}</span>
                      <span className="text-xs text-muted-foreground">{item.serviceUsed.join(", ")}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{item.tagline}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {item.results.slice(0, 2).map((res, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold" style={{ color: item.color }}>{res.value}</div>
                          <div className="text-xs text-muted-foreground">{res.metric}</div>
                        </div>
                      ))}
                    </div>
                    <button className="text-primary font-bold flex items-center gap-2 text-sm hover:underline w-fit">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-24 text-center bg-primary/10 border border-primary/20 rounded-sm p-8 sm:p-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Ready for results like these?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss how we can help your business achieve similar growth.</p>
            <ConsultationModal>
              <button className="bg-primary text-black font-bold px-8 py-4 rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 inline-block">Book Free Consultation</button>
            </ConsultationModal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
