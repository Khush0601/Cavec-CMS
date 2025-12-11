import { Router } from "express";
import { addOrUpdateAchievementStat ,getAchievementStats} from "../../controller/crowdFunding/Achievement.controller";

const router = Router();

// POST → Add a stat (creates the document if it doesn't exist)
router.post("/add", addOrUpdateAchievementStat);

// GET → Get all achievement stats
router.get("/get", getAchievementStats);

export default router;
