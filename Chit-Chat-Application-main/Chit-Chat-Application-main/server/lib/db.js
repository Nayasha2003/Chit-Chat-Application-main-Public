import mongoose from "mongoose";

// Function to connect to the MongoDB database
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("✅ Database Connected"));

    // Expect MONGODB_URI to be passed as "mongodb://mongo:27017"
    await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
