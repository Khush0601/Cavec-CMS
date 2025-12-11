import express from "express";
import { createLeadershipSection } from "../../controller/about/leadership.controller";
import { addTeamCard } from "../../controller/about/leadership.controller";

const router = express.Router();

// Create Leadership section (heading + desc)
router.post("/create", createLeadershipSection);

// Add a teamCard to Leadership section
router.post("/add", addTeamCard);

export default router;
