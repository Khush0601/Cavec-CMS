import { Schema, model, Document } from "mongoose";

export interface IVisaProcess extends Document {
  mainHeading: string;
  desc: string[]; // array of paragraphs

  visaProcessCard: {
    heading: string;
    desc: string[];
    points: string[];
  };

  areaOfWorkCard: {
    heading: string;
    desc: string[];
  };

  facility: {
    heading: string;
    points: string[];
  };

  medicalTreatment: {
    heading: string;
    points: string[];
  };

  benefitsOfChoosingUs: {
    heading: string;
    points: string[];
  };

  globalReach: {
    heading: string;
    desc: string;
  };

  createdAt?: Date;
  updatedAt?: Date;
}

const VisaProcessSchema = new Schema<IVisaProcess>(
  {
    mainHeading: { type: String, required: true },
    desc: { type: [String], required: true },

    visaProcessCard: {
      heading: { type: String, required: true },
      desc: { type: [String], required: true },
      points: { type: [String], required: true },
    },

    areaOfWorkCard: {
      heading: { type: String, required: true },
      desc: { type: [String], required: true },
    },

    facility: {
      heading: { type: String, required: true },
      points: { type: [String], required: true },
    },

    medicalTreatment: {
      heading: { type: String, required: true },
      points: { type: [String], required: true },
    },

    benefitsOfChoosingUs: {
      heading: { type: String, required: true },
      points: { type: [String], required: true },
    },

    globalReach: {
      heading: { type: String, required: true },
      desc: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export const VisaProcess = model<IVisaProcess>("VisaProcess", VisaProcessSchema);
