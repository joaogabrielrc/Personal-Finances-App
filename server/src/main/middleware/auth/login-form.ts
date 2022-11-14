import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

function loginFormMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  let { email, password } = request.body;

  email = email && email.trim().toLowerCase();
  password = password && password.trim().toLowerCase();

  if (!email || !password) {
    return response.status(StatusCodes.BAD_REQUEST).json({
      email: 'E-mail is required',
      password: 'Password is required'
    });
  }

  request.body = { email, password };
  next();
}

export default loginFormMiddleware;
