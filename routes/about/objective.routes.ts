// routes/home/objectives.routes.ts
import { Router } from "express";
import { createObjectives, getObjectives } from "../../controller/about/objective.controller";

const router = Router();

// Create a new Objectives document
router.post("/create", createObjectives);

// Get all Objectives
router.get("/get", getObjectives);

export default router;
