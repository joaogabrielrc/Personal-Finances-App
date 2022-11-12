import prismaClient from '../database/data-source';
import { UserProps } from './User';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserProps>;
  save(user: UserProps): Promise<void>;
}

class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<UserProps> {
    return await prismaClient.user.findUnique({ where: { email } });
  }

  async save(user: UserProps): Promise<void> {
    await prismaClient.user.create({ data: user });
  }
}

export default UserRepository;
