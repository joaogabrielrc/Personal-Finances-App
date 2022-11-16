// @ts-nocheck
import Account from '../../../main/account/Account';
import AccountService from '../../../main/account/AccountService';
import AccountCreationDto from '../../../main/account/dto/AccountCreationDto';
import UserService from '../../../main/user/UserService';
import UserRepositoryFake from '../user/UserRepositoryFake';
import AccountRepositoryFake from './AccountRepositoryFake';

describe('Account Service Test', () => {
  let accountService: AccountService;

  beforeAll(() => {
    const userRepository = new UserRepositoryFake();
    const userService = new UserService(userRepository);
    const accountRepository = new AccountRepositoryFake();
    accountService = new AccountService(userService, accountRepository);
  });

  it('should be able to create a new account', async () => {
    const accountForm = new AccountCreationDto({
      user: {
        email: 'jhon@test.com',
        password: '12345678',
        firstName: 'Jhon',
        lastName: 'Doe'
      }
    });

    const account = new Account(accountForm.get());    
    await accountService.save(account.get());

    expect(account.id).toBeTruthy();
  });
});
