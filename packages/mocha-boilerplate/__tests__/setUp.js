import { mkdirSync } from 'fs';
var rimraf = require('rimraf');

rimraf.sync('reports');
mkdirSync('reports');
mkdirSync('reports/screenshots');
