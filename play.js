const connect = require('./client');
const setupInput = require('./Input')

/**
 * Establishes connection with the game server
 */

connection = connect();

console.log('Connecting ...');

setupInput(connection);