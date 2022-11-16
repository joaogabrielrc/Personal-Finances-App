import UserService from '../user/UserService';
import { AccountProps } from './Account';
import AccountRepository from './AccountRepository';

class AccountService {
  constructor(
    private userService: UserService,
    private accountRepository: AccountRepository
  ) {}

  async save(account: AccountProps): Promise<void> {
    await this.userService.save(account.user);
    await this.accountRepository.save(account);
  }
}

export default AccountService;
