import UserDto from '../../../../main/user/dto/UserDto';

describe('User Dto Test', () => {
  it('should return undefined password', () => {
    const userDto = new UserDto({
      id: 'u1',
      email: 'jhon@test.com',
      password: '123456',
      firstName: 'Jhon',
      lastName: 'Doe'
    });

    expect(userDto.get()).not.toHaveProperty('password');
  });
});
