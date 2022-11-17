import { Decimal } from '@prisma/client/runtime';
import { AccountProps } from '../account/Account';

export interface TransactionProps {
  readonly id: string;
  category: string;
  amount: Decimal;
  description?: string;
  createdAt: Date;
  account: AccountProps;
}
