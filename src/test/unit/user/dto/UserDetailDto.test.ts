import UserDetailDto from '../../../../main/user/dto/UserDetailDto';

describe('User Detail Dto Test', () => {
  it('should return undefined password', () => {
    const userDetailDto = new UserDetailDto({
      id: 'u1',
      email: 'jhon@test.com',
      firstName: 'Jhon',
      lastName: 'Doe'
    });

    expect(userDetailDto.get()).not.toHaveProperty('password');
  });
});
