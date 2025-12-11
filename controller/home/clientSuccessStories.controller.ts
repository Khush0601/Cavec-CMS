import { Request, Response } from "express";
import { ClientSuccessStory } from "../../model/home/clientSuccessStories.model";

export const createClientSuccessStory = async (req: Request, res: Response) => {
  try {
    const { title, subTitle, recommendationLetter } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "PDF file is required" });
    }

    if (!title || !subTitle || !recommendationLetter) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Parse recommendationLetter JSON string from form-data
    let recommendationData;
    if (typeof recommendationLetter === "string") {
      try {
        recommendationData = JSON.parse(recommendationLetter);
      } catch (err) {
        return res.status(400).json({ message: "Invalid JSON for recommendationLetter" });
      }
    } else {
      recommendationData = recommendationLetter;
    }
    // Attach PDF URL from multer
    recommendationData.pdfFile = (req.file as any).path;
       console.log(req.file.path)
    // Save to DB
    const newStory = await ClientSuccessStory.create({
      title,
      subTitle,
      recommendationLetter: recommendationData, 
    });


    return res.status(201).json({
      message: "Client Success Story created successfully",
      data: newStory,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error creating story",
      error: error.message,
    });
  }
};



export const getAllClientSuccessStories = async (req: Request, res: Response) => {
  try {
    const stories = await ClientSuccessStory.find()
    return res.status(200).json({
      message: "Client Success Stories fetched successfully",
      data: stories,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error fetching stories",
      error: error.message,
    });
  }
};

