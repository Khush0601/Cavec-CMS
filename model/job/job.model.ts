import { Schema, model, Document, Types } from "mongoose";

export interface IJob extends Document {
  jobType: string;
  jobName: string;
  smallDesc: string;
  image: string;
  video?: string;
  longDesc: string;

  jobWorkflow: Types.ObjectId;
  recruitmentProcess: Types.ObjectId;
  enrollment: Types.ObjectId;
 jobOpportunities: Types.ObjectId;

  createdAt?: Date;
  updatedAt?: Date;
}

const JobSchema = new Schema<IJob>(
  {
    jobType: {
      type: String,
      required: true,
    },
    jobName: {
      type: String,
      required: true,
    },
    smallDesc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    video: {
      type: String,
    },
    longDesc: {
      type: String,
      required: true,
    },

    // References to other models
    jobWorkflow: {
      type: Schema.Types.ObjectId,
      ref: "JobWorkflow",
      required: true,
    },
    recruitmentProcess: {
      type: Schema.Types.ObjectId,
      ref: "RecruitmentProcess",
      required: true,
    },
    enrollment: {
      type: Schema.Types.ObjectId,
      ref: "Enrollment",
      required: true,
    },
   jobOpportunities: {
  type: Schema.Types.ObjectId,
  ref: "JobOpportunities",  
},

   
  },
  { timestamps: true }
);

export const Job = model<IJob>("Job", JobSchema);
