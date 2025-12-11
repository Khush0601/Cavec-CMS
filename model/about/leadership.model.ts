import { Schema, model, Document } from "mongoose";

export interface ILeadership extends Document {
  heading: string;
  desc: string;

  teamCard: {
    image: string;
    name: string;
    designation: string;
    desc: string;
  }[];

  createdAt?: Date;
  updatedAt?: Date;
}

const LeadershipSchema = new Schema<ILeadership>(
  {
    heading: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    teamCard: [
      {
        image: { type: String, required: true },
        name: { type: String, required: true },
        designation: { type: String, required: true },
        desc: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Leadership = model<ILeadership>("Leadership", LeadershipSchema);
