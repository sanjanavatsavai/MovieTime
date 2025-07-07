
import mongoose from "mongoose";

let isConnected = false; // track the connection state

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/movietime`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw error;
  }
};

export default connectDB;

