import prismaClient from '../database/connect';
import { AccountProps } from './Account';

export interface IAccountRepository {
  save(account: AccountProps): Promise<void>;
}

class AccountRepository implements IAccountRepository {
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
