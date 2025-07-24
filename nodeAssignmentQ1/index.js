const readline = require('readline');
const calculator = require('./calci');
const _ = require('lodash');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Simple Calculator CLI');
console.log('Supported operations: add, subtract, multiply, divide');
console.log('Example: add 1 2 3 4\n');

rl.question('Enter your command: ', (input) => {
  const [operation, ...nums] = input.trim().split(' ');
  const numbers = nums.map(Number);


  if (numbers.some(isNaN)) {
    console.log('Error: One or more invalid numbers.');
    rl.close();
    return;
  }

  let result;

  switch (operation) {
    case 'add':
      result = _.sum(numbers);
      break;

    case 'subtract':
      result = numbers.reduce((acc, curr) => acc - curr);
      break;

    case 'multiply':
      result = numbers.reduce((acc, curr) => acc * curr, 1);
      break;

    case 'divide':
      if (numbers.slice(1).includes(0)) {
        console.log('Error: Division by zero is not allowed.');
        rl.close();
        return;
      }
      result = numbers.reduce((acc, curr) => acc / curr);
      break;

    default:
      console.log('Error: Unsupported operation.');
      rl.close();
      return;
  }

  console.log(`Result: ${result}`);
  rl.close();
});
