import { Router } from "express";
import { createCrowdFundingHero ,getCrowdFundingHero} from "../../controller/crowdFunding/crowdFundingHero.controller";

const router = Router();

// POST → Create CrowdFundingHero section
router.post("/create", createCrowdFundingHero);
router.get("/get",getCrowdFundingHero)
export default router;
