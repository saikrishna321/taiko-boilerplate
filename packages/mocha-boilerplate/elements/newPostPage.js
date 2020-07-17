import { $, text, toRightOf } from 'taiko';

class NewPostElements {
  static get publish() {
    return text('Publish');
  }

  static get closeModal() {
    return $('div.components-modal__header>button');
  }

  static get addNew() {
    return text('Add New');
  }

  static get postTitle() {
    return $('#post-title-0');
  }

  static get viewPosts() {
    return $("//*[@class='post-publish-panel__postpublish-buttons']/a");
  }

  static get publish() {
    return $(
      '.components-button.editor-post-publish-panel__toggle.editor-post-publish-button__button.is-primary'
    );
  }
}

export default NewPostElements;
