import express from "express";
import upload from "../../middleware/multer";
import { uploadFile } from "../../controller/uploads/uploads.controller";

const router = express.Router();

router.post("/file", upload.single("file"), uploadFile);

export default router;