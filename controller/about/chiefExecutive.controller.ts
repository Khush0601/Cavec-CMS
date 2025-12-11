import { Request, Response } from "express";
import { CEO } from "../../model/about/chiefExecutive.model";

// CREATE ONLY mainHeading


export const createCEOHeading = async (req: Request, res: Response) => {
  try {
    const { mainHeading } = req.body;

    if (!mainHeading) {
      return res
        .status(400)
        .json({ status: "fail", message: "mainHeading is required" });
    }

    // Since card is an array in schema, keep it empty initially
    const ceo = await CEO.create({
      mainHeading,
      card: []  // <-- REQUIRED for your model
    });

    res.status(201).json({
      status: "success",
      message: "CEO main heading created successfully",
      data: ceo,
    });
  } catch (error) {
    console.error("Error creating CEO heading:", error);
    res.status(500).json({ status: "error", message: "Server Error" });
  }
};


// ADD CARD to CEO Schema
export const addCEOCard = async (req: Request, res: Response) => {
  try {
    const { heading, desc, quote, image } = req.body;

    // Validate required fields
    if (!heading || !desc || !quote || !image) {
      return res.status(400).json({
        status: "fail",
        message: "heading, desc, quote and image fields are required",
      });
    }

    // Find CEO document (only one expected)
    const ceo = await CEO.findOne();
    if (!ceo) {
      return res.status(404).json({
        status: "fail",
        message: "CEO document not found. Create mainHeading first.",
      });
    }

    // Push new card inside array
    ceo.card.push({
      heading,
      desc,
      quote,
      image,
    });

    // Save updated document
    await ceo.save();

    res.status(200).json({
      status: "success",
      message: "Card added successfully",
      data: ceo,
    });
  } catch (error) {
    console.error("Error adding CEO card:", error);
    res.status(500).json({ status: "error", message: "Server Error" });
  }
};




