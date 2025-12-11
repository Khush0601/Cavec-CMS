import { Request, Response } from "express";
import { IndustriesCategories } from "../../model/services/industriesCategories.model";

// Create a new Industries & Categories entry
export const createIndustriesCategories = async (req: Request, res: Response) => {
  try {
    const { mainHeading, desc} = req.body;

    if (!mainHeading || !desc ) {
      return res.status(400).json({
        success: false,
        message: "mainHeading, desc details are required",
      });
    }

    // Directly use cards array from req.body
    const newEntry = await IndustriesCategories.create({
      mainHeading,
      desc,
     
    });

    return res.status(201).json({
      success: true,
      message: "Industries & Categories entry created successfully",
      data: newEntry,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};



export const updateIndustriesCategories=async(req:Request,res:Response)=>{
  try{
    const {heading,points}=req.body;
  if(!heading || ! points){
       return res.status(400).json({
        success: false,
        message: "headings and points details are required ",
      });
  }
  const industry=await IndustriesCategories.findOne()
  const cardData={
    heading,
    points: Array.isArray(points) ? points : JSON.parse(points),
  }
  if(industry){
    industry.cards.push(cardData)
     await industry.save()
     return res.status(400).json({
        success: true,
        message: "industryCards created successfully",
        data:industry
      });
  }
  else{
     return res.status(404).json({
      success: false,
      message: "create Industry first ",
      
    });
  }
  }
  catch(error:any){
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}



// Get all Industries & Categories entries
export const getIndustriesCategories = async (req: Request, res: Response) => {
  try {
    const entries = await IndustriesCategories.find();

    return res.status(200).json({
      success: true,
      data: entries,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
