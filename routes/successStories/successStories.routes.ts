import { Router } from "express";
import { createSuccessStory, getSuccessStories } from "../../controller/successStories/successStories.controller";

const router = Router();

router.post("/create", createSuccessStory);
router.get("/get", getSuccessStories);

export default router;
