const Input = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => {
    handleUserInput(data);
  });
  return stdin;
};

Input();

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

handleUserInput();

module.exports = Input;