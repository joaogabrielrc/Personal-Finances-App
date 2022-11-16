import { BadRequestError } from '../error';
import { UserProps } from './User';
import UserRepository from './UserRepository';

class UserService {
  constructor(private userRepository: UserRepository) {}

  async save(user: UserProps): Promise<void> {
    const userExists = await this.userRepository.findByEmail(user.email);

    if (userExists) {
      throw new BadRequestError('User already exists');
    }

    await this.userRepository.save(user);
  }
}

export default UserService;
