import { Schema, model, Document } from "mongoose";

export interface ICrowdFundingHero extends Document {
  heading: string;
  description: string[];
}

const CrowdFundingHeroSchema = new Schema<ICrowdFundingHero>(
  {
    heading: {
      type: String,
      required: true,
    },

    description: [
      {
        type: String,
        required: true,
      }
    ],
  },
  {
    timestamps: true,
  }
);

export const CrowdFundingHero = model<ICrowdFundingHero>(
  "CrowdFundingHero",
  CrowdFundingHeroSchema
);
