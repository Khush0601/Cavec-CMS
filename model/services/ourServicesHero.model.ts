import { Schema, model, Document } from "mongoose";

export interface IOurServicesHero extends Document {
  heading: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const OurServicesHeroSchema = new Schema<IOurServicesHero>(
  {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const OurServicesHero = model<IOurServicesHero>(
  "OurServicesHero",
  OurServicesHeroSchema
);
