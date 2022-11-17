import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAccountRepository } from '../../account/AccountRepository';
import { BadRequestError } from '../../error';
import ExpenseDto from './dto/ExpenseDto';
import Expense from './Expense';
import ExpenseService from './ExpenseService';

class ExpenseController {
  constructor(
    private expenseService: ExpenseService,
    private accountRepository: IAccountRepository
  ) {}

  async create(request: Request, response: Response) {
    const { accountId } = request.body;
    const account = await this.accountRepository.findById(accountId);
    if (!account) throw new BadRequestError('Account does not exists');
    const expense = new Expense({ ...request.body, account });
    await this.expenseService.save(expense.get());
    const expenseDto = new ExpenseDto(expense.get());
    return response.status(StatusCodes.OK).json(expenseDto.get());
  }
}

export default ExpenseController;
