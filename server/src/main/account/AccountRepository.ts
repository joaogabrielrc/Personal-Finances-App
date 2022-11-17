import prismaClient from '../database/connect';
import { AccountProps } from './Account';

export interface IAccountRepository {
  findById(id: string): Promise<AccountProps>;
  save(account: AccountProps): Promise<void>;
}

class AccountRepository implements IAccountRepository {
  async findById(id: string): Promise<AccountProps> {
    return await prismaClient.account.findUnique({
      where: { id },
      include: { user: true }
    });
  }

  async save(account: AccountProps): Promise<void> {
    await prismaClient.account.create({
      data: {
        id: account.id,
        userId: account.user.id,
        createdAt: account.createdAt
      }
    });
  }
}

export default AccountRepository;
