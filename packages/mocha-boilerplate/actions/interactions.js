import LoginPage from '../elements/loginPage';
import * as SmartDriver from '../driver/taikoDriver';

export default new (class InterActions {
  async loginWith(username, password) {
    await SmartDriver.login(username, password, LoginPage);
  }

  async navigateToPostsPageViaSideNav() {
    await SmartDriver.navigateToSideNav();
  }
})();
