import UserService from '../user/UserService';
import { AccountProps } from './Account';
import { IAccountRepository } from './AccountRepository';

class AccountService {
  constructor(
    private accountRepository: IAccountRepository,
    private userService: UserService
  ) {}

  async save(account: AccountProps) {
    await this.userService.save(account.user);
    await this.accountRepository.save(account);
  }
}

export default AccountService;
