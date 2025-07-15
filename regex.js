/*Q1.Write a regex pattern that matches the password

a.Uppercase (A-Z) and lowercase (a-z) English letters.

b.Digits (0-9).

c.Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~

d.Character. ( period, dot or full stop) provided that it is not the first or last character and it will not come one after the other.*/

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&'*+/=?^_`{|}~])(?:(?!.*\.\.)(?!^\.)[^.].*[^.]|[^.].*)$/;

//Q2.Write a regex pattern to match the valid email address
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//Q3.Write a regex pattern that verifies credit card pattern
const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

/*Q4.Write a regex function to distinguish and pick the values of email address, phone number from the below paragraph

Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim
facilisis gravida. mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis 
lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla
phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra 
diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut 
placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.*/

function extractEmailAndPhone(text) {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const phonePattern = /(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}/g;

    const emails = text.match(emailPattern) || [];
    const phones = text.match(phonePattern) || [];

    return {
        emails: emails,
        phones: phones
    };
}

//Q5.Implement the setTimeout function using native javascript only. 

function customSetTimeout(callback, delay) {
    const start = Date.now();
    
    function checkTime() {
        if (Date.now() - start >= delay) {
            callback();
        } else {
            requestAnimationFrame(checkTime);
        }
    }
    
    requestAnimationFrame(checkTime);
}

/*Implement a javascript Array having the following prototype functions without using Native javascript array:

- push

- pop

- shift

- unshift

- length

- splice

- indexOf

- forEach*/

class CustomArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        if (this.length === 0) return undefined;
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    shift() {
        if (this.length === 0) return undefined;
        const firstItem = this.data[0];
        for (let i = 1; i < this.length; i++) {
            this.data[i - 1] = this.data[i];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
    }

    splice(start, deleteCount, ...items) {
        const removedItems = [];
        for (let i = start; i < start + deleteCount && i < this.length; i++) {
            removedItems.push(this.data[i]);
            delete this.data[i];
            this.length--;
        }
        
        for (let i = start + deleteCount; i < this.length; i++) {
            if (i + items.length < this.length) {
                this.data[i] = this.data[i + items.length];
            } else {
                delete this.data[i];
            }
        }

        for (let i = 0; i < items.length; i++) {
            this.data[start + i] = items[i];
            if (start + i >= this.length) {
                this.length++;
            }
        }
        
        return removedItems;
    }

    indexOf(item) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) return i;
        }
        return -1;
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this.data[i], i, this);
        }
    }
}

const customArray = new CustomArray();
customArray.push(1);
customArray.push(2);
console.log(customArray.pop()); 
customArray.unshift(0);
console.log(customArray.shift()); 
customArray.push(3);
customArray.push(4);
console.log(customArray.splice(1, 2, 5, 6)); 
console.log(customArray.indexOf(5)); 
customArray.forEach(item => console.log(item)); 
console.log(customArray.length); 


/*Q7.Provided a function that checks the validity of string and returns results via a callback.

~~~~~~~~~~~~~~~~~~~~~~~~~~~

function validateString(input, callback) {

  setTimeout(function () {

    // input is said to be valid if it is a lowercase string

    if (typeof input === "string" && input === input.toLowerCase()) {

      return callback(null, true)

    }


    return callback(new Error('Invalid string'), null)

  }, 500)

}

~~~~~~~~~~~~~~~~~~~~~~~~~~~

Check if values in array (see below example) are valid or not.

Example

Input: ['first', 'Second', 'thiRd', 4, false, 'true']

Output: {"4":false,"first":true,"Second":false,"thiRd":false,"false":false,"true":true}

NOTE: you can not use loops or recursion. Also, you should not change the ‘validateString’ function (i.e. use it as it is).*/

function validateString(input, callback) {
  setTimeout(function () {
    if (typeof input === "string" && input === input.toLowerCase()) {
      return callback(null, true)
    }
    return callback(new Error('Invalid string'), null)
  }, 500)
}


const input = ['first', 'Second', 'thiRd', 4, false, 'true']

function validateArray(arr, finalCallback) {
  const result = {}
  let completed = 0

  arr.forEach(item => {
    validateString(item, (err, isValid) => {
      result[String(item)] = isValid === true
      completed++

      if (completed === arr.length) {
        finalCallback(result)
      }
    })
  })
}


validateArray(input, (result) => {
  console.log(result)
})

