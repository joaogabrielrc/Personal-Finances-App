import UserCreationDto from '../../../../main/user/dto/UserCreationDto';

describe('User Creation Dto Test', () => {
  it('should return a clean form', () => {
    const userForm = new UserCreationDto({
      email: '   joHn@TEST.com  ',
      password: '123456',
      firstName: 'JhOn ',
      lastName: ' dOe'
    });

    expect(userForm.get()).toHaveProperty('email', 'john@test.com');
    expect(userForm.get()).toHaveProperty('password', '123456');
    expect(userForm.get()).toHaveProperty('firstName', 'jhon');
    expect(userForm.get()).toHaveProperty('lastName', 'doe');
  });
});
