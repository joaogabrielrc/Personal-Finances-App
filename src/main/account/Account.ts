import { v4 as uuid } from 'uuid';
import { UserCreationDtoProps } from '../user/dto/UserCreationDto';
import User, { UserProps } from '../user/User';
import { AccountCreationDtoProps } from './dto/AccountCreationDto';

export interface AccountProps {
  readonly id: string;
  user: UserProps;
}

type AccountFormProps = AccountCreationDtoProps;

class Account {
  private props: AccountProps;

  constructor(props: AccountFormProps) {
    this.props = {
      id: this.generateId(),
      user: this.generateUser(props.userForm ?? Object())
    };
  }

  generateId(): string {
    return uuid();
  }

  generateUser(userForm: UserCreationDtoProps): UserProps {
    const user = new User(userForm);
    return user.get();
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
