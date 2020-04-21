import { $ } from 'taiko';
import { text, toRightOf } from 'taiko/lib/taiko';

class PostElements {
  static get postTitle() {
    return $('#the-list');
  }

  static get trashPost() {
    return text('Trash', toRightOf('Quick Edit'));
  }

  static get trash() {
    return text('Trash');
  }
}

export default PostElements;
