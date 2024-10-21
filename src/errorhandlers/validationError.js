import { AppError } from "./error-handler.js";
import { StatusCodes } from "http-status-codes";
class ValidationError extends AppError{
    constructor(errorObj){
       super(
        errorObj.name,
        errorObj.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        errorObj._message,
       );
    }
}

export {ValidationError};
