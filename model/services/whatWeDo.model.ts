import { Schema, model, Document } from "mongoose";

export interface IWhatWeDo extends Document {
  mainHeading: string;
  cards: {
    iconImage: string;
    heading: string;
    subHeading: string;
    desc: string;
    points: string[]; 
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}

const WhatWeDoSchema = new Schema<IWhatWeDo>(
  {
    mainHeading: { type: String },
    cards: [
      {
        iconImage: { type: String, required: true },
        heading: { type: String, required: true },
        subHeading: { type: String, required: true },
        desc: { type: String, required: true },
        points: { type: [String], required: true }, // array of strings
      },
    ],
  },
  { timestamps: true }
);

export const WhatWeDo = model<IWhatWeDo>("WhatWeDo", WhatWeDoSchema);
