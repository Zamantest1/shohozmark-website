import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TEAM_MEMBERS } from "@/data/team";
import { getAvatarPlaceholder } from "@/lib/media";
import { Facebook, Instagram, Linkedin, Twitter, Link as LinkIcon, Heart } from "lucide-react";
import { motion } from "framer-motion";

const ICONS = {
  facebook: LinkIcon,
  instagram: Heart,
  linkedin: Linkedin,
  twitter: Twitter
};

export default function Team() {
  useSEO({ title: "Meet the Team", description: "The marketing experts behind Rajshahi's fastest-growing brands." });

  const FADE_UP = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h1 initial="hidden" animate="visible" variants={FADE_UP} className="font-serif font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>Meet the team.</motion.h1>
          <motion.p initial="hidden" animate="visible" variants={FADE_UP} className="text-muted-foreground text-lg mb-16 max-w-2xl">We are a collective of strategists, designers, and creators passionate about building local businesses in Rajshahi.</motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div key={member.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card border border-border p-6 sm:p-8 rounded-sm">
                <img src={getAvatarPlaceholder(member.initials)} alt={member.name} className="w-24 h-24 rounded-full mb-6 border-2 border-primary" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6">{member.shortBio}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map(skill => (
                    <span key={skill} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-sm">{skill}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {member.socialLinks.map(link => {
                    const Icon = ICONS[link.platform] || LinkIcon;
                    return (
                      <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Our Culture</span>
              <h2 className="font-serif text-3xl font-bold mb-4">Why we do what we do</h2>
              <p className="text-muted-foreground mb-6">We believe that local businesses are the heartbeat of Rajshahi. Our mission is to provide world-class marketing that was previously only available to big corporations in Dhaka, right here for local entrepreneurs.</p>
              <p className="text-muted-foreground">We value creativity, honesty, and hard work. No fluff, just results.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-sm text-center">
              <h3 className="font-serif text-2xl font-bold mb-2">Join the team</h3>
              <p className="text-muted-foreground mb-6">We're always looking for talented marketers, writers, and designers to join us in Rajshahi.</p>
              <a href="mailto:careers@shohozmark.com" className="bg-primary text-black font-bold px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors inline-block">View Open Positions</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
