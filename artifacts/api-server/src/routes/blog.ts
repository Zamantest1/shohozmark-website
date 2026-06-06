import { Router, type IRouter } from "express";
import { db, blogPostsTable } from "@workspace/db";
import { eq, and, desc } from "drizzle-orm";

const router: IRouter = Router();

router.get("/blog", async (req, res): Promise<void> => {
  const { category } = req.query;

  const conditions = [eq(blogPostsTable.published, true)];
  if (typeof category === "string" && category) {
    conditions.push(eq(blogPostsTable.category, category));
  }

  const posts = await db
    .select({
      id: blogPostsTable.id,
      title: blogPostsTable.title,
      slug: blogPostsTable.slug,
      excerpt: blogPostsTable.excerpt,
      author: blogPostsTable.author,
      category: blogPostsTable.category,
      tags: blogPostsTable.tags,
      readTime: blogPostsTable.readTime,
      coverImage: blogPostsTable.coverImage,
      published: blogPostsTable.published,
      publishedAt: blogPostsTable.publishedAt,
    })
    .from(blogPostsTable)
    .where(and(...conditions))
    .orderBy(desc(blogPostsTable.publishedAt));

  res.json(posts);
});

router.get("/blog/:slug", async (req, res): Promise<void> => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;

  const [post] = await db
    .select()
    .from(blogPostsTable)
    .where(and(eq(blogPostsTable.slug, slug), eq(blogPostsTable.published, true)));

  if (!post) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }

  res.json(post);
});

export default router;
