import { Schema, model, Document } from "mongoose";

export interface IAchievementStats extends Document {
  stats: {
    icon: string;   
    value: string;  
    title: string;   
  }[];
}

const AchievementStatsSchema = new Schema<IAchievementStats>(
  {
    stats: [
      {
        icon: { type: String, required: true },
        value: { type: String, required: true },
        title: { type: String, required: true },
      }
    ]
  },
  {
    timestamps: true,
  }
);

export const AchievementStats = model<IAchievementStats>(
  "AchievementStats",
  AchievementStatsSchema
);
