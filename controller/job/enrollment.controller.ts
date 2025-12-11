

import { Request, Response } from "express";
import { Enrollment } from "../../model/job/enrollment.model";

// Create Enrollment Section
export const createEnrollment = async (req: Request, res: Response) => {
  try {
    const {
      icon,
      heading,
      desc,
      enrollmentCard,
      securityCard,
      legalRequirementsCards,
    } = req.body;

    // Basic validation
    if (
      !icon ||
      !heading ||
      !desc ||
      !enrollmentCard ||
      !securityCard ||
      !legalRequirementsCards
    ) {
      return res.status(400).json({
        status: "fail",
        message: "All fields are required",
      });
    }

    // Create Enrollment Document
    const enrollment = await Enrollment.create({
      icon,
      heading,
      desc,
      enrollmentCard,
      securityCard,
      legalRequirementsCards,
    });

    res.status(201).json({
      status: "success",
      message: "Enrollment section created successfully",
      data: enrollment,
    });
  } catch (error) {
    console.error("Error creating enrollment section:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
};

