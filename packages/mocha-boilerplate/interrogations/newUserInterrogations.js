import { write, click, into, $, below, text } from 'taiko';

export default {
  async checkIfNewUserIsCreated(user) {
    console.log(user.userName);
    await write(user.userName, into($('#user-search-input')));
    await click(text('Search Users'));
    return await text(user.userName, below('Username')).exists();
  },
};
