import UserDto, { UserDtoProps } from '../../user/dto/UserDto';
import { UserProps } from '../../user/User';
import { AccountProps } from '../Account';

export interface AccountDtoProps {
  readonly id: string;
  user: UserDtoProps;
  createdAt: Date;
}

class AccountDto {
  private props: AccountDtoProps;

  constructor(props: AccountProps) {
    this.props = {
      id: props.id,
      user: this.getUserDto(props.user),
      createdAt: props.createdAt
    };
  }

  private getUserDto(user: UserProps): UserDtoProps {
    const userDto = new UserDto(user);
    return userDto.get();
  }

  public get(): AccountDtoProps {
    return this.props;
  }
}

export default AccountDto;
