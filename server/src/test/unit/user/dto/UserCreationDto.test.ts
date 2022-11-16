import UserCreationDto from '../../../../main/user/dto/UserCreationDto';

describe('User Creation Dto Test', () => {
  it('should return a clean form', () => {
    const userForm = new UserCreationDto({
      email: '   joHn@TEST.com  ',
      password: '12345678',
      firstName: 'JhOn ',
      lastName: ' dOe'
    });

    expect(userForm.get()).toHaveProperty('email', 'john@test.com');
    expect(userForm.get()).toHaveProperty('password', '12345678');
    expect(userForm.get()).toHaveProperty('firstName', 'jhon');
    expect(userForm.get()).toHaveProperty('lastName', 'doe');
  });
});
