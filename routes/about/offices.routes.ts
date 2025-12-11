// routes/home/trainingOffice.routes.ts

import { Router } from "express";
import {
  createOfficeDetails,
  getOfficeDetails,
  updateOfficeDetails
} from "../../controller/about/offices.controller";

const router = Router();

router.post("/create", createOfficeDetails);
router.patch('/update',updateOfficeDetails)
router.get("/get", getOfficeDetails);

export default router;
