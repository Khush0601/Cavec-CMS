// models/home/infoCard.model.ts
import { Schema, model, Document } from "mongoose";

// Interface
export interface IInfoCard extends Document {
  icon: string;       // URL or icon name
  title: string;      // e.g., "Our Vision" or "Our Mission"
  description: string; // description content
  createdAt?: Date;
  updatedAt?: Date;
}

// Schema
const InfoCardSchema = new Schema<IInfoCard>({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

// Export model
export const InfoCard = model<IInfoCard>("InfoCard", InfoCardSchema);
