import UserService from '../user/UserService';
import { AccountProps } from './Account';
import AccountRepository from './AccountRepository';

class AccountService {
  constructor(
    private accountRepository: AccountRepository,
    private userService: UserService
  ) {}

  async save(account: AccountProps) {
    await this.userService.save(account.user);
    await this.accountRepository.save(account);
  }
}

export default AccountService;
