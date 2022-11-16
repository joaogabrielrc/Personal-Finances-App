import { AccountProps } from '../../../main/account/Account';
import { IAccountRepository } from '../../../main/account/AccountRepository';

class AccountRepositoryFake implements IAccountRepository {
  private accounts: AccountProps[] = [];

  async save(account: AccountProps): Promise<void> {
    this.accounts.push(account);
  }
}

export default AccountRepositoryFake;
