import { Router } from "express";
import { createCareerOpportunity ,getCareerOpportunities} from "../../controller/home/careerOpportunities.controller";

const router = Router();

// POST → Create a Career Opportunity
router.post("/create", createCareerOpportunity);
router.get("/get", getCareerOpportunities);
export default router;
