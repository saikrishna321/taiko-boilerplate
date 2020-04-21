import PostPage from '../elements/postPage';
import { screenshot, hover, click, text } from 'taiko/lib/taiko';

export default new (class PostInteractions {
  async deletePost(title) {
    await hover(text(title));
    await click(PostPage.trashPost);
  }
})();
