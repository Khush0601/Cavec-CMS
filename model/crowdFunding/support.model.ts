import { Schema, model, Document } from "mongoose";

export interface ISupport extends Document {
  heading: string;
  desc: string;
  supportCards: {
    icon: string;
    heading: string;
    desc: string;
  }[];
}

const SupportSchema = new Schema<ISupport>(
  {
    heading: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    supportCards: [
      {
        icon: {
          type: String,
          required: true,
        },
        heading: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          required: true,
        },
      }
    ],
  },
  { timestamps: true }
);

export const Support = model<ISupport>("Support", SupportSchema);
