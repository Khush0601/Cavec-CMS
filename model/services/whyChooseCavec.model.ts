import { Schema, model, Document } from "mongoose";

export interface IWhyChooseCavec extends Document {
  mainHeading: string;
  desc: string;
  questionArr: {
    topic: {
      number: number;
      title: string;
    };
    number: number;
    heading: string;
    desc: string;
  }[];
}

const WhyChooseCavecSchema = new Schema<IWhyChooseCavec>(
  {
    mainHeading: { type: String, required: true },
    desc: { type: String, required: true },
    questionArr: [
      {
        topic: {
          number: { type: Number, required: true },
          title: { type: String, required: true },
        },
        number: { type: Number, required: true },
        heading: { type: String, required: true },
        desc: { type: String, required: true },
      }
    ],
  },
  {
    timestamps: true,
  }
);

export const WhyChooseCavec = model<IWhyChooseCavec>(
  "WhyChooseCavec",
  WhyChooseCavecSchema
);
