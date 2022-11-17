import { v4 as uuid } from 'uuid';
import { TransactionProps } from '../Transaction';

class Income {
  private props: TransactionProps;

  constructor(props: TransactionProps) {
    this.props = {
      id: this.generateId(),
      category: props.category,
      amount: props.amount,
      description: props.description,
      account: props.account,
      createdAt: new Date()
    };
  }

  private generateId(): string {
    return uuid();
  }

  public get(): TransactionProps {
    return this.props;
  }
}

export default Income;
