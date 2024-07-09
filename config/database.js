import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // Remove deprecated options
      //   useNewUrlParser: true, // This can be removed
      //   useUnifiedTopology: true, // This can be removed
      // Remove deprecated options
      // useCreateIndex: true,
      // useFindAndModify: false
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};

export default connectDB;
