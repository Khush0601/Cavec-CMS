import { Request, Response } from "express";
import cloudinary from "../../configs/cloudinary";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    // File not received
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto", // auto = pdf, image, video supported
      folder: "uploads",     // Cloudinary folder
    });

    return res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Error uploading file",
      error: error.message,
    });
  }
};
