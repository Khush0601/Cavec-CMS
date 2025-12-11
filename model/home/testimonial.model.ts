import { Schema, model, Document } from "mongoose";

export interface ITestimonial extends Document {
  title: string;
  video: {
    title: string;
    subTitle: string;
    videoUrl: string; // Cloudinary URL
  };
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    title: { type: String, required: true },

    video: {
      title: { type: String, required: true },
      subTitle: { type: String, required: true },
      videoUrl: { type: String, required: true }, // saved after upload
    },
  },
  { timestamps: true }
);

export const Testimonial = model<ITestimonial>("Testimonial", TestimonialSchema);
