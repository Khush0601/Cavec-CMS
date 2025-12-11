import { Request, Response } from "express";
import { Testimonial } from "../../model/home/testimonial.model";

export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const { title, video } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Video file is required" });
    }
    
    // Parse JSON string
    const videoData = JSON.parse(video);

    const newTestimonial = new Testimonial({
      title,
      video: {
        title: videoData.title,
        subTitle: videoData.subTitle,
        videoUrl: req.file.path, // Cloudinary URL
      },
    });

    await newTestimonial.save();

    res.status(201).json({
      message: "Testimonial created successfully",
      data: newTestimonial,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error creating testimonial",
      error: error.message,
    });
  }
};

export const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 }); 

    return res.status(200).json({
      message: "Testimonials fetched successfully",
      data: testimonials,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Server error while fetching testimonials",
      error: error.message,
    });
  }
};


