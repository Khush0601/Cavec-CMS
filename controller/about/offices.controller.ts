// controllers/home/trainingOffice.controller.ts

import { Request, Response } from "express";
import { Office } from "../../model/about/offices.model";

// -------------------------
// CREATE Training Office
// -------------------------
export const createOfficeDetails = async (req: Request, res: Response) => {
  try {
    const { heading, description } = req.body;

    const newOffice = await Office.create({
      heading,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "office details created successfully",
      data: newOffice,
    });
  } catch (error: any) {
    console.error("Create Office Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};


export const updateOfficeDetails=async(req: Request, res: Response)=>{
  try{
    const {  image,locationIcon,state,country,fullAddress,googleMapLink } = req.body;
   
       if (!image || !locationIcon || !state || !country || !fullAddress || ! googleMapLink) {
         return res.status(400).json({
           success: false,
           message: "All fields are required",
         });
       }
       
       const officeDetails = await Office.findOne();
       const imageCardData={
             image,
             locationIcon,
             state,
             country,
             fullAddress,
             googleMapLink
           }
       if(officeDetails){
      officeDetails. officeDetail.push(
           imageCardData
         )
         await officeDetails.save()
       return res.status(201).json({
         success: true,
         message: "office details added successfully",
         data: officeDetails,
       });
       }
       else{
          return res.status(404).json({
         success: false,
         message: "create office details document ",
        
       });
       }
  }
  catch(error:any){
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}
// -------------------------
// GET All Training Office Details
// -------------------------
export const getOfficeDetails = async (req: Request, res: Response) => {
  try {
    const officeData = await Office.find();

    return res.status(200).json({
      success: true,
      data: officeData,
    });
  } catch (error: any) {
    console.error("Get  Office Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
