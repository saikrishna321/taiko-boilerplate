## Taiko boilerplate code repo


Tests run against local wordpress app. 

* You need to spin up a local instance using `docker-compose up -d`

* Navigate to http://127.0.0.1:8000/wp-admin/install.php and setup the application and create a user account to login into Wordpress Dashboard.

* Update the credentials details https://github.com/saikrishna321/taiko-boilerplate/blob/master/packages/mocha-boilerplate/actor/actorData.js

### Execute Scripts

`npm install`

`npm run bootstrap`

`npm run mocha-test`
