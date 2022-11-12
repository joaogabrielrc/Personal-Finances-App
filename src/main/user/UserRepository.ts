import { UserProps } from './User';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserProps>;
  save(user: UserProps): Promise<void>;
}

class UserRepository implements IUserRepository {
  findByEmail(email: string): Promise<UserProps> {
    throw new Error('Method not implemented.');
  }

  async save(user: UserProps): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default UserRepository;
