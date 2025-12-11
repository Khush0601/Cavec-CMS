import { Request, Response } from "express";
import { ManpowerResource } from "../../model/services/manpowerResource.model";

// Create a new Manpower Resource Consultants entry
export const createManpowerResource = async (req: Request, res: Response) => {
  try {
    const { mainHeading, desc, processCard, presenceCards } = req.body;

    if (!mainHeading || !desc || !processCard || !presenceCards) {
      return res.status(400).json({
        success: false,
        message: "mainHeading, desc, processCard, and presenceCards are required",
      });
    }

    // Create the document
    const newEntry = await ManpowerResource.create({
      mainHeading,
      desc,
      processCard,
      presenceCards,
    });

    return res.status(201).json({
      success: true,
      message: "Manpower Resource Consultants entry created successfully",
      data: newEntry,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// Get all Manpower Resource Consultants entries
export const getManpowerResource = async (req: Request, res: Response) => {
  try {
    const entries = await ManpowerResource.find();

    return res.status(200).json({
      success: true,
      data: entries,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
