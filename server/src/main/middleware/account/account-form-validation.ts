import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import AccountCreationDto from '../../account/dto/AccountCreationDto';

function accountFormMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const accountForm = new AccountCreationDto({
    userForm: request.body.user
  });

  const { email, password, firstName, lastName } = accountForm.userForm;

  if (!email || !password || !firstName || !lastName) {
    return response.status(StatusCodes.BAD_REQUEST).json({
      user: {
        email: 'E-mail is required',
        password: 'Password is required',
        firstName: 'First name is required',
        lastName: 'Last name is required'
      }
    });
  }

  if (!email.includes('@')) {
    return response.status(StatusCodes.BAD_REQUEST).json({
      user: {
        email: 'Invalid e-mail address'
      }
    });
  }

  request.body = accountForm.get();
  next();
}

export default accountFormMiddleware;
