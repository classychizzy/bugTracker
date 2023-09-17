import { NextFunction, Request, Response } from "express";
import { logger } from "../utils";

class ErrorHandler {
    public async handle(err: Error, req: Request, res: Response, next: NextFunction) {
        logger.error(
            err.message,
            err
        );
        
        console.log("Not yet implemented")
    }
}

const errorHandler = new ErrorHandler();
export default errorHandler;
