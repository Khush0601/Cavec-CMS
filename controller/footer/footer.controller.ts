import { Request, Response } from "express";
import FooterModel from "../../model/footer/footer.model";

// Create Footer
export const createFooter = async (req: Request, res: Response) => {
  try {
    const { appIcon, description, buttonText, quickLinks, contactInfo } = req.body;

    if (!appIcon || !description || !buttonText || !quickLinks || !contactInfo) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create new footer document
    const newFooter = await FooterModel.create({
      appIcon,
      description,
      buttonText,
      quickLinks,
      contactInfo,
    });

    return res.status(201).json({
      message: "Footer created successfully",
      data: newFooter,
    });
  } catch (error) {
    console.error("Error creating footer:", error);
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

// Get Footer
export const getFooter = async (req: Request, res: Response) => {
  try {
    const footer = await FooterModel.findOne(); 

    if (!footer) {
      return res.status(404).json({ message: "Footer not found" });
    }

    return res.status(200).json({
      message: "Footer fetched successfully",
      data: footer,
    });
  } catch (error) {
    console.error("Error fetching footer:", error);
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};
