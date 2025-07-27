import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/GyaanSetu`, { //GyaanSetu is the name of database.
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected to GyaanSetu!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectDB;