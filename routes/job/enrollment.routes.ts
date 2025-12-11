import express from "express";
import { createEnrollment } from "../../controller/job/enrollment.controller";

const router = express.Router();


router.post("/create", createEnrollment);

// Future routes (examples):
// router.get("/", getEnrollment);
// router.put("/enrollmentCard", updateEnrollmentCard);
// router.put("/securityCard", updateSecurityCard);
// router.put("/legalRequirementsCards", updateLegalCard);

export default router;
