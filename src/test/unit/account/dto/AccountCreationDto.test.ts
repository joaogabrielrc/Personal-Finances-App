import AccountCreationDto from '../../../../main/account/dto/AccountCreationDto';

describe('Account Creation Dto Test', () => {
  it('should return a clean form', () => {
    const accountForm = new AccountCreationDto({
      userForm: {
        email: '   joHn@TEST.com  ',
        password: '123456',
        firstName: 'JhOn ',
        lastName: ' dOe'
      }
    });

    expect(accountForm.get()).toHaveProperty('userForm', {
      email: 'john@test.com',
      password: '123456',
      firstName: 'jhon',
      lastName: 'doe'
    });
  });
});
