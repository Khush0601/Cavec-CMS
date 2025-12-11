import { Schema, model, Document } from "mongoose";

// Nested Interface for Recommendation Letter
interface IRecommendationLetter {
  pdfIcon: string;      // URL or icon name
  heading: string;
  subHeading: string;
  year: number;
  desc: string;
  pdfFile: string;      // Cloudinary URL
}

// Main Interface
export interface IClientSuccessStory extends Document {
  title: string;
  subTitle: string;
  recommendationLetter: IRecommendationLetter;
  createdAt: Date;
  updatedAt: Date;
}

// Schema for Recommendation Letter
const RecommendationLetterSchema = new Schema<IRecommendationLetter>(
  {
    pdfIcon: { type: String, required: true },
    heading: { type: String, required: true },
    subHeading: { type: String, required: true },
    year: { type: Number, required: true },
    desc: { type: String, required: true },
    pdfFile: { type: String, required: true },
  },
  { _id: false } // prevents separate _id for nested object
);

// Main Schema
const ClientSuccessStorySchema = new Schema<IClientSuccessStory>(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    recommendationLetter: { type: RecommendationLetterSchema, required: true },
  },
  { timestamps: true }
);

// Export Model
export const ClientSuccessStory = model<IClientSuccessStory>(
  "ClientSuccessStory",
  ClientSuccessStorySchema
);
