import { Schema, model, Document } from "mongoose";

export interface ISuccessStories extends Document {
  image: string; // URL of the success story image
}

const SuccessStoriesSchema = new Schema<ISuccessStories>(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SuccessStories = model<ISuccessStories>(
  "SuccessStories",
  SuccessStoriesSchema
);
