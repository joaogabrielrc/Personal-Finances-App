import { TransactionProps } from '../Transaction';
import { IIncomeRepository } from './IncomeRepository';

class IncomeService {
  constructor(private incomeRepository: IIncomeRepository) {}

  async save(income: TransactionProps): Promise<void> {
    await this.incomeRepository.save(income);
  }
}

export default IncomeService;
