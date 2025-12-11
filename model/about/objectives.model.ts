// models/home/objectives.model.ts
import { Schema, model, Document } from "mongoose";

// Interface
export interface IObjectives extends Document {
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Schema
const ObjectivesSchema = new Schema<IObjectives>({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

// Export model (prevents overwrite error)
export const Objectives = model<IObjectives>("Objectives", ObjectivesSchema);
