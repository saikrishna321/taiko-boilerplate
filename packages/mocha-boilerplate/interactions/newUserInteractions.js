import UserPage from '../elements/userPage';
import { click, write, toRightOf, into, below, textBox, dropDown } from 'taiko/lib/taiko';

export default new (class NewUserInteractions {
  async newUser(user) {
    await click(UserPage.addNewUser);
    const wordPressUser = user.wpUser;
    await write(wordPressUser.userName, into(textBox(toRightOf('Username'))));
    await write(wordPressUser.email, into(textBox(toRightOf('Email'))));
    await write(wordPressUser.firstName, into(textBox(toRightOf('First Name'))));
    await write(wordPressUser.lastName, into(textBox(toRightOf('Last Name'))));
    await dropDown().select(user.wpUser.role);
    await click('Add New User', below('Role'));
  }
})();
