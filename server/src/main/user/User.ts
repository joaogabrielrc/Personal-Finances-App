import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import { UserCreationDtoProps } from './dto/UserCreationDto';

export interface UserProps {
  readonly id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

type UserFormProps = UserCreationDtoProps;

class User {
  private props: UserProps;

  constructor(props: UserFormProps) {
    this.props = {
      id: this.generateId(),
      email: props.email,
      password: this.generateHashedPassword(props.password),
      firstName: props.firstName,
      lastName: props.lastName
    };
  }

  private generateId(): string {
    return uuid();
  }

  private generateHashedPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  public get id(): string {
    return this.props.id;
  }

  public get email(): string {
    return this.props.email;
  }

  public get firstName(): string {
    return this.props.firstName;
  }

  public get lastName(): string {
    return this.props.lastName;
  }

  public get(): UserProps {
    return this.props;
  }
}

export default User;
