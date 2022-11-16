import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import AccountCreationDto from '../../account/dto/AccountCreationDto';
import UserCreationDto from '../../user/dto/UserCreationDto';
import User from '../../user/User';

function accountFormMiddleware(  
  request: Request,
  response: Response,
  next: NextFunction
) {
  const userForm = new UserCreationDto(request.body.user);
  const { email, password, firstName, lastName } = userForm.get();

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

  if (password.length < 8) {
    return response.status(StatusCodes.BAD_REQUEST).json({
      user: {
        password: 'Password must be last eight characters long'
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

  const user = new User(userForm.get());
  const accountForm = new AccountCreationDto({ user: user.get() });

  request.body = accountForm.get();
  next();
}

export default accountFormMiddleware;
