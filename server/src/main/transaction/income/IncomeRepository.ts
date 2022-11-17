import prismaClient from '../../database/connect';
import { TransactionProps } from '../Transaction';

export interface IIncomeRepository {
  save(income: TransactionProps): Promise<void>;
}

class IncomeRepository implements IIncomeRepository {
  async save(income: TransactionProps): Promise<void> {
    await prismaClient.income.create({
      data: {
        id: income.id,
        category: income.category,
        amount: income.amount,
        description: income.description,
        accountId: income.account.id,
        createdAt: income.createdAt
      }
    });
  }
}

export default IncomeRepository;
