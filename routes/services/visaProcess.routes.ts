import { Router } from "express";
import { createVisaProcess, getVisaProcess } from "../../controller/services/visaProcess.controller";

const router = Router();

// Create a new Visa Process entry
router.post("/create", createVisaProcess);

// Get all Visa Process entries
router.get("/get", getVisaProcess);

export default router;