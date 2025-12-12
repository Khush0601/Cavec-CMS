import { Request, Response } from "express";
import { JobCategory}  from "../../model/job/jobCategory.model";

// 1️⃣ Create a new Job Opportunity
export const createJobCategory = async (req: Request, res: Response) => {
  try {
    const { 
      icon,
      title,
      availablePosition,
      shiftType,
      countryOffering,
      compare
    } = req.body;

    // Validation
    if (!icon || !title || !availablePosition || !shiftType || !countryOffering) {
      return res.status(400).json({
        status: "fail",
        message: "icon, title, availablePosition, shiftType and countryOffering are required",
      });
    }

    // Create job opportunity
    const jobCategory = await JobCategory.create({
      icon,
      title,
      availablePosition,
      shiftType,
      countryOffering,
      compare,
    });

    res.status(201).json({
      status: "success",
      message: "Job Category created successfully",
      data: jobCategory,
    });

  } catch (error) {
    console.error("Error creating Job Category:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
};

