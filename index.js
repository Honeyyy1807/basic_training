//Q1. Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or higher than the value 10.
function testNum(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("The number is less than 10");
    } else if (num > 10) {
      resolve("The number is greater than 10");
    } else {
      reject("The number is equal to 10");
    }
  });
}

//Q2.Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the Array contains anything but Strings, it should throw an error.
function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every(item => typeof item === 'string')) {
      const capitalized = arr.map(word => word.toUpperCase());
      resolve(capitalized);
    } else {
      reject("Array must contain only strings");
    }
  });
}function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      reject("Array is empty");
    } else {
      const sorted = arr.sort();
      resolve(sorted);
    }
  });
}   
makeAllCaps(['hello', 'world'])
  .then(sortedWords => sortWords(sortedWords))
  .then(sorted => console.log(sorted))
  .catch(error => console.error(error));

//Q3. Using Promise create a function named 'sleep' that should invoke a callback function after x seconds. NOTE: sleep function should not block the call stack
function sleep(seconds, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, seconds * 1000);
  });
}

sleep(2, () => console.log("Callback invoked after 2 seconds"))
  .catch(error => console.error(error));    

//Q4.Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds). We need to modify it using promises to print sequentially 0 to 10. For example, if 0 takes 6 seconds to print and 1 takes two seconds to print, then 1 should wait for 0 to print, and so on.


function printWithRandomDelay(num) {
  return new Promise(resolve => {
    const delay = Math.floor(Math.random() * 6000); 
    setTimeout(() => {
      console.log(num, `(after ${delay}ms)`);
      resolve();
    }, delay);
  });
}

async function printSequentially() {
  for (let i = 0; i <= 10; i++) {
    await printWithRandomDelay(i);
  }
}

printSequentially();

/*Q5.The following recursive code will cause a stack overflow if the array "somelist" is too large. How can you fix this and still retain the recursive pattern?

var somelist = readVeryLongList();

var nextItem = function() {

   var item = somelist.pop();

   if (item) {

       // process the list item...

       nextItem();

   }

};*/

var somelist = readVeryLongList();

var nextItem = function() {
  var item = somelist.pop();
  if (item) {
  
    Promise.resolve().then(nextItem); 
  }
};

nextItem();

/*Q6.Here is a code snippet:

for(var i = 0; i < 10; i++) {

   setTimeout(function() {

     console.log(i); 

   }, 10);

}

Give the reasons for the output the above snippet gives. Also, modify the snippet to print values from 0 to 9.*/

/*ANS:The output of the original code will be `10` printed ten times. By the time the timeout executes, the loop has already completed, and `i` is
  equal to `10`.*/
//Corrected code to print values from 0 to 9:

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i); 
  }, 10);
}