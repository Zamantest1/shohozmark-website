import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import teamRouter from "./team";
import portfolioRouter from "./portfolio";
import testimonialsRouter from "./testimonials";
import blogRouter from "./blog";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(teamRouter);
router.use(portfolioRouter);
router.use(testimonialsRouter);
router.use(blogRouter);

export default router;
