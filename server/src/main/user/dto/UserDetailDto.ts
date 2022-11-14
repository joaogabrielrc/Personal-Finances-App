export interface UserDetailDtoProps {
  readonly id: string;
  email: string;
  firstName: string;
  lastName: string;
}

class UserDetailDto {
  private props: UserDetailDtoProps;

  constructor(props: UserDetailDtoProps) {
    this.props = {
      id: props.id,
      email: props.email,
      firstName: props.firstName,
      lastName: props.lastName
    };
  }

  public get(): UserDetailDtoProps {
    return this.props;
  }
}

export default UserDetailDto;
