import NewPostElements from '../elements/newPostPage';

export default {
  async checkIfPublishIsEnabled() {
    return NewPostElements.publish().exists();
  },
};
