import { Router } from "express";
import { createDownload, getDownloads } from "../../controller/about/download.controller";
import upload from "../../middleware/multer";  

const router = Router();

// Uploading: icon (image) + pdfFile (pdf)
router.post(
  "/create",
  upload.fields([
    { name: "icon", maxCount: 1 },
    { name: "pdfFile", maxCount: 1 }
  ]),
  createDownload
);

// Get all downloads
router.get("/get", getDownloads);

export default router;
