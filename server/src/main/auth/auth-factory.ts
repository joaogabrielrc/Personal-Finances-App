import UserRepository from '../user/UserRepository';
import { AuthController } from './AuthController';

export const authFactory = () => {
  const userRepository = new UserRepository();  
  const authController = new AuthController(userRepository);
  return authController;
};
