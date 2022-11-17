import AccountRepository from '../../account/AccountRepository';
import IncomeController from './IncomeController';
import IncomeRepository from './IncomeRepository';
import IncomeService from './IncomeService';

function incomeFactory() {
  const incomeRepository = new IncomeRepository();
  const incomeService = new IncomeService(incomeRepository);
  const accountRepository = new AccountRepository();
  const incomeController = new IncomeController(
    incomeService,
    accountRepository
  );
  return incomeController;
}

export default incomeFactory;
