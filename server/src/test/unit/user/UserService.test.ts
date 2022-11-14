// @ts-nocheck
import { BadRequestError } from '../../../main/error';
import UserCreationDto from '../../../main/user/dto/UserCreationDto';
import User from '../../../main/user/User';
import UserService from '../../../main/user/UserService';
import UserRepositoryFake from './UserRepositoryFake';

describe('User Service Test', () => {
  let userService: UserService;

  beforeAll(() => {
    const userRepository = new UserRepositoryFake();
    userService = new UserService(userRepository);
  });

  it('should return a user by email', async () => {
    const userForm = new UserCreationDto({
      email: 'jhon1@test.com',
      password: '123456',
      firstName: 'Jhon',
      lastName: 'Doe'
    });

    const user = new User(userForm.get());
    await userService.save(user.get());

    const userByEmail = await userService.findByEmail(user.email);

    expect(userByEmail).toEqual(user.get());
  });

  it('should be able to create a new user', async () => {
    const userForm = new UserCreationDto({
      email: 'jhon2@test.com',
      password: '123456',
      firstName: 'Jhon',
      lastName: 'Doe'
    });

    const user = new User(userForm.get());
    await userService.save(user.get());

    expect(user.id).toBeTruthy();
  });

  it(`
    should not be able to create two users with the same email address
  `, async () => {
    const userForm = new UserCreationDto({
      email: 'jhon3@test.com',
      password: '123456',
      firstName: 'Jhon',
      lastName: 'Doe'
    });
    const user = new User(userForm.get());

    await userService.save(user.get());
    await expect(userService.save(user.get())).rejects.toThrow(
      new BadRequestError('User already exists')
    );
  });
});
