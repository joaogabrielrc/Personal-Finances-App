import { BadRequestError } from '../../error';
import UserCreationDto, {
  UserCreationDtoProps
} from '../../user/dto/UserCreationDto';
import User, { UserProps } from '../../user/User';

export interface AccountCreationDtoProps {
  user: UserProps;
}

class AccountCreationDto {
  private props: AccountCreationDtoProps;

  constructor(props: AccountCreationDtoProps) {
    this.props = this.clean(props);
  }

  private clean(props: AccountCreationDtoProps): AccountCreationDtoProps {
    const { user } = props;
    return {
      user: this.generateUser(user ?? Object())
    };
  }

  generateUser(user: UserCreationDtoProps): UserProps {
    try {
      const userForm = new UserCreationDto(user);
      return new User(userForm.get()).get();
    } catch (error) {
      throw new BadRequestError({
        user: error.get()
      });
    }
  }

  public get(): AccountCreationDtoProps {
    return this.props;
  }
}

export default AccountCreationDto;
