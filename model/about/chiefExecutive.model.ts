import { Schema, model, Document } from "mongoose";

export interface ICEO extends Document {
  mainHeading: string;

  card: [
    {
      heading: string;
      desc: string[];
      quote: {
        text: string;
        author: string;
      };
      image: {
        image: string;
        name: string;
        designation: string;
      };
    }
  ];

  createdAt?: Date;
  updatedAt?: Date;
}

const CEOSchema = new Schema<ICEO>(
  {
    mainHeading: {
      type: String,
      required: true,
    },

    card: [
      {
        heading: { type: String, required: true },

        desc: {
          type: [String],
          required: true,
        },

        quote: {
          text: { type: String, required: true },
          author: { type: String, required: true },
        },

        image: {
          image: { type: String, required: true },
          name: { type: String, required: true },
          designation: { type: String, required: true },
        },
      },
    ],
  },
  { timestamps: true }
);

export const CEO = model<ICEO>("CEO", CEOSchema);
