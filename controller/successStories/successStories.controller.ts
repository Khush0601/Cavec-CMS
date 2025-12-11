import { Request, Response } from "express";
import { SuccessStories } from "../../model/successStories/successStories.model";

// Create a new success story image
export const createSuccessStory = async (req: Request, res: Response) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        success: false,
        message: "Image URL is required",
      });
    }

    const newStory = await SuccessStories.create({ image });

    res.status(201).json({
      success: true,
      message: "Success story created successfully",
      data: newStory,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

// Get all success stories
export const getSuccessStories = async (req: Request, res: Response) => {
  try {
    const stories = await SuccessStories.find();

    if (!stories || stories.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No success stories found",
      });
    }

    res.status(200).json({
      success: true,
      data: stories,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
