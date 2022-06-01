'use strict';

require('dotenv').config();

const server = require('./src/server');
// import { start } from './src/server';

let PORT = process.env.PORT || 3000;

//start(PORT);
server.start(PORT);