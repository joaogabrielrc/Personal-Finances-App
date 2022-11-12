import { Request, Response, NextFunction } from 'express';
import { CustomAPIError } from '../error';
import { StatusCodes } from 'http-status-codes';

function errorHandlerMiddleware(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof CustomAPIError) {
    return response.status(error.statusCode).json({
      message: error.message
    });
  }

  console.log(error);

  return response
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong');
}

export default errorHandlerMiddleware;
