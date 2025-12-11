import { Router } from "express";
import { createIndustriesCategories, getIndustriesCategories,updateIndustriesCategories } from "../../controller/services/industriesCategories.controller";

const router = Router();

// Create a new Industries & Categories entry
router.post("/create", createIndustriesCategories);
router.patch('/update',updateIndustriesCategories)
// Get all Industries & Categories entries
router.get("/get", getIndustriesCategories);

export default router;
