import express from "express";
import upload from "../../middleware/multer";
import { createTestimonial ,getAllTestimonials} from "../../controller/home/testimonial.controller";

const router = express.Router();

// POST: create testimonial with video upload
router.post("/create", upload.single("videoFile"), createTestimonial);
router.get("/get", getAllTestimonials)
export default router;
