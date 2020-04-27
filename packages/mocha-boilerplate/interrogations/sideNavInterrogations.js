import SideNav from '../elements/sideNav'

export default {
  async checkForSettingsInSideNav() {
    return await SideNav.settings.exists();
  }
};
