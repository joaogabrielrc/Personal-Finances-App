import { TransactionProps } from '../Transaction';
import { IExpenseRepository } from './ExpenseRepository';

class ExpenseService {
  constructor(private expenseRepository: IExpenseRepository) {}

  async save(expense: TransactionProps): Promise<void> {
    await this.expenseRepository.save(expense);
  }
}

export default ExpenseService;
