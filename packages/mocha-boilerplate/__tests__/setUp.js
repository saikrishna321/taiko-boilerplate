import { mkdirSync } from 'fs';
var rimraf = require('rimraf');
import { resolve } from 'path';
const dotenv = require('dotenv');
const envPath = resolve(__dirname, '../../../');
dotenv.config({ path: `${envPath}/.env` });

rimraf.sync('reports');
mkdirSync('reports');
mkdirSync('reports/screenshots');
