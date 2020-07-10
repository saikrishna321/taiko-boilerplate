import { mkdirSync } from 'fs';
var rimraf = require('rimraf');
import MochaListener from '../data/mochaListener'
rimraf.sync('reports');
mkdirSync('reports');
mkdirSync('reports/screenshots');
