import { AccountProps } from '../../../main/account/Account';
import { IAccountRepository } from '../../../main/account/AccountRepository';

class AccountRepositoryFake implements IAccountRepository {
  private accounts: AccountProps[] = [];

  async save(user: AccountProps): Promise<void> {
    this.accounts.push(user);
  }
}

export default AccountRepositoryFake;
