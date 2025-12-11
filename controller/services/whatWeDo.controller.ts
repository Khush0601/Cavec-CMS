import { Request, Response } from "express";
import { WhatWeDo } from "../../model/services/whatWeDo.model";
import cloudinary from "../../configs/cloudinary"; 

// Create a single-card WhatWeDo section
export const createWhatWeDo = async (req: Request, res: Response) => {
  try {
    const { mainHeading } = req.body;

    if (!mainHeading) {
      return res.status(400).json({
        success: false,
        message: "mainHeading required "
      });
    }

    // Create document with a single card
    const newWhatWeDo = await WhatWeDo.create({
      mainHeading,
      cards: [],
    });

    return res.status(201).json({
      success: true,
      message: "What We Do section created successfully",
      data: newWhatWeDo,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};



export const updateWhatWeDo = async (req: Request, res: Response) => {
  try {
    const {  heading, subHeading, desc, points } = req.body;

    if (!heading || !subHeading || !desc || !points) {
      return res.status(400).json({
        success: false,
        message: "All fields (heading, subHeading, desc, points) are required",
      });
    }

    const iconFile = (req.file as any); // single file upload
    if (!iconFile) {
      return res.status(400).json({
        success: false,
        message: "Icon image is required",
      });
    }

    // Upload icon to Cloudinary inside "images/whatWeDo"
    const uploadResult = await cloudinary.uploader.upload(iconFile.path, {
      folder: "images/whatWeDo",
    });
    
    const newWhatWeDo = await WhatWeDo.findOne();
    const cardData={
          iconImage: uploadResult.secure_url,
          heading,
          subHeading,
          desc,
          points: Array.isArray(points) ? points : JSON.parse(points), // parse if sent as string
        }
    if(newWhatWeDo){
    newWhatWeDo.cards.push(
        cardData
      )
      await newWhatWeDo.save()
    return res.status(201).json({
      success: true,
      message: "what We Do Card added successfully",
      data: cardData,
    });
    }
    else{
       return res.status(404).json({
      success: false,
      message: "create What We do document ",
     
    });
    }
    
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// Get all WhatWeDo sections
export const getWhatWeDo = async (req: Request, res: Response) => {
  try {
    const whatWeDo = await WhatWeDo.find();

    return res.status(200).json({
      success: true,
      data: whatWeDo,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
