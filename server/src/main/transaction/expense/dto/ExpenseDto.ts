import { Decimal } from '@prisma/client/runtime';

export interface ExpenseDtoProps {
  readonly id: string;
  category: string;
  amount: Decimal;
  description?: string;
}

class ExpenseDto {
  private props: ExpenseDtoProps;

  constructor(props: ExpenseDtoProps) {
    this.props = {
      id: props.id,
      category: props.category,
      amount: props.amount,
      description: props.description
    };
  }

  public get(): ExpenseDtoProps {
    return this.props;
  }
}

export default ExpenseDto;
