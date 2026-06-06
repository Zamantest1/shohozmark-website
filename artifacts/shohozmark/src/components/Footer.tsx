import { Link } from "wouter";
import { SERVICES } from "@/data/services";
import whiteLogo from "@assets/White_1780696036870.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 sm:pt-24 pb-8 sm:pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0" data-testid="footer-logo">
              <img src={whiteLogo} alt="ShohozMark Logo" className="h-6 sm:h-8 w-auto shrink-0" />
              <span className="font-serif font-extrabold text-base sm:text-xl tracking-tight truncate">
                ShohozMark
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Big agency results. Local prices. We help Rajshahi businesses grow effortlessly.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-foreground">Services</h4>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-primary transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-foreground">Company</h4>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">All Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-foreground">Contact</h4>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              <li>Rajshahi, Bangladesh</li>
              <li><a href="mailto:hello@shohozmark.com" className="hover:text-primary transition-colors">hello@shohozmark.com</a></li>
              <li><a href="tel:+8801234567890" className="hover:text-primary transition-colors">+880 1234 567 890</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ShohozMark. All rights reserved.</p>
          <p className="text-xs">
            Designed &amp; built by{" "}
            <a
              href="https://shomikujzaman.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Shomik
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
