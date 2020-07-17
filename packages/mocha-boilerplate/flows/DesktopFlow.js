import { click, text } from 'taiko/lib/taiko';
import PostPage from '../elements/postPage';
import { click, hover, text } from 'taiko';
export default class DesktopFlow {
  async navigateToPostsPage() {
    console.log('Inside Desktop Flow');
    await click(text('Posts'));
  }

  async deletePost(title) {
    await hover(text(title));
    await click(PostPage.trashPost);
  }
}
