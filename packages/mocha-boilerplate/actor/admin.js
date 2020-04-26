import Actor from './actor';
import PostInteractions from '../interactions/postInteractions';
import NewUserInteractions from '../interactions/newUserInteractions'

export default class Admin extends Actor {
  constructor(username) {
    super(username);
  }

  async deletePost(postTitle) {
    await PostInteractions.deletePost(postTitle);
  }

  async createNewUser(user) {
    await NewUserInteractions.newUser(user);
  }
}
