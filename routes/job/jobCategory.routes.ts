import { Router } from "express";
import { 
  createJobCategory, 
} from "../../controller/job/jobCategory.controller";

const router = Router();

// Route to create a new job opportunity
router.post("/create", createJobCategory);



export default router;
