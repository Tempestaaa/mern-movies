import express, { Application } from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route";
import errorMiddleware from "./middleware/error.middleware";

// Connect database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING as string);

// Initial
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port: number = (process.env.PORT && +process.env.PORT) || 3000;

// Routes
app.use("/api/auth", authRouter);

// Error handler
app.use(errorMiddleware);

app.listen(port, () => {
  console.log("Server is running on port", port);
});
