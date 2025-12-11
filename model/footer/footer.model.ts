import { Schema, model } from "mongoose";

const FooterSchema = new Schema(
  {
    
    appIcon: {
      type: String,  
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    buttonText: {
      type: String,  
      required: true,
    },

    quickLinks: [
      {
        type: String,
        required: true,
      }
    ],

    contactInfo: {
      address: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      }
    }
  },
  { timestamps: true }
);

export default model("Footer", FooterSchema);
