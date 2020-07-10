import {
  openBrowser,
  closeBrowser,
  openIncognitoWindow,
  closeIncognitoWindow,
  setConfig,
} from 'taiko';

var faker = require('faker');

import { expect } from 'chai';
import { test, suite } from '@testdeck/mocha';
import Admin from '../actor/admin';
import SideNavInterrogations from '../interrogations/sideNavInterrogations';
import PostInterrogations from '../interrogations/postInterrogations';
import NewUserInterrogations from '../interrogations/newUserInterrogations';
import Author from '../actor/author';
import NewUserBuilder from '../builder/NewUserBuilder';
import { createUser } from '../data/SeedData';
import { screenShotOnFailure } from '../decorators/ScreenShot';

before('open Browser', async () => {
  setConfig({
    waitForNavigation: true,
    retryTimeout: 800,
    retryInterval: 10,
  });
  await openBrowser({ headless: true });
});

afterEach('Close Browser context', async function () {});

after('Close Browser', async () => {
  await closeBrowser();
});
@suite
class Login {
  async before() {
    await openIncognitoWindow('http://127.0.0.1:8000/wp-login.php', {
      name: 'user',
      navigationTimeout: 10000,
    });
  }

  async after() {
    await closeIncognitoWindow('user');
  }
  @test
  async shouldBeAbleToLoginAsAdminAndSeeSettingsOptions() {
    let wpUser = await createUser('Admin');
    let admin = new Admin(wpUser);
    await admin.login();
    await admin.navigateToPostsPageViaSideNav();
    expect(await SideNavInterrogations.checkForSettingsInSideNav()).be.true;
  }

  @test
  async shouldBeAbleToLoginAsAuthorAndNotSeeSettingsOptions() {
    let wpUser = await createUser('Author');
    let author = new Author(wpUser);
    await author.login();
    await author.navigateToPostsPageViaSideNav();
    expect(await SideNavInterrogations.checkForSettingsInSideNav()).be.false;
  }
}
describe.skip('New Post', () => {
  it('Add a new post as Author and Admin should be able to delete the draft', async () => {
    const postTitle = faker.name.findName();
    let wpUserAuthor = await createUser('Author');
    let author = new Author(wpUserAuthor);
    await author.login();
    await author.navigateToPostsPageViaSideNav();
    await author.writeNewPost(postTitle);

    await openIncognitoWindow('http://127.0.0.1:8000/wp-login.php', {
      name: 'admin',
      navigationTimeout: 10000,
    });

    let wpUserAdmin = await createUser('Admin');
    let admin = new Admin(wpUserAdmin);
    await admin.login();
    await author.navigateToPostsPageViaSideNav();
    await admin.deletePost(postTitle);
    expect(await PostInterrogations.checkIfNewPostIsDeleted(postTitle)).be.true;
  });

  afterEach('Close context', async () => {
    await closeIncognitoWindow('admin');
  });
});

describe.skip('New User', () => {
  it('Admin Should be able to create a new user', async () => {
    const userName = faker.name.findName();
    const emailId = faker.internet.email();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const user = new NewUserBuilder()
      .userName(userName)
      .email(emailId)
      .firstName(firstName)
      .lastName(lastName)
      .build();

    let wpUser = await createUser('Admin');
    let admin = new Admin(wpUser);
    await admin.login();
    await admin.navigateToUsersPage();
    await admin.createNewUser(user);
    expect(await NewUserInterrogations.checkIfNewUserIsCreated(user)).be.true;
  });
});
