import { v4 as uuid } from 'uuid';
import { UserProps } from '../user/User';

export interface AccountProps {
  readonly id: string;
  user: UserProps;
}

class Account {
  private props: AccountProps;

  constructor(props: Omit<AccountProps, 'id'>) {
    this.props = {
      id: this.generateId(),
      user: props.user
    };
  }

  generateId(): string {
    return uuid();
  }

  public get id(): string {
    return this.props.id;
  }

  public get user(): UserProps {
    return this.props.user;
  }

  public get(): AccountProps {
    return this.props;
  }
}

export default Account;
