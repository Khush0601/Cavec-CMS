import { Request, Response } from "express";
import { RecruitmentProcess } from "../../model/job/recruitment.model";

// 1️⃣ Create Recruitment Process Section
export const createRecruitmentProcess = async (req: Request, res: Response) => {
  try {
    const { icon, heading, subHeading, quote, desc } = req.body;

    if (!icon || !heading || !subHeading || !quote || !desc) {
      return res.status(400).json({
        status: "fail",
        message: "icon, heading, subHeading, quote and desc are required",
      });
    }

    const process = await RecruitmentProcess.create({
      icon,
      heading,
      subHeading,
      quote,
      desc,
      steps: [], 
    });

    res.status(201).json({
      status: "success",
      message: "Recruitment process created successfully",
      data: process,
    });
  } catch (error) {
    console.error("Error creating recruitment process:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 2️⃣ Add Step to Existing Recruitment Process (single document)
export const addStepToRecruitmentProcess = async (req: Request, res: Response) => {
  try {
    const { icon, title, points } = req.body;

    if (!icon || !title || !points ) {
      return res.status(400).json({
        status: "fail",
        message: "icon, title and points (array) are required",
      });
    }

    // Find the first recruitment process document
    const process = await RecruitmentProcess.findOne();
    if (!process) {
      return res.status(404).json({ status: "fail", message: "Recruitment process not found" });
    }

    process.steps.push({ icon, title, points });
    await process.save();

    res.status(200).json({
      status: "success",
      message: "Step added successfully",
      data: process,
    });
  } catch (error) {
    console.error("Error adding step:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
};
