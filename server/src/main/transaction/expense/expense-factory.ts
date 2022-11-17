import AccountRepository from '../../account/AccountRepository';
import ExpenseController from './ExpenseController';
import ExpenseRepository from './ExpenseRepository';
import ExpenseService from './ExpenseService';

function expenseFactory() {
  const expenseRepository = new ExpenseRepository();
  const expenseService = new ExpenseService(expenseRepository);
  const accountRepository = new AccountRepository();
  const expenseController = new ExpenseController(
    expenseService,
    accountRepository
  );
  return expenseController;
}

export default expenseFactory;
