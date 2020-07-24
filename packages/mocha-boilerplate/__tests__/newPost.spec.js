import {
  openBrowser,
  closeBrowser,
  openIncognitoWindow,
  closeIncognitoWindow,
  setConfig,
  switchTo,
} from 'taiko';

var faker = require('faker');

import { expect } from 'chai';
import { test, suite } from '@testdeck/mocha';
import Admin from '../actor/admin';
import PostInterrogations from '../interrogations/postInterrogations';
import Author from '../actor/author';
import { createUser } from '../data/SeedData';
import { screenShotOnFailure } from '../decorators/ScreenShot';

@suite
class NewPost {
  static async before() {
    setConfig({
      waitForNavigation: true,
      retryTimeout: 2000,
      retryInterval: 10,
    });
    await openBrowser({ headless: true });
  }

  static async after() {
    await closeBrowser();
  }

  async before() {
    await openIncognitoWindow('http://127.0.0.1:8000/wp-login.php', {
      name: 'user',
      navigationTimeout: 10000,
    });

    await openIncognitoWindow('http://127.0.0.1:8000/wp-login.php', {
      name: 'admin',
      navigationTimeout: 10000,
    });
  }

  async after() {
    await closeIncognitoWindow('admin');
    await closeIncognitoWindow('user');
  }
  @test
  async 'Add a new post as Author and Admin should be able to delete the draft'() {
    await switchTo({ name: 'user' });
    const postTitle = faker.name.findName();
    let wpUserAuthor = await createUser('Author');
    let author = new Author(wpUserAuthor);
    await author.login();
    await author.navigateToPostsPageViaSideNav();
    await author.writeNewPost(postTitle);

    await switchTo({ name: 'admin' });
    let wpUserAdmin = await createUser('Admin');
    let admin = new Admin(wpUserAdmin);
    await admin.login();
    await author.navigateToPostsPageViaSideNav();
    await admin.deletePost(postTitle);
    expect(await PostInterrogations.checkIfNewPostIsDeleted(postTitle)).be.true;
  }
}
