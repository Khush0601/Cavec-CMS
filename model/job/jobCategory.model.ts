import { Schema, model, Document } from "mongoose";

// Interface for Job Opportunity
export interface IJobCategory extends Document {
  icon: string;
  title: string;
  availablePosition: number;
  shiftType: string;
  countryOffering: {
    country: string;
    currency: string;
    min: number;
    max: number;
    convertedToINR?: {
      min: number;
      max: number;
    };
    heading?: string;
    icon?: string;
  }[];
  compare?: {
    heading: string;
    subHeading: string;
    currency: string;
    min: number;
    max: number;
    suggestionText?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

// Schema
const JobCategorySchema = new Schema<IJobCategory>(
  {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    availablePosition: { type: Number, required: true },
    shiftType: { type: String, required: true },
    countryOffering: [
      {
        country: { type: String, required: true },
        currency: { type: String, required: true },
        min: { type: Number, required: true },
        max: { type: Number, required: true },
        convertedToINR: {
          min: { type: Number },
          max: { type: Number },
        },
        heading: { type: String, default: "Monthly Salary" },
        icon: { type: String },
      },
    ],
    compare: {
      heading: { type: String, required: true },
      subHeading: { type: String, required: true },
      currency: { type: String, required: true },
      min: { type: Number, required: true },
      max: { type: Number, required: true },
      suggestionText: { type: String },
    },
  },
  { timestamps: true }
);

// Export model
export const JobCategory = model<IJobCategory>(
  "JobCategory",
  JobCategorySchema
);
