import PostPage from '../elements/postPage';
import { click, text, waitFor, screenshot } from 'taiko';

export default {
  async checkIfNewPostIsDeleted(title) {
    await click(PostPage.trash);
    return await text(title).exists();
  },
};
