import PostPage from '../elements/postPage';
import { click, text } from 'taiko/lib/taiko';

export default {
  async checkIfNewPostIsDeleted(title) {
    await click(PostPage.trash);
    return await text(title).exists();
  },
};
