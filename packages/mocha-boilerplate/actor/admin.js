import Actor from './actor';
import PostInteractions from '../interactions/postInteractions';

export default class Admin extends Actor {
  constructor(username) {
    super(username);
  }

  async deletePost(postTitle) {
    await PostInteractions.deletePost(postTitle);
  }
}
