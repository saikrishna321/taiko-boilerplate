import { $ } from 'taiko';

class SideNav {
  static get settings() {
    return $('#menu-settings');
  }

  static get menuToggle() {
    return $('#wp-admin-bar-menu-toggle')
  }
}

export default SideNav;