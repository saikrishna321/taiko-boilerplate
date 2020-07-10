import Actor from './actor';
import PostInteractions from '../interactions/postInteractions';
import NewUserInteractions from '../interactions/newUserInteractions';
import createUser from '../data/SeedData';

export default class Admin extends Actor {
  constructor(wpUser) {
    super();
    this.username = wpUser.user;
    this.password = wpUser.password;
  }

  async deletePost(postTitle) {
    await PostInteractions.deletePost(postTitle);
  }

  async createNewUser(user) {
    await NewUserInteractions.newUser(user);
  }
}
