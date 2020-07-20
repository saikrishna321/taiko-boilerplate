import { $ } from 'taiko';
import ElementChain from '../chaining/Chain';
class LoginPage {
  async userName() {
    let chain = new ElementChain();
    chain
      .add($('#user_login0'))
      .add($('#user_login0'))
      .add($('#user_login'))
      .add($('#user_login1'));
    let element = await chain.findElementsByChain();
    return element;
  }

  static get password() {
    return $('#user_pass');
  }

  static get loginButton() {
    return $('#wp-submit');
  }
}

export default LoginPage;
