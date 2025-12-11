import { Router } from "express";
import { createOurServicesHero, getOurServicesHero, } from "../../controller/services/ourServicesHero.controller";

const router = Router();

// Create a new hero section
router.post("/create", createOurServicesHero);

// Get the hero section
router.get("/get", getOurServicesHero);

export default router;
