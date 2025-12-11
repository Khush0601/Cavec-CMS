import { Router } from "express";
import { createInfoCard, getInfoCards } from "../../controller/about/infoCard.controller";

const router = Router();

// Create a new InfoCard
router.post("/create", createInfoCard);

// Get all InfoCards
router.get("/get", getInfoCards);

export default router;