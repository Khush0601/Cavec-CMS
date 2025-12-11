import { Router } from "express";
import upload from "../../middleware/multer";
import { createClientSuccessStory,getAllClientSuccessStories } from "../../controller/home/clientSuccessStories.controller";

const router = Router();

// Upload single PDF + other text fields
router.post("/create",upload.single("pdfFile"),createClientSuccessStory);
router.get("/get", getAllClientSuccessStories);

export default router;
