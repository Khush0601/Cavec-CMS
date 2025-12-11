import { Schema, model, Document } from "mongoose";

export interface IIndustriesCategories extends Document {
  mainHeading: string;
  desc: string;
  cards: {
    heading: string;
    points: string[]; 
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}

const IndustriesCategoriesSchema = new Schema<IIndustriesCategories>(
  {
    mainHeading: { type: String, required: true },
    desc: { type: String, required: true },
    cards: [
      {
        heading: { type: String, required: true },
        points: { type: [String], required: true }, // array of strings
      },
    ],
  },
  { timestamps: true }
);

export const IndustriesCategories = model<IIndustriesCategories>(
  "IndustriesCategories",
  IndustriesCategoriesSchema
);
