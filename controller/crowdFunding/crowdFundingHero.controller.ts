import { Request, Response } from "express";
import { CrowdFundingHero } from "../../model/crowdFunding/crowdFundingHero.model";

export const createCrowdFundingHero = async (req: Request, res: Response) => {
  try {
    const { heading, description } = req.body;

    // Validation
    if (!heading || !description) {
      return res.status(400).json({
        success: false,
        message: "heading and description are required",
      });
    }

    const newData = await CrowdFundingHero.create({
      heading,
      description
    });

    return res.status(201).json({
      success: true,
      message: "CrowdFundingHero created successfully",
      data: newData,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const getCrowdFundingHero = async (req: Request, res: Response) => {
  try {
    const data = await CrowdFundingHero.find();

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No CrowdFundingHero data found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
