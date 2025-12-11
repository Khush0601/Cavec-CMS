import mongoose, { Schema, Document } from "mongoose";

export interface IHeroSection extends Document {
  smallHeading: string;         
  mainHeading: string;         
  subHeading: string;           
  highlights: string[];         
  images: string[];           
}

const HeroSectionSchema: Schema = new Schema(
  {
    smallHeading: {
      type: String,
      required: true,
      trim: true,
    },

    mainHeading: {
      type: String,
      required: true,
      trim: true,
    },

    subHeading: {
      type: String,
      required: true,
      trim: true,
    },

    highlights: {
      type: [String],
      required: true,
      default: [],
    },

    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export const HeroSection = mongoose.model<IHeroSection>(
  "HeroSection",
  HeroSectionSchema
);
