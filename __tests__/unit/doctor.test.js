// import Doctor from '../../src/app/models/Doctor';
import factory from '../factories';
import truncate from '../util/truncate';

describe('Doctor', () => {
  beforeEach(async () => {
    await truncate();
  });
  it('should be able to create a doctor using first_name,email', async () => {
    const user = await factory.create('Doctor');
    expect(user).toHaveProperty('id');
  });
});
