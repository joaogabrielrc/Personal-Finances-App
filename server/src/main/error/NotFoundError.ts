import CustomAPIError from './CustomAPIError';
import { StatusCodes } from 'http-status-codes';

class NotFoundError extends CustomAPIError {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
