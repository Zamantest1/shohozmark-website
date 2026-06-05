import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TEAM_MEMBERS } from "@/data/team";
import { ConsultationModal } from "@/components/ConsultationModal";
import { motion } from "framer-motion";
import { Camera, Linkedin, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const SOCIAL_ICONS = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: Linkedin,
  twitter: Linkedin,
};

export default function Team() {
  useSEO({
    title: "Meet the Team — ShohozMark",
    description: "The strategists, designers, and marketers behind Rajshahi's fastest-growing local brands.",
    keywords: ["ShohozMark team", "marketing team Rajshahi", "digital marketing experts Bangladesh"],
  });

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">

        {/* ── PAGE HERO ── */}
        <section className="pb-14 sm:pb-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-3xl">
              <motion.span variants={FADE_UP} className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Our People</motion.span>
              <motion.h1 variants={FADE_UP} className="font-serif font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
                Meet the team.
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-muted-foreground text-base sm:text-lg max-w-xl">
                A tight-knit group of strategists, designers, and creators who are obsessed with helping local businesses in Rajshahi grow.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── TEAM MEMBERS ── */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-6 sm:gap-8">
              {TEAM_MEMBERS.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-sm overflow-hidden group hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row">

                    {/* Avatar column */}
                    <div className="relative w-full sm:w-56 md:w-64 lg:w-72 shrink-0 bg-background/50 flex items-center justify-center py-10 sm:py-0 border-b sm:border-b-0 sm:border-r border-border/50">
                      {/* Initials avatar */}
                      <div className="relative">
                        <div
                          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center border-2 border-primary/40 group-hover:border-primary transition-colors duration-300 relative overflow-hidden"
                          style={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)" }}
                        >
                          <span
                            className="font-serif font-black text-primary select-none"
                            style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}
                          >
                            {member.initials}
                          </span>

                          {/* Photo upload hint overlay */}
                          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer">
                            <Camera className="w-6 h-6 text-primary mb-1" />
                            <span className="text-[10px] text-primary font-bold tracking-wide uppercase">Add Photo</span>
                          </div>
                        </div>

                        {/* Subtle green glow */}
                        <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-1">{member.name}</h2>
                          <p className="text-primary font-semibold text-sm sm:text-base tracking-wide">{member.role}</p>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                          {member.socialLinks.map((link) => {
                            const Icon = SOCIAL_ICONS[link.platform] || SOCIAL_ICONS.facebook;
                            return (
                              <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-sm bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                                aria-label={link.platform}
                              >
                                <Icon className="w-4 h-4" />
                              </a>
                            );
                          })}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                        {member.bio}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-medium px-3 py-1 bg-primary/8 text-primary/90 border border-primary/20 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CULTURE + HIRING ── */}
        <section className="py-14 sm:py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">

              {/* Culture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Our Mission</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Why we do what we do.</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                  Local businesses are the heartbeat of Rajshahi. Every restaurant, retail shop, and property agency in this city has a story worth telling — and customers who need to hear it.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We built ShohozMark to put world-class marketing within reach for every local entrepreneur. No corporate jargon. No inflated agency fees. Just honest, results-driven work for the businesses that make our city thrive.
                </p>
              </motion.div>

              {/* Hiring */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="lg:col-span-2"
              >
                <div className="bg-card border border-border rounded-sm p-6 sm:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3">Join the team</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                      We're always looking for talented marketers, designers, and strategists who want to make a real impact in Rajshahi.
                    </p>
                  </div>
                  <a
                    href="mailto:careers@shohozmark.com"
                    className="bg-primary text-black font-bold px-5 py-3 rounded-sm hover:bg-primary/90 transition-transform hover:scale-[1.02] inline-flex items-center gap-2 w-fit text-sm"
                  >
                    See Open Positions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 sm:py-16 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">Ready to work with our team?</h3>
              <p className="text-muted-foreground text-sm">Free consultation. No commitment.</p>
            </div>
            <ConsultationModal>
              <button className="bg-primary text-black font-bold px-6 py-3 rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 shrink-0 whitespace-nowrap flex items-center gap-2">
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
