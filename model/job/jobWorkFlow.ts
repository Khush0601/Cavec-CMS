import { Schema, model, Document } from "mongoose";

export interface IJobWorkflow extends Document {
  heading: string;
  subHeading: string;
  icon:string;
  steps: {
    icon: string;
    title: string;
    points: string[];
  }[];

  createdAt?: Date;
  updatedAt?: Date;
}

const JobWorkflowSchema = new Schema<IJobWorkflow>(
  {
    heading: {
      type: String,
      required: true,
    },

    subHeading: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    steps: [
      {
        icon: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        points: [
          {
            type: String,
            required: true,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export const JobWorkflow = model<IJobWorkflow>(
  "JobWorkflow",
  JobWorkflowSchema
);
