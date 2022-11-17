import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import TransactionCreationDto from '../../transaction/dto/TransactionCreationDto';

async function transactionFormMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const transactionForm = new TransactionCreationDto(request.body);
  const { category, amount, accountId } = transactionForm.get();

  if (!category || !amount || !accountId) {
    return response.status(StatusCodes.BAD_REQUEST).json({
      category: 'Category is required',
      amount: 'Amount is required',
      accountId: 'Account ID is required'
    });
  }

  request.body = transactionForm.get();
  next();
}

export default transactionFormMiddleware;
