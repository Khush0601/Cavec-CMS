import { Schema, model, Document } from "mongoose";

export interface ICareerConsultation extends Document {
  heading: string;      
  subHeading: string;    
  buttonText: string;    
  createdAt: Date;
  updatedAt: Date;
}

const CareerConsultationSchema = new Schema<ICareerConsultation>(
  {
    heading: { type: String, required: true },
    subHeading: { type: String, required: true },
    buttonText: { type: String, required: true },
  },
  { timestamps: true }
);

export const CareerConsultation = model<ICareerConsultation>(
  "CareerConsultation",
  CareerConsultationSchema
);
