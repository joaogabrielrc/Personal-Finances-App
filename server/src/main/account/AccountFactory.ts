import AccountRepository from './AccountRepository';
import UserRepository from '../user/UserRepository';
import UserService from '../user/UserService';
import AccountService from './AccountService';
import AccountController from './AccountController';
import { Request, Response } from 'express';

class AccountFactory {
  private controller: AccountController;

  constructor() {
    const accountRepository = new AccountRepository();
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    const accountService = new AccountService(accountRepository, userService);
    this.controller = new AccountController(accountService);
  }

  create(request: Request, response: Response) {
    return this.controller.create(request, response);
  }
}

export default AccountFactory;
