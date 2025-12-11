import { Request, Response } from "express";
import { CareerConsultation } from "../../model/home/careerConsultation.model";

// CREATE Career Consultation Section
export const createCareerConsultation = async (req: Request, res: Response) => {
  try {
    const { heading, subHeading, buttonText } = req.body;

    if (!heading || !subHeading || !buttonText) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newSection = await CareerConsultation.create({
      heading,
      subHeading,
      buttonText,
    });

    return res.status(201).json({
      message: "Career Consultation section created successfully",
      data: newSection,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Server error while creating section",
      error: error.message,
    });
  }
};

// GET all Career Consultation Sections
export const getCareerConsultations = async (req: Request, res: Response) => {
  try {
    const sections = await CareerConsultation.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Career Consultation sections fetched successfully",
      data: sections,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Server error while fetching sections",
      error: error.message,
    });
  }
};
