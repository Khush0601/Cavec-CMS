// controllers/home/objectives.controller.ts
import { Request, Response } from "express";
import { Objectives, IObjectives } from "../../model/about/objectives.model";

// Create a new Objectives document
export const createObjectives = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    // Validation
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const objectives: IObjectives = new Objectives({
      title,
      description,
    });

    const savedObjectives = await objectives.save();
    res.status(201).json(savedObjectives);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Objectives
export const getObjectives = async (req: Request, res: Response) => {
  try {
    const objectives = await Objectives.find();
    res.status(200).json(objectives);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
