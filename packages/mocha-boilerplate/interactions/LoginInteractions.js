import LoginPage from '../elements/loginPage';
import { write, click } from 'taiko/lib/taiko';

export default new (class LoginInterActions {
  async loginWith(username, password) {
    await write(username, LoginPage.username);
    await write(password, LoginPage.password);
    await click(LoginPage.loginButton);
  }
})();
