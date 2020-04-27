import NewPostElements from '../elements/newPostPage';
import { click, write, text, $, waitFor } from 'taiko/lib/taiko';

export default new (class NewPostInterActions {

  async writePost(postTitle) {
    await click(NewPostElements.addNew);
    await click(NewPostElements.closeModal);
    await write(postTitle, NewPostElements.postTitle);
    await click(text('Save Draft'));
    await click(NewPostElements.publish);
    await click(text('Publish'));
    await click(NewPostElements.viewPosts);
    await waitFor(3000);
  }
})();
