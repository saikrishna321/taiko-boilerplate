import {
  write,
  click,
  text,
} from 'taiko';

export async function login(user, pass, loginPage) {
  await write(user, loginPage.username);
  await write(pass, loginPage.password);
  await click(loginPage.loginButton);
}

export async function navigateToSideNav() {
  await click(text('Posts'));
}
