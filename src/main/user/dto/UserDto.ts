export interface UserDtoProps {
  readonly id: string;
  email: string;
}

class UserDto {
  private props: UserDtoProps;

  constructor(props: UserDtoProps) {
    this.props = this.clean(props);
  }

  private clean(props: UserDtoProps): UserDtoProps {
    return {
      id: props.id,
      email: props.email
    };
  }

  public get(): UserDtoProps {
    return this.props;
  }
}

export default UserDto;
