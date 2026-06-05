import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS, getFeaturedBlogPosts } from "@/data/blog";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Blog() {
  useSEO({
    title: "Marketing Blog & Insights — ShohozMark",
    description: "Practical marketing tips, strategies, and insights for local businesses in Rajshahi and Bangladesh. Learn how to grow your restaurant, retail store, or real estate business online.",
    keywords: ["marketing tips Rajshahi", "local business growth Bangladesh", "social media tips", "digital marketing blog", "SEO tips Bangladesh", "restaurant marketing"],
    canonical: "https://shohozmark.com/blog",
  });

  const featured = getFeaturedBlogPosts()[0];
  const others = BLOG_POSTS.filter(p => p.id !== featured?.id);
  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>Marketing Insights.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg mb-12 max-w-2xl">Practical tips, industry guides, and digital marketing strategies for local businesses in Rajshahi.</motion.p>
          
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-card border border-border text-foreground hover:border-primary">
                {cat}
              </button>
            ))}
          </div>

          {featured && (
            <Link href={`/blog/${featured.slug}`} className="block mb-16 group">
              <div className="bg-card border border-border rounded-sm p-6 sm:p-12 transition-all hover:border-primary">
                <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded-sm mb-4 inline-block">{featured.category}</span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
                <p className="text-muted-foreground text-lg mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">{featured.author}</span>
                  <span>•</span>
                  <span>{new Date(featured.publishedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{featured.readTime} min read</span>
                </div>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {others.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-card border border-border rounded-sm p-6 transition-all hover:border-primary flex flex-col">
                  <span className="text-xs font-bold px-2 py-1 bg-muted text-muted-foreground rounded-sm mb-4 w-fit">{post.category}</span>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                    <span className="font-bold text-foreground">{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-primary/10 border border-primary/20 rounded-sm p-6 sm:p-8 sticky top-24">
                <h3 className="font-serif text-xl font-bold mb-4">Want personalised advice?</h3>
                <p className="text-muted-foreground text-sm mb-6">Join 500+ local business owners receiving our weekly marketing tips.</p>
                <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" className="bg-background border border-input rounded-sm px-3 py-2 text-sm" />
                  <input type="email" placeholder="Email Address" className="bg-background border border-input rounded-sm px-3 py-2 text-sm" />
                  <button type="submit" className="bg-primary text-black font-bold px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors">Subscribe (Coming Soon)</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
