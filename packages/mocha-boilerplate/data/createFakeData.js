var faker = require('faker');

export function createData() {
  return {
    user: faker.name.findName(),
    password: faker.internet.password(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    id: Math.floor(100 + Math.random() * 90000),
  };
}
