import mongoose, { Schema, Document } from "mongoose";

export interface ILicense extends Document {
  heading: string;
  image:[ string];
}

const LicenseSchema: Schema = new Schema(
  {
    heading: { type: String, required: true },
    image:[
       { type: String, required: true }
    ],
  },
  { timestamps: true }
);

// Collection name: home/licenses
export default mongoose.model<ILicense>("License", LicenseSchema);
