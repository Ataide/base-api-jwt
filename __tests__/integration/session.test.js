import request from 'supertest';
import factory from '../factories';
import app from '../../src/app';

describe('SessionAuthentication', () => {
  it('should be not able to access private router with invalid jwt return 401', async () => {
    const { token } =
      'eyhhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUzLCJpYXQiOjE2MjE5ODQwMjcsImV4cCI6MTYyMTk4NDAyOH0.i2Zgm3ryve8MdfTgSTw4d7He7L9YLxpPypXg3cr_FeM';

    await request(app)
      .get('/home')
      .set('Authorization', `Bearer ${token}`)
      .expect(401);
  });

  it('should be able to access private router with valid jwt', async () => {
    await factory.create('User', {
      email: 'ataide@gmail.com',
      password: '123456',
    });

    const authResponse = await request(app).post('/auth').send({
      email: 'ataide@gmail.com',
      password: '123456',
    });

    const { token } = authResponse.body;

    await request(app)
      .get('/home')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('should be able to get a jwt token with valid credentials', async () => {
    await factory.create('User', {
      email: 'ataide@gmail.com',
      password: '123456',
    });

    const response = await request(app).post('/auth').send({
      email: 'ataide@gmail.com',
      password: '123456',
    });
    expect(response.body).toHaveProperty('token');
  });

  it('should return a 401 when wrong credentials', async () => {
    await factory.create('User', {
      email: 'ataide@gmail.com',
      password: '123456',
    });

    const response = await request(app).post('/auth').send({
      email: 'ataide@gmail.com',
      password: '123455',
    });
    expect(response.status).toBe(401);
  });

  describe('Register', () => {
    it('/register 400 invalid-parms', async () => {
      const response = await request(app).post('/register').send({});
      expect(response.status).toBe(400);
    });

    it('/register router ok.', async () => {
      const validParms = await factory.attrs('User');
      const response = await request(app).post('/register').send(validParms);
      expect(response.status).toBe(200);
    });

    it('/register should not able to register with same email', async () => {
      await factory.create('User', {
        email: 'same_email@gmail.com',
      });

      const second_user = await factory.attrs('User', {
        email: 'same_email@gmail.com',
      });
      const response = await request(app).post('/register').send(second_user);
      expect(response.status).toBe(400);
    });
  });
});
