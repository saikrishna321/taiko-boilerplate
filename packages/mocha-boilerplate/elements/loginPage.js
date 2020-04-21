import { $ } from 'taiko';

class LoginPage {
  static get userName() {
    return $("[data-id='user_login']");
  }

  static get password() {
    return $('#user_pass');
  }

  static get loginButton() {
      return $('#wp-submit');
  }
}

export default LoginPage;