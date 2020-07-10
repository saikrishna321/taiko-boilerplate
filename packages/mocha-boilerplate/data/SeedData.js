import { MySqlDBClient } from 'db-client';
import { createData } from './createFakeData';

async function createUser(name) {
  const wordpressUserDetails = createData();
  await MySqlDBClient.createUser(
    Object.assign({ role: name, roleData: wordpressUserDetails })
  );
  return wordpressUserDetails;
}

export { createUser };
