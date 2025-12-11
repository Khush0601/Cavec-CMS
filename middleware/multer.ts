import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configs/cloudinary";

// Universal storage that supports PDF, Videos, Images
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    const ext = file.originalname.split(".").pop()?.toLowerCase();

    // detect file type
    let resource_type: "raw" | "image" | "video" = "raw";
    let folder = "uploads";

    if (["jpg", "jpeg", "png", "webp"].includes(ext || "")) {
      resource_type = "image";
      folder = "images";
    } else if (["mp4", "mov", "avi", "webm"].includes(ext || "")) {
      resource_type = "video";
      folder = "videos";
    } else if (["pdf", "doc", "docx", "zip"].includes(ext || "")) {
      resource_type = "raw";
      folder = "pdfs";
    }

    return {
      folder,
      resource_type,   // cloudinary will support correct handling
      public_id: file.originalname.split(".")[0], // store with original name
    };
  },
});

// Multer middleware
const upload: multer.Multer = multer({
  storage: storage as any,
});

export default upload;
