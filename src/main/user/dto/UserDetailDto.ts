export interface UserDetailDtoProps {
  readonly id: string;
  email: string;
}

class UserDetailDto {
  private props: UserDetailDtoProps;

  constructor(props: UserDetailDtoProps) {
    this.props = this.clean(props);
  }

  private clean(props: UserDetailDtoProps): UserDetailDtoProps {
    return {
      id: props.id,
      email: props.email
    };
  }

  public get(): UserDetailDtoProps {
    return this.props;
  }
}

export default UserDetailDto;
