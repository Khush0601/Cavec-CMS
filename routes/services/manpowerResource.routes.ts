import { Router } from "express";
import { createManpowerResource, getManpowerResource } from "../../controller/services/manpowerResource.controller";

const router = Router();

// Create a new Manpower Resource Consultants entry
router.post("/create", createManpowerResource);

// Get all Manpower Resource Consultants entries
router.get("/get", getManpowerResource);

export default router;
