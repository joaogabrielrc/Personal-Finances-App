import UserDetailDto from '../../../../main/user/dto/UserDetailDto';

test('it should return undefined password to user detail dto', () => {
  const userDetailDto = new UserDetailDto({
    id: 'u1',
    email: 'jhon@test.com'
  });

  expect(userDetailDto.get()).not.toHaveProperty('password');
});
