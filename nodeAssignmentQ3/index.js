const calculator= require('./calci');

const args=process.argv
let [,,command, num1, num2]=args
num1=parseFloat(num1)
num2=parseFloat(num2)
if (isNaN(num1) || isNaN(num2)) {
    console.error('Please provide two valid numbers.');
    process.exit(1);
}   

let result;
switch (command) {
    case 'add':
        result = calculator.add(num1, num2);
        console.log(`Result: ${result}`);
        break;
    case 'subtract':
        result = calculator.subtract(num1, num2);
        console.log(`Result: ${result}`);
        break;
    case 'multiply':
        result = calculator.multiply(num1, num2);           
        console.log(`Result: ${result}`);
        break;  
    case 'divide':
        try {
            result = calculator.divide(num1, num2);
            console.log(`Result: ${result}`);
        } catch (error) {
            console.error(error.message);
        }
        break;
    default:
        console.error('Unknown command. Please use add, subtract, multiply, or divide.');
        process.exit(1);
}
console.log(`${num1} ${command} ${num2} = ${result}`);
process.exit(0);

