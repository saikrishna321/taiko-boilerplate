class ContributorUser {
  constructor(user) {
    this.wpUser = user;
    this.role('Contributor');
  }

  role(arg) {
    return (this.wpUser.role = arg);
  }
}

export default ContributorUser;
