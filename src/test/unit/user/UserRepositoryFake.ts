import { IUserRepository } from '../../../main/user/UserRepository';
import { UserProps } from '../../../main/user/User';

class UserRepositoryFake implements IUserRepository {
  private users: UserProps[] = [];

  async findByEmail(email: string): Promise<UserProps> {
    return this.users.find(user => user.email === email);
  }

  save(user: UserProps): void {
    this.users.push(user);
  }
}

export default UserRepositoryFake;
