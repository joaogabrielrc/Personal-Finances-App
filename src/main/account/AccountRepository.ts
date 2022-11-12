import { AccountProps } from './Account';

export interface IAccountRepository {
  save(user: AccountProps): void;
}

class AccountRepository implements IAccountRepository {
  async save(account: AccountProps) {
    throw new Error('Method not implemented.');
  }
}

export default AccountRepository;