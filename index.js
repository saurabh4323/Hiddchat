import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
<<<<<<< HEAD
=======
const corsOption = {
  origin: "https://hiddchatfrontend.vercel.app",
  credentials: true,
};
app.use(cors(corsOption));
>>>>>>> fda68328e0c2ea18c3e7b61b22c641b06a281d2f

const corsOptions = {
  origin: ["https://hiddchatfrontend.vercel.app", "http://localhost:3000"],
  credentials: true, // This is necessary for cookies to be sent across domains
};

app.use(cors(corsOptions));

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server listening at port ${PORT}`);
});
