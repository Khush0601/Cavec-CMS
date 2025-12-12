import { Schema, model, Document, Types } from "mongoose";

export interface IJobOpportunities extends Document {
  heading: string;        // e.g., "Job Opportunities for Mechanical, Electrical & Plumbing (MEP)"
  subHeading: string;     // e.g., "Premium MEP positions with competitive packages"
  icon?: string;
  text?: string;
  jobOpportunitiesCard: Types.ObjectId[]; // references to Job documents
  createdAt?: Date;
  updatedAt?: Date;
}

const JobOpportunitiesSchema = new Schema<IJobOpportunities>(
  {
    heading: { type: String, required: true },
    subHeading: { type: String, required: true },
    icon: { type: String },
    text: { type: String },
    jobOpportunitiesCard: [{ type: Schema.Types.ObjectId, ref:  "JobCategory", }],
  },
  { timestamps: true }
);

export const JobOpportunities = model<IJobOpportunities>(
  "JobOpportunities",
  JobOpportunitiesSchema
);
