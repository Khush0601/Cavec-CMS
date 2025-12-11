import { Schema, model, Document } from "mongoose";

export interface IEnrollment extends Document {
  icon: string;
  heading: string; 
  desc: string; 

  enrollmentCard: {
    icon: string;
    heading: string; 
    desc: string;
  };

  securityCard: {
    icon: string;
    heading: string; 
    desc: string;
  };

  legalRequirementsCards: {
    icon: string;
    heading: string;
    desc: string;
    points: { number: number; text: string }[];
  };

  createdAt?: Date;
  updatedAt?: Date;
}

const EnrollmentSchema = new Schema<IEnrollment>(
  {
    icon: { type: String, required: true },
    heading: { type: String, required: true },
    desc: { type: String, required: true },

    enrollmentCard: {
      icon: { type: String, required: true },
      heading: { type: String, required: true },
      desc: { type: String, required: true },
    },

    securityCard: {
      icon: { type: String, required: true },
      heading: { type: String, required: true },
      desc: { type: String, required: true },
    },

    legalRequirementsCards: {
      icon: { type: String, required: true },
      heading: { type: String, required: true },
      desc: { type: String, required: true },
      points: [
        {
          number: { type: Number, required: true },
          text: { type: String, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export const Enrollment = model<IEnrollment>("Enrollment", EnrollmentSchema);