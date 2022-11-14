import AccountRepository from './AccountRepository';
import UserRepository from '../user/UserRepository';
import UserService from '../user/UserService';
import AccountService from './AccountService';
import AccountController from './AccountController';

function accountFactory() {
  const accountRepository = new AccountRepository();
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const accountService = new AccountService(accountRepository, userService);
  const accountController = new AccountController(accountService);
  return accountController;
}

export default accountFactory;
