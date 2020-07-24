import {
  openBrowser,
  closeBrowser,
  openIncognitoWindow,
  closeIncognitoWindow,
  setConfig,
} from 'taiko';

import { expect } from 'chai';
import { test, suite } from '@testdeck/mocha';
import Admin from '../actor/admin';
import SideNavInterrogations from '../interrogations/sideNavInterrogations';
import NewUserInterrogations from '../interrogations/newUserInterrogations';
import Author from '../actor/author';
import User from '../data/User';
import ContributorUser from '../data/ContributorUser';
import { createUser, createNewUser } from '../data/SeedData';
import logger from '../utils/logger';
@suite
class Login {
  static async before() {
    setConfig({
      waitForNavigation: true,
      retryTimeout: 800,
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

  @test
  async shouldBeAbleToLoginWithNewlyCreatedUser() {
    const user = User.getUser();
    const contributorUser = new ContributorUser(user);
    let { wpUserData } = await createNewUser('administrator');
    let admin = new Admin(wpUserData);
    await admin.login();
    await admin.navigateToUsersPage();
    await admin.createNewUser(contributorUser);
    expect(await NewUserInterrogations.checkIfNewUserIsCreated(user)).be.true;
  }
}
