import { Router } from "express";
import { createLicense, getLicenses,updateLicenses} from "../../controller/home/license.controller";

const router = Router();

router.post("/create", createLicense);
router.patch("/update", updateLicenses);
router.get("/get" , getLicenses);

export default router;
