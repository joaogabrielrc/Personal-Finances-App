import UserDetailDto from '../../../../main/user/dto/UserDetailDto';

test('it should return undefined password to user detail dto', () => {
  const userDetailDto = new UserDetailDto({
    id: 'u2',
    email: 'marie@test.com'
  });

  // @ts-ignore
  expect(userDetailDto.password).toBeUndefined();
});
