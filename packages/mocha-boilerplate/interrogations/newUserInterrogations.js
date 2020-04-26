import { text } from 'taiko/lib/taiko';

export default {
  async checkIfNewUserIsCreated(user) {
    return await text(user.userName).exists();
  },
};
