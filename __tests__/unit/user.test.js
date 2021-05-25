import bcrypt from 'bcryptjs';
import factory from '../factories';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });
  it('should be able to create a user using name,email', async () => {
    const user = await factory.create('User');
    expect(user).toHaveProperty('id');
  });

  it('should encrypt password when new user created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });
    const compareHash = await bcrypt.compare('123456', user.password_hash);
    expect(compareHash).toBe(true);
  });
});
