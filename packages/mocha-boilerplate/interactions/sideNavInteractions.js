import { goto, click, text } from 'taiko/lib/taiko';

export default new (class SideNavInteractions {

  async navigateToPostsPageViaSideNav() {
    await click(text('Posts'));
  }

  async navigateToUsersPage() {
    await goto('http://127.0.0.1:8000/wp-admin/user-new.php');
  }
})();