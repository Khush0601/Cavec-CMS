import express from "express";
import { createJob ,getJob,getJobById} from "../../controller/job/job.controller";

const router = express.Router();

// Create a new Job
router.post("/create", createJob);
router.get('/getAll',getJob)
router.get("/:id", getJobById);

export default router;
