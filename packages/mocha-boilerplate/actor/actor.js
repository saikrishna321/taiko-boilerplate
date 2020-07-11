import actorData from './actorData';
import { find } from 'lodash';
import LoginInteractions from '../interactions/LoginInteractions';
import SideNavInteractions from '../interactions/sideNavInteractions';
import Log from '../decorators/Log';

export default class Actor {
  getActor() {
    return find(actorData, { role: this.constructor.name });
  }

  @Log('Login')
  async login() {
    await LoginInteractions.loginWith(this.username, this.password);
  }

  async navigateToPostsPageViaSideNav() {
    await SideNavInteractions.navigateToPostsPageViaSideNav();
  }

  async navigateToUsersPage() {
    await SideNavInteractions.navigateToUsersPage();
  }
}
