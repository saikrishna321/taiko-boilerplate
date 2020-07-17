import SideNav from '../elements/sideNav';
import { click, text, toRightOf, below } from 'taiko';
export default class MobileFlow {
  async navigateToPostsPage() {
    console.log('Inside Mobile Flow');
    await click(SideNav.menuToggle);
    await click(text('Posts'));
  }

  async deletePost(title) {
    await click(text('All Posts'));
    await click(text('Trash'), toRightOf(text('Quick Edit', below(title))));
  }
}
