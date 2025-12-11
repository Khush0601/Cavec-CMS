import { Request, Response } from "express";
import { Support } from "../../model/crowdFunding/support.model";

export const createSupport = async (req: Request, res: Response) => {
  try {
    const { heading, desc } = req.body;

    if (!heading || !desc) {
      return res.status(400).json({
        success: false,
        message: "heading and desc are required",
      });
    }

    const support = await Support.create({
      heading,
      desc,
      supportCards: [],
    });

    res.status(201).json({
      success: true,
      message: "Support section created successfully",
      data: support,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const addSupportCard = async (req: Request, res: Response) => {
  try {
    const { icon, heading, desc } = req.body;

    if (!icon || !heading || !desc) {
      return res.status(400).json({
        success: false,
        message: "icon, heading, and desc are required",
      });
    }

    // Find the single support document
    const support = await Support.findOne();

    if (!support) {
      return res.status(404).json({
        success: false,
        message: "Support document not found. Create support first.",
      });
    }

    // Push new card into array
    support.supportCards.push({
      icon,
      heading,
      desc,
    });

    await support.save();

    res.status(200).json({
      success: true,
      message: "Support card added successfully",
      data: support,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getSupportDetails = async (req: Request, res: Response) => {
  try {
    const support = await Support.find(); 
    if (!support) {
      return res.status(404).json({
        success: false,
        message: "No Support details found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Support details fetched successfully",
      data: support,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

