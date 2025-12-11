// routes/home/founderSection.routes.ts
import { Router } from "express";
import { createFounderSection, getFounderSections } from "../../controller/about/founderProfile.controller";

const router = Router();

// Create a new FounderSection
router.post("/create", createFounderSection);

// Get all FounderSections
router.get("/get", getFounderSections);

export default router;
