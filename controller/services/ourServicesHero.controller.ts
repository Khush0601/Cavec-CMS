import { Request, Response } from "express";
import { OurServicesHero } from "../../model/services/ourServicesHero.model";

// Create Hero Section
export const createOurServicesHero = async (req: Request, res: Response) => {
  try {
    const { heading, description } = req.body;

    if (!heading || !description) {
      return res.status(400).json({
        success: false,
        message: "Heading and description are required",
      });
    }

    const hero = await OurServicesHero.create({ heading, description });

    return res.status(201).json({
      success: true,
      message: "Our Services Hero created successfully",
      data: hero,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// Get Hero Section
export const getOurServicesHero = async (req: Request, res: Response) => {
  try {
    const hero = await OurServicesHero.findOne();

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Our Services Hero not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: hero,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
