import { Schema, model, Document } from "mongoose";

export interface IRecruitmentProcess extends Document {
  icon: string; 
  heading: string;
  subHeading: string;
  quote: string;
  desc: string;
  steps: {
    icon: string; 
    title: string;
    points: string;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}

const RecruitmentProcessSchema = new Schema<IRecruitmentProcess>(
  {
    icon: { type: String, required: true },
    heading: { type: String, required: true },
    subHeading: { type: String, required: true },
    quote: { type: String, required: true },
    desc: { type: String, required: true },
    steps: [
      {
        icon: { type: String, required: true }, 
        title: { type: String, required: true },
        points: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const RecruitmentProcess = model<IRecruitmentProcess>(
  "RecruitmentProcess",
  RecruitmentProcessSchema
);
