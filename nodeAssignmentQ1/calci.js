function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

function subtract(...nums) {
  if (nums.length === 0) return 0;
  return nums.reduce((acc, curr) => acc - curr);
}

function multiply(...nums) {
  if (nums.length === 0) return 1;
  return nums.reduce((acc, curr) => acc * curr, 1);
}

function divide(...nums) {
  if (nums.length === 0) return 1;
  if (nums.slice(1).includes(0)) {
    throw new Error("Division by zero is not allowed");
  }
  return nums.reduce((acc, curr) => acc / curr);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
