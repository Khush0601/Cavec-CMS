import { Router } from "express";
import { createFooter, getFooter } from "../../controller/footer/footer.controller";

const router = Router();

router.post("/create", createFooter);
router.get("/get", getFooter);

export default router;
