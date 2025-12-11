import express from "express";
import { createJob } from "../../controller/job/job.controller";

const router = express.Router();

// Create a new Job
router.post("/create", createJob);


export default router;
