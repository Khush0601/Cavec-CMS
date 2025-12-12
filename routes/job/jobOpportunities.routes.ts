import express from "express";
import { 
  createJobOpportunities,
  addJobCategoryToOpportunities,
 
} from "../../controller/job/jobOpportunities.controller";

const router = express.Router();

router.post("/create", createJobOpportunities);

router.post("/add", addJobCategoryToOpportunities);
// router.get("/:id")

export default router;
