import { useSEO } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getBlogPostBySlug, BLOG_POSTS } from "@/data/blog";
import { useParams, Link } from "wouter";
import { ConsultationModal } from "@/components/ConsultationModal";
import React from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug || "");

  useSEO(post
    ? { ...post.seo, ogType: "article" as const, canonical: `https://shohozmark.com/blog/${post.slug}` }
    : { title: "Blog Post Not Found" }
  );

  if (!post) {
    return (
      <div className="bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const related = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-sm mb-6 inline-block">{post.category}</span>
            <h1 className="font-serif font-extrabold tracking-tight mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.75rem)" }}>{post.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-8 mb-8">
              <div>
                <div className="font-bold text-foreground">{post.author}</div>
                <div className="text-xs">{post.authorRole}</div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div>{new Date(post.publishedAt).toLocaleDateString()}</div>
              <div className="h-8 w-px bg-border"></div>
              <div>{post.readTime} min read</div>
            </div>

            <div className="prose prose-invert prose-green max-w-none prose-headings:font-serif prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-a:text-primary">
              {post.content.split("\n\n").map((para, i) => {
                if (para.startsWith("### ")) {
                  return <h3 key={i} className="mt-8 mb-4 font-bold">{para.replace("### ", "")}</h3>;
                } else if (para.startsWith("## ")) {
                  return <h2 key={i} className="mt-12 mb-6 font-bold">{para.replace("## ", "")}</h2>;
                } else if (para.startsWith("- ")) {
                  return (
                    <ul key={i} className="list-disc pl-5 mb-6 text-muted-foreground">
                      {para.split("\n").map((item, j) => (
                        <li key={j} dangerouslySetInnerHTML={{__html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}} />
                      ))}
                    </ul>
                  );
                } else {
                  return <p key={i} className="mb-6 leading-relaxed" dangerouslySetInnerHTML={{__html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}} />;
                }
              })}
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <h3 className="font-serif text-2xl font-bold mb-8 text-center">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {related.map(r => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="group bg-card border border-border rounded-sm p-6 transition-all hover:border-primary">
                  <span className="text-xs font-bold text-primary mb-2 block">{r.category}</span>
                  <h4 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">{r.title}</h4>
                  <p className="text-muted-foreground text-sm line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
