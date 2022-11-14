// @ts-nocheck
import app from '../../../main/App';
import request from 'supertest';
import prismaClient from '../../../main/database/data-source';

describe('Account Controller Test', () => {
  describe('POST /api/v1/accounts', () => {
    it('should be able create a new account', async () => {
      const requestBody = {
        user: {
          email: 'jhon@test.com',
          password: '123456',
          firstName: 'Jhon',
          lastName: 'Doe'
        }
      };

      const response = await request(app)
        .post('/api/v1/accounts')
        .send(requestBody);

      expect(response.statusCode).toEqual(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.user).toHaveProperty('id');
    });

    it('should return user already exists', async () => {
      const requestBody = {
        user: {
          email: 'jhon@test.com',
          password: '123456',
          firstName: 'Jhon',
          lastName: 'Doe'
        }
      };

      await request(app).post('/api/v1/accounts').send(requestBody);
      const response = await request(app)
        .post('/api/v1/accounts')
        .send(requestBody);

      expect(response.statusCode).toEqual(400);
      expect(response.body).toHaveProperty('message', 'User already exists');
    });

    it('should return account required properties', async () => {
      const response = await request(app).post('/api/v1/accounts').send();

      expect(response.statusCode).toEqual(400);
      expect(response.body).toEqual({
        user: {
          email: 'E-mail is required',
          password: 'Password is required',
          firstName: 'First name is required',
          lastName: 'Last name is required'
        }
      });
    });

    it('should return account required properties', async () => {
      const requestBody = {
        user: {
          email: 'jhon',
          password: '123456',
          firstName: 'Jhon',
          lastName: 'Doe'
        }
      };

      const response = await request(app)
        .post('/api/v1/accounts')
        .send(requestBody);

      expect(response.statusCode).toEqual(400);
      expect(response.body).toEqual({
        user: {
          email: 'Invalid e-mail address'
        }
      });
    });
  });

  afterEach(async () => {
    await prismaClient.account.deleteMany();
    await prismaClient.user.deleteMany();
  });
});
