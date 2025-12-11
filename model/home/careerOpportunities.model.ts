import mongoose, { Schema, Document } from "mongoose";

export interface CareerOpportunities extends Document {
  heading: string;
  subHeading: string;
}

const CareerOpportunitiesSchema: Schema = new Schema(
  {
    heading: {
      type: String,
     
      trim: true,
    },

    subHeading: {
      type: String,
     
      trim: true,
    },
  },
  { timestamps: true }
);

export const CareerOpportunitiesModel = mongoose.model<CareerOpportunities>(
  "CareerOpportunities",
  CareerOpportunitiesSchema
);
