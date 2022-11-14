export interface UserCreationDtoProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

class UserCreationDto {
  private props: UserCreationDtoProps;

  constructor(props: UserCreationDtoProps) {
    this.props = {
      email: props.email && props.email.trim().toLowerCase(),
      password: props.password,
      firstName: props.firstName && props.firstName.trim().toLowerCase(),
      lastName: props.lastName && props.lastName.trim().toLowerCase()
    };
  }

  public get(): UserCreationDtoProps {
    return this.props;
  }
}

export default UserCreationDto;
