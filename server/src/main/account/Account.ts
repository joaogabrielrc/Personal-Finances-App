import { v4 as uuid } from 'uuid';
import { UserProps } from '../user/User';
import { AccountCreationDtoProps } from './dto/AccountCreationDto';

export interface AccountProps {
  readonly id: string;
  user: UserProps;
  createdAt: Date;
}

type AccountFormProps = AccountCreationDtoProps;

class Account {
  private props: AccountProps;

  constructor(props: AccountFormProps) {
    this.props = {
      id: this.generateId(),
      user: props.user,
      createdAt: new Date()
    };
  }

  private generateId(): string {
    return uuid();
  }

  public get id(): string {
    return this.props.id;
  }
  
  public get user(): UserProps {
    return this.props.user;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get(): AccountProps {
    return this.props;
  }
}

export default Account;
