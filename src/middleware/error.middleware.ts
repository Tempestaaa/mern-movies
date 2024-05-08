import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/CustomError";

const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode: number = err.statusCode || 500;
  const message: string = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};

export default errorMiddleware;
