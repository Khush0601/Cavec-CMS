import { Router } from "express";
import { createWhyChooseCavec ,updateWhyChooseCavec} from "../../controller/services/whyChooseCavec.controller";

const router = Router();

// POST → Create WhyChooseCavec (Services Section)
router.post("/create", createWhyChooseCavec);
router.patch("/update",updateWhyChooseCavec)
export default router;
