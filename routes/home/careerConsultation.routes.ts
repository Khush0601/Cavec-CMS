import { Router } from "express";
import { createCareerConsultation, getCareerConsultations } from "../../controller/home/careerConsultation.controller";

const router = Router();


router.post("/create", createCareerConsultation);
router.get("/get", getCareerConsultations);

export default router;
