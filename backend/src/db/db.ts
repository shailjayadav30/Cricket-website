// src/db.ts
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  throw new Error("MONGO_URL is not defined in environment variables");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(mongoUrl);
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};
