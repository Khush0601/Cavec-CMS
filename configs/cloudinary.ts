import { v2 as cloudinary, ConfigOptions } from "cloudinary";

const cloudinaryConfig: ConfigOptions = {
  cloud_name: process.env.CLOUD_NAME as string,
  api_key: process.env.API_KEY as string,
  api_secret: process.env.API_SECRET as string,
};

cloudinary.config(cloudinaryConfig);

export default cloudinary;