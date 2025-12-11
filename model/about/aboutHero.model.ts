// models/home/heroSection.model.ts
import { Schema, model, Document } from "mongoose";

// Define a TypeScript interface for HeroSection
export interface IAboutHero extends Document {
  heading: string;
  subHeading: string;
  storyHeading: string;
  description: string;
  imageUrls: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const AboutHeroSchema = new Schema<IAboutHero>({
  heading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  storyHeading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: [String],
    required: true,
  },
}, { timestamps: true });

// Export the model
export const HeroSection = model<IAboutHero>("aboutHero", AboutHeroSchema);
