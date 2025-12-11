
import { Schema, model, Document } from "mongoose";

export interface IOffice extends Document {
  heading: string;
  description: string;
  officeDetail: {
    image: string;
    locationIcon: string; // added
    state: string;
    country: string;
    fullAddress: string;
    googleMapLink: string; // for "View on Map"
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}

const OfficeSchema = new Schema<IOffice>(
  {
    heading: { type: String, required: true },
    description: { type: String, required: true },
    officeDetail: [
      {
        image: { type: String, required: true },
        locationIcon: { type: String, required: true }, 
        state: { type: String, required: true },
        country: { type: String, required: true },
        fullAddress: { type: String, required: true },
        googleMapLink: { type: String, required: true } 
      }
    ],
  },
  { timestamps: true }
);

export const Office = model<IOffice>(
  "Office",
  OfficeSchema
);
