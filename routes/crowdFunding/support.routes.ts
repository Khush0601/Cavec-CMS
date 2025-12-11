import { Router } from "express";
import { createSupport,addSupportCard ,getSupportDetails} from "../../controller/crowdFunding/support.controller";

const router = Router();

// Create Support (heading + desc only)
router.post("/create", createSupport);
router.patch('/add',addSupportCard)
router.get('/get',getSupportDetails)
export default router;
