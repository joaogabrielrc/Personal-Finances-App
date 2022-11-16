import { UserProps } from '../../user/User';

export interface AccountCreationDtoProps {
  user: UserProps;
}

class AccountCreationDto {
  private props: AccountCreationDtoProps;

  constructor(props: AccountCreationDtoProps) {
    this.props = {
      user: props.user
    };
  }

  public get(): AccountCreationDtoProps {
    return this.props;
  }
}

export default AccountCreationDto;
