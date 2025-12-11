import { Router } from "express";
import { createHeroSection,getHeroSection} from "../../controller/home/hero-section.controller";

const router = Router();

// POST → Create Hero Section
router.post("/create", createHeroSection);

// // GET → Get Hero Section
router.get("/get", getHeroSection);

export default router;
