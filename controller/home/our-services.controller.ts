import { Request, Response } from "express";
import OurServicesModel from "../../model/home/our-services.model";

// POST /our-services
export const createOurServices = async (req: Request, res: Response) => {
  try {
    const { mainHeading, description} = req.body;

    if (!mainHeading || !description) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newService = await OurServicesModel.create({
      mainHeading,
      description,
     
    });

    return res.status(201).json({
      message: "Our Services created successfully",
      data: newService,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", error });
  }
};

export const updateOurServices=async(req: Request, res: Response)=>{
  try{
   const {heading,subHeading,points}=req.body;
     if(!heading ||!subHeading || ! points){
          return res.status(400).json({
           success: false,
           message: "headings, Subheading and  points details are required ",
         });
     }
     const ourServices=await OurServicesModel.findOne()
     const cardData={
       heading,
       subHeading,
       points: Array.isArray(points) ? points : JSON.parse(points),
     }
     if(ourServices){
       ourServices.services.push(cardData)
        await ourServices.save()
        return res.status(400).json({
           success: true,
           message: "ourServicesCards created successfully",
           data:ourServices
         });
     }
     else{
        return res.status(404).json({
         success: false,
         message: "create our Services  first ",
         
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


export const getAllOurServices = async (req: Request, res: Response) => {
  try {
    const services = await OurServicesModel.find().sort({ createdAt: -1 }); 

    return res.status(200).json({
      message: "Our Services fetched successfully",
      data: services,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Server error while fetching services",
      error: error.message,
    });
  }
};