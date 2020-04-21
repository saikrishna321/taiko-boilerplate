import actorData from './actorData';
import _ from 'lodash';
import Interactions from '../actions/interactions';
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
    await Interactions.loginWith(this.username, this.password);
  }

  async navigateToPostsPageViaSideNav() {
    await Interactions.navigateToPostsPageViaSideNav();
  }
}
