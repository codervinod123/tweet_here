import { AppError } from "./error-handler.js";
import { StatusCodes } from "http-status-codes";
class MongoError extends AppError {
  constructor(errorObj) {
    super(
      errorObj.name,
      "Databse error",
      StatusCodes.CONFLICT,
      errorObj.errmsg,
    );
  }
}

export { MongoError };
