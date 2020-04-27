import actorData from './actorData';
import _ from 'lodash';
import LoginInteractions from '../interactions/LoginInteractions';
import SideNavInteractions from '../interactions/sideNavInteractions';

export default class Actor {
  constructor() {
    let actor = this.getActor();
    this.username = actor.username;
    this.password = actor.password;
  }

  getActor() {
    return _.find(actorData, { role: this.constructor.name });
  }

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
