import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AccountCreationDto from './dto/AccountCreationDto';
import Account from './Account';
import AccountService from './AccountService';

class AccountController {
  constructor(private accountService: AccountService) {}

  async create(request: Request, response: Response) {
    const accountForm = new AccountCreationDto(request.body);
    const account = new Account(accountForm.get());
    await this.accountService.save(account);
    return response.status(StatusCodes.OK).json(account.get());
  }
}

export default AccountController;
