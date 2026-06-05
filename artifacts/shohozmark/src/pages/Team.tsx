import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TEAM_MEMBERS } from "@/data/team";
import { ConsultationModal } from "@/components/ConsultationModal";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};
const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: Linkedin,
  twitter: Linkedin,
};

export default function Team() {
  useSEO({
    title: "Meet the Team — ShohozMark",
    description: "Meet the marketing experts behind ShohozMark — Rajshahi's most trusted digital marketing agency. Strategists, designers, and creators passionate about growing local businesses in Bangladesh.",
    keywords: ["ShohozMark team", "marketing experts Rajshahi", "digital marketing agency Bangladesh", "Sabbir Ahmed ShohozMark"],
    canonical: "https://shohozmark.com/team",
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
              {TEAM_MEMBERS.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-sm p-6 flex flex-col gap-5 hover:border-primary/30 transition-colors duration-300"
                >
                  {/* Top: avatar + name + role */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-primary/30"
                      style={{ background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)" }}
                    >
                      <span className="font-serif font-black text-primary text-lg select-none">
                        {member.initials}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif font-bold text-base sm:text-lg leading-tight truncate">{member.name}</h3>
                      <p className="text-primary text-xs font-semibold mt-0.5">{member.role}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                    {member.shortBio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-2 py-0.5 bg-primary/8 text-primary/80 border border-primary/15 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-2 pt-1 border-t border-border/50">
                    {member.socialLinks.map((link) => {
                      const Icon = SOCIAL_ICONS[link.platform] || FaFacebook;
                      return (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={link.platform}
                          className="w-8 h-8 rounded-sm bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION + HIRING ── */}
        <section className="py-12 sm:py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Our Mission</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Why we do what we do.</h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-3">
                  Local businesses are the heartbeat of Rajshahi. Every restaurant, retail shop, and property agency has a story worth telling — and customers who need to hear it.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We built ShohozMark to put world-class marketing within reach for every local entrepreneur. No corporate jargon, no inflated fees — just honest, results-driven work.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="lg:col-span-2"
              >
                <div className="bg-card border border-border rounded-sm p-6 h-full flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Join the team</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We're always looking for talented marketers, designers, and strategists who want to make a real impact in Rajshahi.
                    </p>
                  </div>
                  <a
                    href="mailto:careers@shohozmark.com"
                    className="bg-primary text-black font-bold px-5 py-2.5 rounded-sm hover:bg-primary/90 transition-transform hover:scale-[1.02] inline-flex items-center gap-2 w-fit text-sm"
                  >
                    See Open Positions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-10 sm:py-14 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">Ready to work with our team?</h3>
              <p className="text-muted-foreground text-sm">Free consultation. No commitment.</p>
            </div>
            <ConsultationModal>
              <button className="bg-primary text-black font-bold px-6 py-3 rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 shrink-0 flex items-center gap-2">
                Let's Talk <ArrowRight className="w-4 h-4" />
              </button>
            </ConsultationModal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
