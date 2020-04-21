import Actor from './actor';
import NewPostInterActions from '../interactions/newPostInteractions';

//Actor is open for extension and closed for modifications
export default class Author extends Actor {
  constructor() {
    super();
  }

  async writeNewPost(postTitle) {
      await NewPostInterActions.writePost(postTitle);
  }
}
