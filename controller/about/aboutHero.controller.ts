// controllers/home/heroSection.controller.ts
import { Request, Response } from "express";
import { HeroSection, IAboutHero } from "../../model/about/aboutHero.model";

// Create a new HeroSection
export const createAboutHero = async (req: Request, res: Response) => {
  try {
    const { heading, subHeading, storyHeading, description, imageUrls } = req.body;

    // Basic validation
    if (!heading || !subHeading || !storyHeading || !description || !imageUrls) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const heroSection:IAboutHero= new HeroSection({
      heading,
      subHeading,
      storyHeading,
      description,
      imageUrls,
    });

    const savedHeroSection = await heroSection.save();
    res.status(201).json(savedHeroSection);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all HeroSections (usually only one, but scalable)
export const getAboutHero = async (req: Request, res: Response) => {
  try {
    const heroSections = await HeroSection.find();
    res.status(200).json(heroSections);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
