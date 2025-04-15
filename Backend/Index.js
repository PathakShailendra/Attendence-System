import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import adminRoutes from './routes/admin.routes.js'
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Attendance System API is running...");
});
app.use('/api/admin', adminRoutes)

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
