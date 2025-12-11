import { Request, Response } from "express";
import { JobWorkflow } from "../../model/job/jobWorkFlow";

export const createJobWorkflowSection = async (req: Request, res: Response) => {
  try {
    const { heading, subHeading,icon } = req.body;

    if (!heading || !subHeading || !icon) {
      return res.status(400).json({
        status: "fail",
        message: "heading ,subHeading and icon  are required",
      });
    }

    // Create only section, steps empty
    const workflow = await JobWorkflow.create({
      heading,
      subHeading,
      icon,
      steps: [],
    });

    res.status(201).json({
      status: "success",
      message: "Job workflow section created successfully",
      data: workflow,
    });
  } catch (error) {
    console.error("Error creating job workflow section:", error);
    res.status(500).json({ status: "error", message: "Server Error" });
  }
};


export const addJobWorkflowStep = async (req: Request, res: Response) => {
  try {
    const { icon, title, points } = req.body;

    if (!icon || !title || !points || !Array.isArray(points)) {
      return res.status(400).json({
        status: "fail",
        message: "icon, title and points[] are required",
      });
    }

    // Check if workflow exists
    let workflow = await JobWorkflow.findOne();

    // If not exists → create section first
    if (!workflow) {
      workflow = await JobWorkflow.create({
        heading: "Job Workflow",
        subHeading: "Streamlined process from sourcing to deployment",
        steps: [],
      });
    }

    // Push step
    workflow.steps.push({
      icon,
      title,
      points,
    });

    await workflow.save();

    res.status(200).json({
      status: "success",
      message: "Workflow step added successfully",
      data: workflow,
    });
  } catch (error) {
    console.error("Error adding workflow step:", error);
    res.status(500).json({ status: "error", message: "Server Error" });
  }
};
