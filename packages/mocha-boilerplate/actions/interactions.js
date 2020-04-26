import LoginPage from '../elements/loginPage';
import * as SmartDriver from '../driver/taikoDriver';
import { goto } from 'taiko/lib/taiko';

export default new (class InterActions {
  async loginWith(username, password) {
    await SmartDriver.login(username, password, LoginPage);
  }

  async navigateToPostsPageViaSideNav() {
    await SmartDriver.navigateToSideNav('Posts');
  }

  async navigateToUsersPage() {
    await goto('http://127.0.0.1:8000/wp-admin/user-new.php');
  }
})();
