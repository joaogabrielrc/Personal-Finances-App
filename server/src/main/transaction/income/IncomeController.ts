import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAccountRepository } from '../../account/AccountRepository';
import { BadRequestError } from '../../error';
import IncomeDto from './dto/IncomeDto';
import Income from './Income';
import IncomeService from './IncomeService';

class IncomeController {
  constructor(
    private incomeService: IncomeService,
    private accountRepository: IAccountRepository
  ) {}

  async create(request: Request, response: Response) {
    const { accountId } = request.body;
    const account = await this.accountRepository.findById(accountId);
    if (!account) throw new BadRequestError('Account does not exists');
    const income = new Income({ ...request.body, account });
    await this.incomeService.save(income.get());
    const incomeDto = new IncomeDto(income.get());
    return response.status(StatusCodes.OK).json(incomeDto.get());
  }
}

export default IncomeController;
