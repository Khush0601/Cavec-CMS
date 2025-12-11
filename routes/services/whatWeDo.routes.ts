import { Router } from "express";
import { createWhatWeDo, getWhatWeDo, updateWhatWeDo } from "../../controller/services/whatWeDo.controller";
import upload from "../../middleware/multer";

const router = Router();

// Create WhatWeDo section (single card with icon image)
router.post("/create", upload.single("iconImage"), createWhatWeDo);
router.patch('/update',upload.single("iconImage"),updateWhatWeDo )
// Get all WhatWeDo sections
router.get("/get", getWhatWeDo);

export default router;
