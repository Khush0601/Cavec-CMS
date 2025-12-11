import { Request, Response } from "express";
import { AchievementStats } from "../../model/crowdFunding/achievement.model";

export const addOrUpdateAchievementStat = async (req: Request, res: Response) => {
  try {
    const { icon, value, title } = req.body;

    if (!icon || !value || !title) {
      return res.status(400).json({
        success: false,
        message: "icon, value, and title are required",
      });
    }

    // Find the existing document
    let statsDoc = await AchievementStats.findOne();

    if (!statsDoc) {
      // Create new document if none exists
      statsDoc = await AchievementStats.create({
        stats: [{ icon, value, title }],
      });
    } else {
      // Push new stat into existing array
      statsDoc.stats.push({ icon, value, title });
      await statsDoc.save();
    }

    return res.status(200).json({
      success: true,
      message: "Achievement stat added successfully",
      data: statsDoc,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};



// Optional: GET all stats
export const getAchievementStats = async (req: Request, res: Response) => {
  try {
    const statsDoc = await AchievementStats.findOne();
    if (!statsDoc) {
      return res.status(404).json({
        success: false,
        message: "No AchievementStats found",
      });
    }

    return res.status(200).json({
      success: true,
      data: statsDoc,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
