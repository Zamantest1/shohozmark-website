import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getServiceBySlug, SERVICES } from "@/data/services";
import { useParams, Link } from "wouter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");

  useSEO(service ? service.seo : { title: "Service Not Found" });

  if (!service) {
    return (
      <div className="bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Service not found</h1>
          <Link href="/services" className="text-primary hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  const related = SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="pt-24 sm:pt-32">
        {/* Hero */}
        <section className="pb-16 sm:pb-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold tracking-widest uppercase mb-4 block" style={{ color: service.color }}>{service.title}</span>
              <h1 className="font-serif font-extrabold tracking-tight mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}>{service.tagline}</h1>
              <p className="text-muted-foreground text-xl mb-10 leading-relaxed">{service.longDescription}</p>
              <ConsultationModal>
                <button className="bg-primary text-black font-bold px-8 py-4 rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 inline-flex items-center gap-2">
                  {service.cta} <ArrowRight className="w-5 h-5" />
                </button>
              </ConsultationModal>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">What's Included</h2>
                <ul className="space-y-4">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: service.color }} />
                      <span className="text-lg">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">The Benefits</h2>
                <div className="space-y-8">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="bg-background border border-border p-6 rounded-sm">
                      <h3 className="font-serif text-xl font-bold mb-2">{b.title}</h3>
                      <p className="text-muted-foreground">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((p, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-serif font-black mb-4 opacity-10" style={{ color: service.color }}>{p.step}</div>
                  <h3 className="font-serif text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-card border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="font-serif text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-4xl font-bold mb-6">Ready to {service.cta.toLowerCase()}?</h2>
            <p className="text-lg opacity-90 mb-10">We've helped businesses in {service.industries.join(", ")} and more. Let's talk about yours.</p>
            <ConsultationModal>
              <button className="bg-black text-white font-bold px-10 py-5 rounded-sm hover:bg-black/90 transition-transform hover:scale-105 text-lg">Let's Talk</button>
            </ConsultationModal>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="font-serif text-2xl font-bold mb-8">Other Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map(s => (
                <Link key={s.id} href={`/services/${s.slug}`} className="bg-card border border-border p-6 rounded-sm hover:border-primary transition-colors">
                  <h4 className="font-serif text-lg font-bold mb-2">{s.title}</h4>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{s.shortDescription}</p>
                  <span className="text-primary text-sm font-bold">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
