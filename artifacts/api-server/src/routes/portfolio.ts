import { Router, type IRouter } from "express";
import { db, portfolioItemsTable } from "@workspace/db";
import { eq, and, desc } from "drizzle-orm";

const router: IRouter = Router();

router.get("/portfolio", async (req, res): Promise<void> => {
  const { featured, industry } = req.query;

  const conditions = [eq(portfolioItemsTable.published, true)];

  if (featured === "true") {
    conditions.push(eq(portfolioItemsTable.featured, true));
  }
  if (typeof industry === "string" && industry) {
    conditions.push(eq(portfolioItemsTable.industry, industry));
  }

  const items = await db
    .select()
    .from(portfolioItemsTable)
    .where(and(...conditions))
    .orderBy(desc(portfolioItemsTable.publishedAt));

  res.json(items);
});

router.get("/portfolio/:slug", async (req, res): Promise<void> => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;

  const [item] = await db
    .select()
    .from(portfolioItemsTable)
    .where(and(eq(portfolioItemsTable.slug, slug), eq(portfolioItemsTable.published, true)));

  if (!item) {
    res.status(404).json({ error: "Portfolio item not found" });
    return;
  }

  res.json(item);
});

export default router;
