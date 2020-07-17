import { goto, click, text } from 'taiko/lib/taiko';
import FlowManager from '../flows/FlowManager';

let runner;

export default new (class SideNavInteractions {
  constructor() {
    runner = new FlowManager();
  }
  async navigateToPostsPageViaSideNav() {
    await runner.navigateToPostsPage();
  }

  async navigateToUsersPage() {
    await goto('http://127.0.0.1:8000/wp-admin/user-new.php');
  }
})();
