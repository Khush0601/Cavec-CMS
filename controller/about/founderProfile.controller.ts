// controllers/home/founderSection.controller.ts
import { Request, Response } from "express";
import { FounderSection, IFounderSection } from "../../model/about/founderProfile";

// Create a new FounderSection
export const createFounderSection = async (req: Request, res: Response) => {
  try {
    const { mainHeading, founderDetails, heading, description, features, quote } = req.body;

    // Basic validation
    if (
      !mainHeading ||
      !founderDetails?.image ||
      !founderDetails?.name ||
      !founderDetails?.designation ||
      !heading ||
      !description ||
      description.length !== 2 || // expecting 2 paragraphs
      !features ||
      features.length === 0 ||
      !quote?.text ||
      !quote?.author
    ) {
      return res.status(400).json({ message: "All fields are required and must be correctly filled." });
    }

    const founderSection: IFounderSection = new FounderSection({
      mainHeading,
      founderDetails,
      heading,
      description,
      features,
      quote,
    });

    const savedFounderSection = await founderSection.save();
    res.status(201).json(savedFounderSection);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all FounderSections
export const getFounderSections = async (req: Request, res: Response) => {
  try {
    const founderSections = await FounderSection.find();
    res.status(200).json(founderSections);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
