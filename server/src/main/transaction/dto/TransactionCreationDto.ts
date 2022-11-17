import { Decimal } from '@prisma/client/runtime';

export interface TransactionCreationDtoProps {
  category: string;
  amount: Decimal;
  description?: string;
  accountId: string;
}

class TransactionCreationDto {
  private props: TransactionCreationDtoProps;

  constructor(props: TransactionCreationDtoProps) {
    this.props = {
      category: props.category && props.category.trim().toLowerCase(),
      amount: props.amount && new Decimal(props.amount),
      description: props.description && props.description.trim().toLowerCase(),
      accountId: props.accountId && props.accountId.trim().toLowerCase()
    };
  }

  public get(): TransactionCreationDtoProps {
    return this.props;
  }
}

export default TransactionCreationDto;
