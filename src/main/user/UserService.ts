import { BadRequestError } from '../error';
import { UserProps } from './User';
import { IUserRepository } from './UserRepository';

class UserService {
  constructor(private userRepository: IUserRepository) {}

  async findByEmail(email: string): Promise<UserProps> {
    return this.userRepository.findByEmail(email);
  }

  async save(user: UserProps) {
    const userExists = await this.userRepository.findByEmail(user.email);

    if (userExists) {
      throw new BadRequestError({
        user: 'User already exists'
      });
    }

    await this.userRepository.save(user);
  }
}

export default UserService;
