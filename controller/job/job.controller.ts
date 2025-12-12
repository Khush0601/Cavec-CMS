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
      enrollment,
      jobOpportunities
    
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
      !enrollment ||
      !jobOpportunities
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
      jobOpportunities
      
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



// ✅ Get All Jobs
export const getJob = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find()
      .populate("jobWorkflow")
      .populate("recruitmentProcess")
      .populate("enrollment")
      .populate({
        path: "jobOpportunities",
        populate: {
        path: "jobOpportunitiesCard",
        model: "JobCategory"
    }
  })

    res.status(200).json({
      status: "success",
      results: jobs.length,
      data: jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
};


export const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id)
      .populate("jobWorkflow")
      .populate("recruitmentProcess")
      .populate("enrollment")
       .populate({
    path: "jobOpportunities",
    populate: {
      path: "jobOpportunitiesCard",
      model: "JobCategory"
    }
  })

    if (!job) {
      return res.status(404).json({
        status: "fail",
        message: "Job not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: job,
    });
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};


