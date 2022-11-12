import { BadRequestError } from '../../../main/error';
import UserCreationDto from '../../../main/user/dto/UserCreationDto';
import User from '../../../main/user/User';
import { IUserRepository } from '../../../main/user/UserRepository';
import UserService from '../../../main/user/UserService';
import UserRepositoryFake from './UserRepositoryFake';

describe('User Service Test', () => {
  let userRepository: IUserRepository;
  let userService: UserService;

  beforeAll(() => {
    userRepository = new UserRepositoryFake();
    userService = new UserService(userRepository);
  });

  it('should be able to create a new user', async () => {
    const userForm = new UserCreationDto({
      email: 'jhon@test.com',
      password: '123456'
    });

    const user = new User(userForm.get());
    await userService.save(user.get());

    expect(user.id).toBeTruthy();
  });

  it(`
    should not be able to create two users with the same email address
  `, async () => {
    const userForm = new UserCreationDto({
      email: 'jhon2@test.com',
      password: '123456'
    });
    const user = new User(userForm.get());

    await userService.save(user.get());
    await expect(userService.save(user.get())).rejects.toThrow(
      new BadRequestError(null)
    );
  });
});
