import express from "express";
import { createOurServices ,getAllOurServices,updateOurServices} from "../../controller/home/our-services.controller";

const router = express.Router();

// POST route to create OurServices
router.post("/create", createOurServices);
router.patch("/update", updateOurServices)
router.get("/get", getAllOurServices);

export default router;