import { AppError } from "./error-handler.js";
class ClientError extends AppError {
  constructor(name, message, statusCode, explanation) {
    super(name, message, statusCode, explanation);
  }
}

export { ClientError };
