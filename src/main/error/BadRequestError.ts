import CustomAPIError from './CustomAPIError';
import { StatusCodes } from 'http-status-codes';

class BadRequestError extends CustomAPIError {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
