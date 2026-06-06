import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase, type PortfolioItem } from "@/lib/supabase";

function CardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-sm overflow-hidden animate-pulse">
      <div className="h-48 w-full bg-muted" />
      <div className="p-6 space-y-4">
        <div className="flex gap-2">
          <div className="h-5 w-24 bg-muted rounded-sm" />
          <div className="h-5 w-32 bg-muted rounded-sm" />
        </div>
        <div className="h-6 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
      </div>
    </div>
  );
}

const CATEGORY_COLORS: Record<string, string> = {
  "Social Media Marketing": "#00C853",
  "Brand Identity": "#7C3AED",
  "Influencer Marketing": "#EA580C",
  "Local SEO": "#0EA5E9",
  "Content Strategy": "#D97706",
  "Video Production": "#DC2626",
};

export default function Portfolio() {
  useSEO({
    title: "Portfolio & Case Studies — ShohozMark",
    description: "See real results from ShohozMark's work with local businesses in Rajshahi. Case studies covering social media growth, brand identity, SEO, and digital advertising.",
    keywords: ["marketing portfolio Rajshahi", "digital marketing case studies Bangladesh", "social media results", "brand design portfolio", "ShohozMark portfolio"],
    canonical: "https://shohozmark.com/portfolio",
  });

  const [filter, setFilter] = useState("All");

  const { data: items, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["portfolio"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("portfolio_items")
        .select("*")
        .eq("published", true)
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const industries = ["All", ...Array.from(new Set((items || []).map((item) => item.industry)))];
  const filtered = filter === "All" ? (items || []) : (items || []).filter((item) => item.industry === filter);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>Our Work.</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">Real results for real local businesses. Browse our case studies to see how we help Rajshahi brands grow.</p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {(isLoading ? ["All"] : industries).map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === ind ? "bg-primary text-black" : "bg-card border border-border text-foreground hover:border-primary"}`}
              >
                {ind}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {isLoading
                ? Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
                : filtered.map((item) => {
                    const accentColor = CATEGORY_COLORS[item.category] || "#00C853";
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-card border border-border rounded-sm overflow-hidden flex flex-col group hover:border-primary/30 transition-colors duration-300"
                      >
                        {/* Color bar header */}
                        <div className="h-2 w-full" style={{ backgroundColor: accentColor }} />

                        {/* Card body */}
                        <div className="p-6 sm:p-8 flex-1 flex flex-col">
                          {/* Tags */}
                          <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-bold px-2.5 py-1 bg-muted rounded-sm text-muted-foreground">{item.industry}</span>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-sm border" style={{ color: accentColor, borderColor: `${accentColor}30`, background: `${accentColor}10` }}>{item.category}</span>
                            {item.featured && (
                              <span className="text-xs font-bold px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-sm">Featured</span>
                            )}
                          </div>

                          {/* Title & client */}
                          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">{item.title}</h3>
                          <p className="text-xs text-muted-foreground font-medium mb-4">{item.client}</p>

                          {/* Description */}
                          <p className="text-muted-foreground mb-6 flex-1 text-sm sm:text-base leading-relaxed line-clamp-3">{item.description}</p>

                          {/* Result highlight */}
                          {item.result && (
                            <div className="bg-primary/5 border border-primary/15 rounded-sm p-4 mb-6">
                              <div className="flex items-start gap-2">
                                <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <p className="text-sm text-foreground/90 leading-relaxed">{item.result}</p>
                              </div>
                            </div>
                          )}

                          {/* Testimonial quote */}
                          {item.testimonial_quote && (
                            <blockquote className="border-l-2 border-primary/40 pl-4 mb-6">
                              <p className="text-sm text-muted-foreground italic line-clamp-2">"{item.testimonial_quote}"</p>
                              {item.testimonial_author && (
                                <p className="text-xs text-primary/70 font-semibold mt-1">— {item.testimonial_author}</p>
                              )}
                            </blockquote>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
            </AnimatePresence>
          </motion.div>

          {!isLoading && filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">No portfolio items in this category yet.</div>
          )}

          <div className="mt-24 text-center bg-primary/10 border border-primary/20 rounded-sm p-8 sm:p-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Ready for results like these?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss how we can help your business achieve similar growth.</p>
            <ConsultationModal>
              <button className="bg-primary text-black font-bold px-8 py-4 rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 inline-flex items-center gap-2">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </ConsultationModal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
