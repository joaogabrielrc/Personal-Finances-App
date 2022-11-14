import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

function methodNotAllowedError(request: Request, response: Response) {
  return response
    .status(StatusCodes.METHOD_NOT_ALLOWED)
    .send('Method Not Allowed');
}

export default methodNotAllowedError;
