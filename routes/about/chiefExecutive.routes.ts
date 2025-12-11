import express from "express";
import { createCEOHeading } from "../../controller/about/chiefExecutive.controller";
import { addCEOCard } from "../../controller/about/chiefExecutive.controller";

const router = express.Router();

// CREATE mainHeading
router.post("/create", createCEOHeading);

// ADD a card into CEO schema
router.post("/add", addCEOCard);

export default router;
