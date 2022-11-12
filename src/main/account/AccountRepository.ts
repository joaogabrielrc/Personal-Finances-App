import prismaClient from '../database/data-source';
import { AccountProps } from './Account';

export interface IAccountRepository {
  save(user: AccountProps): Promise<void>;
}

class AccountRepository implements IAccountRepository {
  async save(account: AccountProps) {
    await prismaClient.account.create({
      data: {
        id: account.id,
        userId: account.user.id
      }
    });
  }
}

export default AccountRepository;
