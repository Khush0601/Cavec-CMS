// models/home/founderSection.model.ts
import { Schema, model, Document } from "mongoose";

// Main interface
export interface IFounderSection extends Document {
  mainHeading: string; // new top-level heading for the section
  founderDetails: {
    image: string;
    name: string;
    designation: string;
  };
  heading: string;
  description: string[]; // 2 paragraphs
  features: {
    title: string;
    text: string;
    icon: string;
  }[];
  quote: {
    text: string;
    author: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

// Schema
const FounderSectionSchema = new Schema<IFounderSection>({
  mainHeading: { type: String, required: true }, // new field
  founderDetails: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },
  },
  heading: { type: String, required: true },
  description: { type: [String], required: true }, // array of paragraphs
  features: [
    {
      title: { type: String, required: true },
      text: { type: String, required: true },
      icon: { type: String, required: true },
    }
  ],
  quote: {
    text: { type: String, required: true },
    author: { type: String, required: true },
  }
}, { timestamps: true });


export const FounderSection = model<IFounderSection>("FounderSection", FounderSectionSchema);
