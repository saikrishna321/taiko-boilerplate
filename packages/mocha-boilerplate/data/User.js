var faker = require('faker');

import NewUserBuilder from '../builder/NewUserBuilder';
export default class User {
  static getUser() {
    const userName = faker.name.findName();
    const emailId = faker.internet.email();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    return new NewUserBuilder()
      .userName(userName)
      .email(emailId)
      .firstName(firstName)
      .lastName(lastName)
      .role('Author')
      .build();
  }
}
