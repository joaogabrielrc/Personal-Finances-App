import { BadRequestError } from '../../error';

export interface UserCreationDtoProps {
  email: string;
  password: string;
}

class UserCreationDto {
  private props: UserCreationDtoProps;

  constructor(props: UserCreationDtoProps) {
    this.props = this.clean(props);
    this.validate();
  }

  private clean(props: UserCreationDtoProps): UserCreationDtoProps {
    const { email, password } = props;
    return {
      email: email && email.trim().toLowerCase(),
      password
    };
  }

  private validate() {
    const { email, password } = this.props;    

    if (!email || !password) {
      throw new BadRequestError({
        email: 'E-mail is required',
        password: 'Password is required'
      });
    }

    if (!email.includes('@')) {
      throw new BadRequestError({
        email: 'Invalid e-mail address'        
      });
    }
  }

  public get(): UserCreationDtoProps {
    return this.props;
  }
}

export default UserCreationDto;
