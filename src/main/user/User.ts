import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';

export interface UserProps {
  readonly id: string;
  email: string;
  password: string;
}

class User {
  private props: UserProps;

  constructor(props: Omit<UserProps, 'id'>) {
    this.props = this.clean(props);
  }

  private clean(props: Omit<UserProps, 'id'>): UserProps {
    return {
      id: this.generateId(),
      email: props.email,
      password: this.generateHashedPassword(props.password)
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

  public get(): UserProps {
    return this.props;
  }
}

export default User;
