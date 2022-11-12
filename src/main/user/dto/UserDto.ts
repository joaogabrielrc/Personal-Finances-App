export interface UserDtoProps {
  readonly id: string;
  email: string;
  firstName: string;
}

class UserDto {
  private props: UserDtoProps;

  constructor(props: UserDtoProps) {
    this.props = {
      id: props.id,
      email: props.email,
      firstName: props.firstName
    };
  }

  public get(): UserDtoProps {
    return this.props;
  }
}

export default UserDto;
