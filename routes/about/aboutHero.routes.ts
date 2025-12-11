// routes/home/heroSection.routes.ts
import { Router } from "express";
import { createAboutHero, getAboutHero } from "../../controller/about/aboutHero.controller";

const router = Router();

// Route to create a new hero section
router.post("/create", createAboutHero);

// Route to get all hero sections
router.get("/get", getAboutHero);

export default router;
