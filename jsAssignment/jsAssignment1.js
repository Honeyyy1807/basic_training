// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  let l1 = -Infinity;
  let l2 = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > l1) {
      l2 = l1;
      l1 = array[i];
    } else if (array[i] > l2 && array[i] !== l1) {
      l2 = array[i];
    }
  }
  return l2 === -Infinity ? null : l2;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  const obj = {};
  if (typeof string !== "string") return obj;

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter >= "a" && letter <= "z") {
      if (obj[letter] === undefined) {
        obj[letter] = 1;
      } else {
        obj[letter] = obj[letter] + 1;
      }
    }
  }
  return obj;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  let final = {};
  function traverse(curr, pre = "") {
    for (let key in curr) {
      let val = curr[key];
      let newKey = pre ? `${pre}.${key}` : key;
      if (typeof val === "object" && !Array.isArray(val) && val !== null) {
        traverse(val, newKey);
      } else if (Array.isArray(val)) {
        val.forEach((item, index) => {
          if (typeof item === "object" && item !== null) {
            traverse(item, `${newKey}.${index}`);
          } else {
            final[`${newKey}.${index}`] = item;
          }
        });
      } else {
        final[newKey] = val;
      }
    }
  }
  traverse(unflatObject);
  return final;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  let result = {};
  for (let i in flatObject) {
    let keys = i.split(".");
    keys.reduce((acc, value, index) => {
      if (!acc[value]) {
        if (isNaN(Number(keys[index + 1]))) {
          if (keys.length - 1 === index) {
            acc[value] = flatObject[i];
          } else {
            acc[value] = {};
          }
        } else {
          acc[value] = [];
        }
      }

      return acc[value];
    }, result);
  }
  return result;
}