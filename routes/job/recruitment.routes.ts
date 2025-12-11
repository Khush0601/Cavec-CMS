import express from "express";
import {
  createRecruitmentProcess,
  addStepToRecruitmentProcess,
} from "../../controller/job/recruitment.controller";

const router = express.Router();

// Create Recruitment Process Section
router.post("/create", createRecruitmentProcess);

// Add Steps to Existing Recruitment Process (single document)
router.post("/add", addStepToRecruitmentProcess);

export default router;
