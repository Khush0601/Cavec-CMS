import { Request, Response } from "express";
import { CareerOpportunitiesModel } from "../../model/home/careerOpportunities.model";

export const createCareerOpportunity = async (req: Request, res: Response) => {
  try {
    const { heading, subHeading } = req.body;

    // Validate fields
    if (!heading || !subHeading) {
      return res.status(400).json({
        success: false,
        message: "heading and subHeading are required",
      });
    }

    const newCareerOpportunity = await CareerOpportunitiesModel.create({
      heading,
      subHeading,
    });

    res.status(201).json({
      success: true,
      message: "Career opportunity created successfully",
      data: newCareerOpportunity,
    });
  } catch (error: any) {
    console.log("Error creating career opportunity:", error);

    res.status(500).json({
      success: false,
      error: error?.message || "Internal server error",
    });
  }
};

export const getCareerOpportunities = async (req: Request, res: Response) => {
  try {
    const data = await CareerOpportunitiesModel.find();

    if (!data.length) {
      return res.status(404).json({
        success: false,
        message: "No career opportunities found",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.log("Error fetching career opportunities:", error);

    res.status(500).json({
      success: false,
      error: error?.message || "Internal server error",
    });
  }
};