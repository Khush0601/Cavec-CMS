import mongoose, { Schema, Document } from "mongoose";

// Interface for OurServices document
export interface IOurServices extends Document {
  mainHeading: string;
  description: string;
  services: {
    heading: string;
    subHeading: string;
    points: string[];
  }[];
}

// Schema for OurServices
const OurServicesSchema: Schema = new Schema({
  mainHeading: { type: String, required: true },
  description: { type: String, required: true },
  services: [
    {
    heading: { type: String, required: true },
    subHeading: { type: String, required: true },
    points: { type: [String], required: true },
    }
  ]
});

export default mongoose.model<IOurServices>("OurServices", OurServicesSchema);

