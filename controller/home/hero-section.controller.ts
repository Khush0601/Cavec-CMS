import { Request, Response } from "express";
import { HeroSection } from "../../model/home/hero-section.model";

// CREATE / POST Hero Section Data
export const createHeroSection = async (req: Request, res: Response) => {
  try {
    const { smallHeading, mainHeading, subHeading, highlights, images } = req.body;

    // Validation
    if (!smallHeading || !mainHeading || !subHeading || !highlights || !images) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!Array.isArray(highlights)) {
      return res.status(400).json({
        success: false,
        message: "Highlights must be an array of strings",
      });
    }

    if (!Array.isArray(images) || images.length !== 4) {
      return res.status(400).json({
        success: false,
        message: "Exactly 4 images are required",
      });
    }

    // Create entry
    const newHeroSection = await HeroSection.create({
      smallHeading,
      mainHeading,
      subHeading,
      highlights,
      images,
    });

    return res.status(201).json({
      success: true,
      message: "Hero Section created successfully",
      data: newHeroSection,
    });

  } catch (error) {
    console.error("Error creating Hero Section:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while posting Hero Section data",
    });
  }
};



export const getHeroSection = async (req: Request, res: Response) => {
  try {
    const data = await HeroSection.find();

    if (!data.length) {
      return res.status(404).json({
        success: false,
        message: "No hero section data found",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error:any) {
    console.log(error)

    res.status(500).json({
      success: false,
      error:error.message
    });
  }
};
