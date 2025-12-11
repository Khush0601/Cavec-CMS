import { Request, Response } from "express";
import { WhyChooseCavec } from "../../model/services/whyChooseCavec.model";

export const createWhyChooseCavec = async (req: Request, res: Response) => {
  try {
    const { mainHeading, desc } = req.body;

    if (!mainHeading || !desc) {
      return res.status(400).json({
        success: false,
        message: "mainHeading and desc are required",
      });
    }

    const newData = await WhyChooseCavec.create({
      mainHeading,
      desc,
     
    });

    return res.status(201).json({
      success: true,
      message: "WhyChooseCavec created successfully",
      data: newData,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};


export const updateWhyChooseCavec=async(req:Request,res:Response)=>{
  try{
   const { topic, number, heading, desc } = req.body;
  if(!topic || ! number || !heading || !desc){
       return res.status(400).json({
        success: false,
        message: "All fields are required ",
      });
  }
  const whyChooseCavec=await WhyChooseCavec.findOne()
  const questionData={
    topic,
   number,
   heading,
   desc
  }
  if(whyChooseCavec){
    whyChooseCavec.questionArr.push(questionData)
     await whyChooseCavec.save()
     return res.status(400).json({
        success: true,
        message: "questions created successfully",
        data:whyChooseCavec
      });
  }
  else{
     return res.status(404).json({
      success: false,
      message: "create why Choose cavec section first ",
      
    });
  }
  }
  catch(error:any){
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}
