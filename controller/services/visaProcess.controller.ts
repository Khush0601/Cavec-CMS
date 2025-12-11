import { Request, Response } from "express";
import { VisaProcess } from "../../model/services/visaProcess.model";

// ================= CREATE VISA PROCESS =================
export const createVisaProcess = async (req: Request, res: Response) => {
  try {
     const {
      mainHeading,
      desc,
      visaProcessCard,
      areaOfWorkCard,
      facility,
      medicalTreatment,
      benefitsOfChoosingUs,
      globalReach
    } = req.body;

    // Create new Visa Process document
    const data = await VisaProcess.create({
      mainHeading,
      desc,
      visaProcessCard,
      areaOfWorkCard,
      facility,
      medicalTreatment,
      benefitsOfChoosingUs,
      globalReach
    });

    return res.status(201).json({
      success: true,
      message: "Visa Process details created successfully",
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// ================= GET VISA PROCESS =================
export const getVisaProcess = async (req: Request, res: Response) => {
  try {
    const data = await VisaProcess.find();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
