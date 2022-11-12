import UserDto from '../../../../main/user/dto/UserDto';

describe('User Dto Test', () => {
  it('should return undefined password', () => {
    const userDto = new UserDto({
      id: 'u1',
      email: 'jhon@test.com',
      firstName: 'Jhon'
    });

    expect(userDto.get()).not.toHaveProperty('password');
  });
});
