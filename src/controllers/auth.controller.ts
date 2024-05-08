import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser";
import errorHandler from "../utils/errorHandler";

export const signUp = async (
  req: Request<{}, {}, CreateUserDto>,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return next(errorHandler(400, "Some fields are empty, fill them up!"));

  try {
    res.json({
      username,
      email,
      password,
    });
  } catch (error) {
    next(error);
  }
};
