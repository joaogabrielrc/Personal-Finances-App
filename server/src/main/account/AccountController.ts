import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Account from './Account';
import AccountService from './AccountService';

class AccountController {
  constructor(private accountService: AccountService) {}

  async create(request: Request, response: Response) {
    const account = new Account(request.body);
    await this.accountService.save(account.get());
    return response.status(StatusCodes.OK).json(account.get());
  }
}

export default AccountController;
