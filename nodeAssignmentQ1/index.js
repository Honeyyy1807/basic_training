const readline = require('readline');
const calculator = require('./calci');
const _=require('lodash')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Simple Calculator CLI');
console.log('Supported operations: add, subtract, multiply, divide');
console.log('Example: add 5 3\n');

rl.question('Enter your command: ', (input) => {
  const [operation, num1, num2] = input.trim().split(' ');
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    console.log('Error: Invalid numbers.');
    rl.close();
    return;
  }

  let result;
  switch (operation) {
    case 'add':
      result = calculator.add(a, b);
      break;
    case 'subtract':
      result = calculator.subtract(a, b);
      break;
    case 'multiply':
      result = calculator.multiply(a, b);
      break;
    case 'divide':
      result = calculator.divide(a, b);
      break;
    default:
      console.log('Error: Unsupported operation.');
      rl.close();
      return;
  }

  console.log(`Result: ${result}`);
  rl.close();
});