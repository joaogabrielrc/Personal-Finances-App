import UserCreationDto, {
  UserCreationDtoProps
} from '../../user/dto/UserCreationDto';

export interface AccountCreationDtoProps {
  userForm: UserCreationDtoProps;
}

class AccountCreationDto {
  private props: AccountCreationDtoProps;

  constructor(props: AccountCreationDtoProps) {
    this.props = {
      userForm: this.generateUserForm(props.userForm ?? Object())
    };
  }

  generateUserForm(user: UserCreationDtoProps): UserCreationDtoProps {
    const userForm = new UserCreationDto(user);
    return userForm.get();
  }

  public get userForm(): UserCreationDtoProps {
    return this.props.userForm;
  }

  public get(): AccountCreationDtoProps {
    return this.props;
  }
}

export default AccountCreationDto;
