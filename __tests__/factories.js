import faker from 'faker';
import { factory } from 'factory-girl';

import User from '../src/app/models/User';
import Doctor from '../src/app/models/Doctor';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

factory.define('Doctor', Doctor, {
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  crm: faker.random.alpha(),
});
// factory.define('UserWithoutCredentials', User, {
//   name: null,

// })

export default factory;
