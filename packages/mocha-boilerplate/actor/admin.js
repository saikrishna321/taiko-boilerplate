import Actor from './actor';
import PostInteractions from '../interactions/postInteractions';
import NewUserInteractions from '../interactions/newUserInteractions';

import Log from '../decorators/Log';
export default class Admin extends Actor {
  constructor(wpUser) {
    super();
    this.username = wpUser.user;
    this.password = wpUser.password;
  }

  @Log('Delete Post')
  async deletePost(postTitle) {
    await PostInteractions.deletePost(postTitle);
  }

  async createNewUser(user) {
    await NewUserInteractions.newUser(user);
  }
}
