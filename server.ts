import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { appConfig } from "./configs/app_config";
import { dbConfig } from "./configs/db_config";
import AppRoutes from "./routes/routes";
import mongoose from "mongoose";



const app = express();
app.use(express.json());

// Use Hero Section Routes

AppRoutes(app)





// db connected
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to the database");
});
db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

//server connected
app.listen(appConfig.PORT, () => {
  console.log(`Server running on http://localhost:${appConfig.PORT}`);
});