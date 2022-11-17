import prismaClient from '../../database/connect';
import { TransactionProps } from '../Transaction';

export interface IExpenseRepository {
  save(expense: TransactionProps): Promise<void>;
}

class ExpenseRepository implements IExpenseRepository {
  async save(expense: TransactionProps): Promise<void> {
    await prismaClient.expense.create({
      data: {
        id: expense.id,
        category: expense.category,
        amount: expense.amount,
        description: expense.description,
        accountId: expense.account.id,
        createdAt: expense.createdAt
      }
    });
  }
}

export default ExpenseRepository;
