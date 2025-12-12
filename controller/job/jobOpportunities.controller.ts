import { Request, Response } from "express";
import { JobOpportunities } from "../../model/job/jobOpportunities.model";
import { JobCategory } from "../../model/job/jobCategory.model";

// ✅ Create Job Opportunities
export const createJobOpportunities = async (req: Request, res: Response) => {
  try {
    const { heading, subHeading, icon, text } = req.body;

    if (!heading || !subHeading || !icon || !text) {
      return res.status(400).json({
        status: "fail",
        message: "heading and subHeading are required",
      });
    }

    const jobOpp = await JobOpportunities.create({
      heading,
      subHeading,
      icon,
      text,
    });

    res.status(201).json({
      status: "success",
      message: "Job Opportunities created successfully",
      data: jobOpp,
    });
  } catch (error) {
    console.error("Error creating Job Opportunities:", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
};


// ✅ Add Job Category to Job Opportunities
export const addJobCategoryToOpportunities = async (req: Request, res: Response) => {
  try {
    const { opportunitiesId, categoryId } = req.body;

    if (!opportunitiesId || !categoryId) {
      return res.status(400).json({
        status: "fail",
        message: "opportunitiesId and categoryId are required",
      });
    }

    // Check if Job Opportunities exists
    const jobOpp = await JobOpportunities.findById(opportunitiesId);
    if (!jobOpp) {
      return res.status(404).json({
        status: "fail",
        message: "Job Opportunities not found",
      });
    }

    // Check if Job Category exists
    const jobCategory = await JobCategory.findById(categoryId);
    if (!jobCategory) {
      return res.status(404).json({
        status: "fail",
        message: "Job Category not found",
      });
    }

    // Push category
    jobOpp.jobOpportunitiesCard.push(jobCategory._id);
    await jobOpp.save();

     const populatedData = await JobOpportunities.findById(opportunitiesId)
      .populate("jobOpportunitiesCard"); 

    return res.status(200).json({
      status: "success",
      message: "Job Category added to Job Opportunities",
      data: populatedData,
    });

  } catch (error) {
    console.error("Error adding Job Category:", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
};



