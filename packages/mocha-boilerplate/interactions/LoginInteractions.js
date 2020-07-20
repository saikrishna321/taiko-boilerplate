import LoginPage from '../elements/loginPage';
import { write, click } from 'taiko';

export default new (class LoginInterActions {
  async loginWith(username, password) {
    await write(username, await new LoginPage().userName());
    await write(password, LoginPage.password);
    await click(LoginPage.loginButton);
  }
})();
