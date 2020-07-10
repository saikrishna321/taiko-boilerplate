import Actor from './actor';
import NewPostInterActions from '../interactions/newPostInteractions';

//Actor is open for extension and closed for modifications
export default class Author extends Actor {
  constructor(wpuser) {
    super();
    this.username = wpuser.user;
    this.password = wpuser.password;
  }

  async writeNewPost(postTitle) {
      await NewPostInterActions.writePost(postTitle);
  }
}
