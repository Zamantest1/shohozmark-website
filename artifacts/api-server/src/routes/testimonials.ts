import { Router, type IRouter } from "express";
import { db, testimonialsTable } from "@workspace/db";
import { eq, desc } from "drizzle-orm";

const router: IRouter = Router();

router.get("/testimonials", async (req, res): Promise<void> => {
  const { featured } = req.query;

  const items = featured === "true"
    ? await db.select().from(testimonialsTable).where(eq(testimonialsTable.featured, true)).orderBy(desc(testimonialsTable.createdAt))
    : await db.select().from(testimonialsTable).orderBy(desc(testimonialsTable.createdAt));

  res.json(items);
});

export default router;
