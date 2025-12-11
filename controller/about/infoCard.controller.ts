// controllers/home/infoCard.controller.ts
import { Request, Response } from "express";
import { InfoCard, IInfoCard } from "../../model/about/InfoCard.model";

// Create a new InfoCard
export const createInfoCard = async (req: Request, res: Response) => {
  try {
    const { icon, title, description } = req.body;

    if (!icon || !title || !description) {
      return res.status(400).json({
        message: "Icon, title, and description are required.",
      });
    }

    const newCard: IInfoCard = new InfoCard({
      icon,
      title,
      description,
    });

    const savedCard = await newCard.save();
    res.status(201).json(savedCard);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all InfoCards
export const getInfoCards = async (req: Request, res: Response) => {
  try {
    const cards = await InfoCard.find();
    res.status(200).json(cards);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
