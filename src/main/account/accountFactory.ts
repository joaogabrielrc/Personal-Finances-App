import AccountRepository from './AccountRepository';
import UserRepository from '../user/UserRepository';
import UserService from '../user/UserService';
import AccountService from './AccountService';
import AccountController from './AccountController';

const accountFactory = () => {
  const accountRepository = new AccountRepository();
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const accountService = new AccountService(accountRepository, userService);
  return new AccountController(accountService);
};

export default accountFactory;
