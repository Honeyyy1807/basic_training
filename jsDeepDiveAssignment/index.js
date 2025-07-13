//Q1.Create a function to calculate the factorial of a number using closure
function fact(){
    return function createFact(n) {
       if (n<0) {
           return "undefined";
       }
       if (n === 0 || n === 1) {
           return 1;
       }
       return n * createFact(n - 1);
    }
}

let factorial = fact();
factorial(5); 
factorial(0)
factorial(-1);


//Q2.Write a JavaScript program to test if the first character of a string is uppercase or not, if not then set the first character to uppercase
function capitalize(str) {
    if (str.length === 0) {
        return str; 
    }
    if (str[0] === str[0].toUpperCase()) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1); 
}

capitalize("hello world");
capitalize("Hello world");
capitalize("hELLO WORLD");

/*Q3.Create a constructor function Calculator that creates objects with 3 methods:
read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.*/
function Calculator() {
    this.a = 0;
    this.b = 0;

    this.read = function() {
        this.a = parseInt(prompt("Enter first number:"));
        this.b = parseInt(prompt("Enter second number:"));
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calculator();
calc.read();
console.log("Sum: " + calc.sum());
console.log("Multiplication: " + calc.mul());

//Q4.Deep clone Javascript Object (without using any internal methods of cloning). All properties along with functions, prototypes should get cloned to target objects.
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }

    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]); 
        }
    }

    return clone;
}