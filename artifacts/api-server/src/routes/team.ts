import { Router, type IRouter } from "express";
import { db, teamMembersTable } from "@workspace/db";
import { asc, eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/team", async (req, res): Promise<void> => {
  const members = await db
    .select()
    .from(teamMembersTable)
    .where(eq(teamMembersTable.isActive, true))
    .orderBy(asc(teamMembersTable.orderIndex));

  res.json(members);
});

export default router;
