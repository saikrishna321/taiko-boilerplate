import NewUser from './NewUser';

class NewUserBuilder {
  userName(userName) {
    this.userName = userName;
    return this;
  }

  email(email) {
    this.email = email;
    return this;
  }

  firstName(firstname) {
    this.firstName = firstname;
    return this;
  }

  lastName(lastname) {
    this.lastName = lastname;
    return this;
  }

  role(role) {
    this.role = role;
    return this;
  }

  build() {
    return new NewUser(this);
  }
}

export default NewUserBuilder;
