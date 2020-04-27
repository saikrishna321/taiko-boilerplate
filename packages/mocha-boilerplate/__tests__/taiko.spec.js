import {
  openBrowser,
  closeBrowser,
  openIncognitoWindow,
  closeIncognitoWindow,
  setConfig,
  screenshot,
} from 'taiko';

var faker = require('faker');
const addContext = require('mochawesome/addContext');

import { expect } from 'chai';
import Admin from '../actor/admin';
import SideNavInterrogations from '../interrogations/sideNavInterrogations';
import PostInterrogations from '../interrogations/postInterrogations';
import NewUserInterrogations from '../interrogations/newUserInterrogations';
import Author from '../actor/author';

import NewUserBuilder from '../builder/NewUserBuilder';

before('open Browser', async () => {
  setConfig({
    waitForNavigation: true,
    retryTimeout: 800,
    retryInterval: 10,
  });
  await openBrowser({ headless: true });
});

beforeEach('Open Browser context', async () => {
  await openIncognitoWindow('http://127.0.0.1:8000/wp-login.php', {
    name: 'user',
    navigationTimeout: 10000,
  });
});

afterEach('Close Browser context', async function () {
  if (this.currentTest.state === 'failed') {
    let testTitle = this.currentTest.title.replace(/ /g, '_');
    await screenshot({ path: `reports/screenshots/${testTitle}.png` });
    addContext(this, `../screenshots/${testTitle}.png`);
  }
  await closeIncognitoWindow('user');
});

after('Close Browser', async () => {
  await closeBrowser();
});

describe('Login', () => {
  it('Should be able to login as admin and see settings option', async () => {
    let admin = new Admin();
    await admin.login();
    await admin.navigateToPostsPageViaSideNav();
    expect(await SideNavInterrogations.checkForSettingsInSideNav()).be.true;
  });

  it('Should be able to login as author and not see settings option', async () => {
    let author = new Author();
    await author.login();
    await author.navigateToPostsPageViaSideNav();
    expect(await SideNavInterrogations.checkForSettingsInSideNav()).be.false;
  });
});

describe('New Post', () => {
  it('Add a new post as Author and Admin should be able to delete the draft', async () => {
    const postTitle = faker.name.findName();
    let author = new Author();
    await author.login();
    await author.navigateToPostsPageViaSideNav();
    await author.writeNewPost(postTitle);

    await openIncognitoWindow('http://127.0.0.1:8000/wp-login.php', {
      name: 'admin',
      navigationTimeout: 10000,
    });
    let admin = new Admin();
    await admin.login();
    await author.navigateToPostsPageViaSideNav();
    await admin.deletePost(postTitle);
    expect(await PostInterrogations.checkIfNewPostIsDeleted(postTitle)).be.true;
  });

  afterEach('Close context', async () => {
    await closeIncognitoWindow('admin');
  });
});

describe('New User', () => {
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

    let admin = new Admin();
    await admin.login();
    await admin.navigateToUsersPage();
    await admin.createNewUser(user);
    expect(await NewUserInterrogations.checkIfNewUserIsCreated(user)).be.true;
  });
});
