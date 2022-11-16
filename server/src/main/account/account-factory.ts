import UserRepository from '../user/UserRepository';
import UserService from '../user/UserService';
import AccountController from './AccountController';
import AccountRepository from './AccountRepository';
import AccountService from './AccountService';

function accountFactory() {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const accountRepository = new AccountRepository();
  const accountService = new AccountService(userService, accountRepository);
  const accountController = new AccountController(accountService);
  return accountController;
}

export default accountFactory;
