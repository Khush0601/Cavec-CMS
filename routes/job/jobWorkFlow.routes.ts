import express from "express";
import { createJobWorkflowSection, addJobWorkflowStep } from "../../controller/job/jobWorkFlow.controller";

const router = express.Router();

router.post("/create", createJobWorkflowSection);
router.post("/add", addJobWorkflowStep);

export default router;
