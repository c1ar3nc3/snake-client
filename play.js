const connect = require('./client');
const setupInput = require('./Input')

/**
 * Establishes connection with the game server
 */


console.log('Connecting ...');
connect();

setupInput();