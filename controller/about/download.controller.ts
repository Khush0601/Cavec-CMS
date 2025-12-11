import { Request, Response } from "express";
import { Download } from "../../model/about/download.model";

export const createDownload = async (req: Request, res: Response) => {
  try {
    const { title, subTitle } = req.body;

    // Uploaded files from multer + cloudinary-storage
    const iconFile = (req.files as any)?.icon?.[0];
    const pdfFile = (req.files as any)?.pdfFile?.[0];

    if (!iconFile || !pdfFile) {
      return res.status(400).json({
        success: false,
        message: "Icon and PDF file are required",
      });
    }

    const newDownload = await Download.create({
      title,
      subTitle,
      icon: iconFile.path,       // Cloudinary URL
      pdfFile: pdfFile.path,     // Cloudinary URL
    });

    return res.status(201).json({
      success: true,
      message: "Download item created successfully",
      data: newDownload,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


export const getDownloads = async (req: Request, res: Response) => {
  try {
    const downloads = await Download.find();

    return res.status(200).json({
      success: true,
      data: downloads,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
