import { Request, Response } from "express";
import LicenseModel from "../../model/home/license.model";

export const createLicense = async (req: Request, res: Response) => {
  try {
    const { heading } = req.body;

    if (!heading) {
      return res.status(400).json({ message: "Heading is  required." });
    }

    const license = await LicenseModel.create({ heading});

    return res.status(201).json({
      message: "License created successfully",
      data: license,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

export const updateLicenses=async(req: Request, res: Response)=>{
  try{
   const {images}=req.body;
     if(!images){
          return res.status(400).json({
           success: false,
           message: "image is required ",
         });
     }
     const licenses=await LicenseModel.findOne()
     if(licenses){
      licenses.image.push(images)
        await licenses.save()
        return res.status(400).json({
           success: true,
           message: "images added successfully",
           data:images
         });
     }
     else{
        return res.status(404).json({
         success: false,
         message: "create Image section first ",
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

export const getLicenses = async (req: Request, res: Response) => {
  try {
    const licenses = await LicenseModel.find();
    return res.status(200).json({ data: licenses });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
