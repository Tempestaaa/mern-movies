import { CustomError } from "./CustomError";

const errorHandler = (statusCode: number, message: string) => {
  const error = new CustomError(statusCode, message);
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

export default errorHandler;
