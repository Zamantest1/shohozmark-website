import { Router, type IRouter } from "express";
import { db, contactSubmissionsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, phone, businessName, serviceInterest, message } = parsed.data;

  const [submission] = await db
    .insert(contactSubmissionsTable)
    .values({ name, email, phone: phone ?? null, businessName: businessName ?? null, serviceInterest: serviceInterest ?? null, message })
    .returning();

  if (!submission) {
    res.status(500).json({ error: "Failed to save submission" });
    return;
  }

  req.log.info({ submissionId: submission.id }, "Contact form submitted");

  res.status(201).json({ id: submission.id, message: "Thank you! We'll be in touch within 24 hours." });
});

export default router;
