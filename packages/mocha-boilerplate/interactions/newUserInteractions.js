import UserPage from '../elements/userPage';
import { click, write, toRightOf, into, below, textBox } from 'taiko/lib/taiko';

export default new (class NewUserInteractions {
  async newUser(user) {
    await click(UserPage.addNewUser);
    await write(user.userName, into(textBox(toRightOf('Username'))));
    await write(user.email, into(textBox(toRightOf('Email'))));
    await write(user.firstName, into(textBox(toRightOf('First Name'))));
    await write(user.lastName, into(textBox(toRightOf('Last Name'))));
    await click('Add New User', below('Role'));
  }
})();
