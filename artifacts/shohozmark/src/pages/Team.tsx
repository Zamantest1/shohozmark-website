import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase, type TeamMember } from "@/lib/supabase";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};
const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function TeamCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-sm p-6 flex flex-col gap-5 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-muted shrink-0" />
        <div className="flex-1">
          <div className="h-4 bg-muted rounded w-3/4 mb-2" />
          <div className="h-3 bg-muted rounded w-1/2" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded w-full" />
        <div className="h-3 bg-muted rounded w-5/6" />
        <div className="h-3 bg-muted rounded w-4/6" />
      </div>
      <div className="flex gap-1.5">
        <div className="h-5 w-20 bg-muted rounded-full" />
        <div className="h-5 w-16 bg-muted rounded-full" />
        <div className="h-5 w-24 bg-muted rounded-full" />
      </div>
    </div>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1 }}
      className="bg-card border border-border rounded-sm p-6 flex flex-col gap-5 hover:border-primary/30 transition-colors duration-300"
    >
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-primary/30"
          style={{ background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)" }}
        >
          {member.photo_url ? (
            <img src={member.photo_url} alt={member.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="font-serif font-black text-primary text-lg select-none">{member.initials}</span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-serif font-bold text-base sm:text-lg leading-tight truncate">{member.name}</h3>
          <p className="text-primary text-xs font-semibold mt-0.5">{member.role}</p>
        </div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
        {member.short_bio || member.bio}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {(member.skills || []).map((skill) => (
          <span
            key={skill}
            className="text-[11px] font-medium px-2 py-0.5 bg-primary/8 text-primary/80 border border-primary/15 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Team() {
  useSEO({
    title: "Meet the Team — ShohozMark",
    description: "Meet the marketing experts behind ShohozMark — Rajshahi's most trusted digital marketing agency. Strategists, designers, and creators passionate about growing local businesses in Bangladesh.",
    keywords: ["ShohozMark team", "marketing experts Rajshahi", "digital marketing agency Bangladesh"],
    canonical: "https://shohozmark.com/team",
  });

  const { data: teamMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["team"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .eq("is_active", true)
        .order("order_index");
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">

        {/* ── PAGE HEADER ── */}
        <section className="pb-12 sm:pb-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-2xl">
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 block">Our People</motion.span>
              <motion.h1 variants={FADE_UP} className="font-serif font-extrabold tracking-tight mb-3" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
                Meet the team.
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-muted-foreground text-base sm:text-lg">
                Strategists, designers, and creators obsessed with growing local businesses in Rajshahi.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── TEAM GRID ── */}
        <section className="py-12 sm:py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {isLoading
                ? Array.from({ length: 3 }).map((_, i) => <TeamCardSkeleton key={i} />)
                : (teamMembers || []).map((member, i) => (
                    <TeamCard key={member.id} member={member} index={i} />
                  ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-12 sm:py-16 border-b border-border bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="mb-10 sm:mb-12">
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 block">What drives us</motion.span>
              <motion.h2 variants={FADE_UP} className="font-serif font-bold" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>Our values.</motion.h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {[
                { title: "Results First", desc: "Every strategy is designed around measurable outcomes. We don't guess — we track, optimise, and improve." },
                { title: "Local Expertise", desc: "We understand Rajshahi's market deeply. Our campaigns speak the language of local buyers." },
                { title: "Transparency", desc: "You'll always know exactly what we're doing and why. No jargon, no hidden fees — just honest work." },
                { title: "Long-term Growth", desc: "We build strategies that compound over time, not one-off campaigns that disappear." },
              ].map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-sm p-6">
                  <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="max-w-2xl mx-auto">
              <motion.h2 variants={FADE_UP} className="font-serif font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
                Ready to grow your business?
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-muted-foreground mb-8">
                Book a free consultation and let's map out a strategy that fits your goals and budget.
              </motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 justify-center">
                <ConsultationModal>
                  <button className="bg-primary text-black font-bold px-8 py-4 rounded-sm hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 justify-center">
                    Book Free Consultation <ArrowRight className="w-4 h-4" />
                  </button>
                </ConsultationModal>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
