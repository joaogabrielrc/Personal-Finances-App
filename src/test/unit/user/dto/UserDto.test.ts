import UserDto from '../../../../main/user/dto/UserDto';

test('it should return undefined password to user dtos', () => {
  const userDto = new UserDto({
    id: 'u1',
    email: 'jhon@test.com'
  });

  // @ts-ignore
  expect(userDto.password).toBeUndefined();
});
