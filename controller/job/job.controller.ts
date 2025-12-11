import { Request, Response } from "express";
import { Job } from "../../model/job/job.model";

export const createJob = async (req: Request, res: Response) => {
  try {
    const {
      jobType,
      jobName,
      smallDesc,
      image,
      video,
      longDesc,
      jobWorkflow,
      recruitmentProcess,
      enrollment
    
    } = req.body;

    // Validate required fields
    if (
      !jobType ||
      !jobName ||
      !smallDesc ||
      !image ||
      !longDesc ||
      !jobWorkflow ||
      !recruitmentProcess ||
      !enrollment
    ) {
      return res.status(400).json({
        status: "fail",
        message:
          "All fields are required",
      });
    }

    // Create new Job
    const job = await Job.create({
      jobType,
      jobName,
      smallDesc,
      image,
      video,
      longDesc,
      jobWorkflow,
      recruitmentProcess,
      enrollment,
      
    });

    res.status(201).json({
      status: "success",
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
};


