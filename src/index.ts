import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();
const port: number = (process.env.PORT && +process.env.PORT) || 3000;

app.use(express.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode: number = err.statusCode || 500;
  const message: string = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
