import { MySqlDBClient } from 'db-client';
import { createData } from './createFakeData';
import { post } from '../api/Api';
import logger from '../utils/logger';

async function createUser(name) {
  const wordpressUserDetails = createData();
  await MySqlDBClient.createUser(
    Object.assign({ role: name, roleData: wordpressUserDetails })
  );
  return wordpressUserDetails;
}

async function createNewUser(role) {
  const wpUserData = Object.assign({}, { role: role }, createData());
  logger.info('Creating User with details...', JSON.stringify(wpUserData));
  return {
    response: await post('/users', {
      username: wpUserData.user,
      email: wpUserData.email,
      password: wpUserData.password,
      roles: [wpUserData.role],
    }),
    wpUserData,
  };
}

export { createUser, createNewUser };
