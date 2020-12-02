

/**
 * Establishes connection with the game server
 */

const connect = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => {
    handleUserInput(data);
  });
  return stdin;
};

setupInput();

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

handleUserInput();