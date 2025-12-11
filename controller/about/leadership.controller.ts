import { Request, Response } from "express";
import { Leadership } from "../../model/about/leadership.model";

export const createLeadershipSection = async (req: Request, res: Response) => {
  try {
    const { heading, desc } = req.body;

    if (!heading || !desc) {
      return res.status(400).json({
        status: "fail",
        message: "Both heading and desc are required",

      });
    }

    const leadership = await Leadership.create({
      heading,
      desc,
      teamCard: [], 
    });

    res.status(201).json({
      status: "success",
      message: "Leadership section created successfully",
      data: leadership,
    });
  } catch (error) {
    console.error("Error creating Leadership section:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};


export const addTeamCard = async (req: Request, res: Response) => {
  try {
    const { image, name, designation, desc } = req.body;

    // Validate required fields
    if (!image || !name || !designation || !desc) {
      return res.status(400).json({
        status: "fail",
        message: "image, name, designation, and desc are required",

      });
    }
    // Find the Leadership section (only one expected)
    const leadership = await Leadership.findOne();
    if (!leadership) {
      return res.status(404).json({
        status: "fail",
        message: "Leadership section not found. Create heading first.",
        
      });
    }

    // Push new teamCard into array
    leadership.teamCard.push({
      image,
      name,
      designation,
      desc,
    });

    // Save updated document
    await leadership.save();

    res.status(200).json({
      status: "success",
      message: "Team card added successfully",
      data: leadership,
    });
  } catch (error) {
    console.error("Error adding team card:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
