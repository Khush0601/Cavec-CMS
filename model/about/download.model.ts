import { Schema, model, Document } from "mongoose";

export interface IDownload extends Document {
  title: string;
  subTitle: string;
  icon: string;        // URL from Cloudinary (icon image)
  pdfFile: string;     // URL from Cloudinary (PDF file)
  createdAt?: Date;
}

const DownloadSchema = new Schema<IDownload>(
  {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    pdfFile: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Download = model<IDownload>("Download", DownloadSchema);
