import { Decimal } from '@prisma/client/runtime';

export interface IncomeDtoProps {
  readonly id: string;
  category: string;
  amount: Decimal;
  description?: string;
}

class IncomeDto {
  private props: IncomeDtoProps;

  constructor(props: IncomeDtoProps) {
    this.props = {
      id: props.id,
      category: props.category,
      amount: props.amount,
      description: props.description
    };
  }

  public get(): IncomeDtoProps {
    return this.props;
  }
}

export default IncomeDto;
