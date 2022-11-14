import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import { IUserRepository } from '../user/UserRepository';
import { UnauthenticatedError } from '../error';
import { AuthRequest } from '../middleware/auth/authentication';

export class AuthController {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async refresh(request: AuthRequest, response: Response) {
    const { id, email, iat, exp } = request.authUser;

    const issuedAt = new Date(iat * 1000);
    issuedAt.setHours(issuedAt.getHours() - 3);

    const expiresIn = new Date(exp * 1000);
    expiresIn.setHours(expiresIn.getHours() - 3);

    return response.status(StatusCodes.OK).json({
      userId: id,
      userEmail: email,
      issuedAt,
      expiresIn
    });
  }

  async login(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new UnauthenticatedError('Invalid user credentials');

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      throw new UnauthenticatedError('Invalid user credentials');

    const JWT_SECRET = process.env.JWT_SECRET ?? '';
    const { id } = user;

    const token = jwt.sign({ id, email }, JWT_SECRET, {
      expiresIn: '7d'
    });

    return response.status(StatusCodes.OK).json({
      token
    });
  }
}
