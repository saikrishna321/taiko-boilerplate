const mysql = require('mysql');
const util = require('util');

export default {
  async findUser(user) {
    const queryRes = await query(
      `SELECT * from wordpress.wp_users where user_login  = '${user}'`
    );
  },

  async createUser(options) {
    const role = {
      Admin: {
        permissions: 'a:1:{s:13:"administrator";s:1:"1";}',
        level: '10',
      },

      Author: { permissions: 'a:1:{s:6:"author";b:1;}', level: '0' },
    };
    const wpUsers = await query(
      `INSERT INTO wordpress.wp_users (ID, user_login, user_pass, user_nicename, user_email, user_url, user_registered, user_activation_key, user_status, display_name) VALUES ('${options.roleData.id}', '${options.roleData.user}', MD5('${options.roleData.password}'), '${options.roleData.name}', 'test@yourdomain.com', 'http://www.test.com/', '2011-06-07 00:00:00', '', '0', 'Your Name');`
    );

    await query(`INSERT INTO wordpress.wp_usermeta (umeta_id, user_id, meta_key, meta_value) VALUES (NULL, '${
      options.roleData.id
    }', 'wp_capabilities', '${role[options.role].permissions}');
    `);

    await query(
      `INSERT INTO wordpress.wp_usermeta (umeta_id, user_id, meta_key, meta_value) VALUES (NULL, '${
        options.roleData.id
      }', 'wp_user_level', '${role[options.role].level}');`
    );
  },
};

async function query(sql) {
  let conn;
  try {
    conn = mysql.createConnection({
      user: process.env.DB_USER || 'wordpress',
      password: process.env.DB_PASSWORD || 'wordpress',
      server: process.env.DB_HOST || 'localhost',
      port: 3306,
      database: 'wordpress',
      options: {
        enableArithAbort: true,
      },
    });
    const query = util.promisify(conn.query).bind(conn);
    return await query(sql);
  } finally {
    conn.end();
  }
}
