import { Schema, model, Document } from "mongoose";

export interface IManpowerResource extends Document {
  mainHeading: string;
  desc: string;
  processCard: {
    heading: string;
    points: string[];
  };
  presenceCards: {
    heading: string;
    desc: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const ManpowerResourceSchema = new Schema<IManpowerResource>(
  {
    mainHeading: { type: String, required: true },
    desc: { type: String, required: true },
    processCard: {
      heading: { type: String, required: true },
      points: { type: [String], required: true },
    },
    presenceCards: {
      heading: { type: String, required: true },
      desc: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export const ManpowerResource = model<IManpowerResource>(
  "ManpowerResource",
  ManpowerResourceSchema
);
