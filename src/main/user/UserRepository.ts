import { UserProps } from './User';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserProps>;
  save(user: UserProps): void;
}

class UserRepository implements IUserRepository {
  findByEmail(email: string): Promise<UserProps> {
    return null;
  }

  save(user: UserProps) {
    throw new Error('Method not implemented.');
  }
}

export default UserRepository;
