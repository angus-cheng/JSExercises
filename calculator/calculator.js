const add = function(numA = 0, numB = 0) {
  return numA + numB;
};

const subtract = function(numA = 0, numB = 0) {
  return numA - numB;
};

const sum = function(arr) {
  /*
  const total = arr.reduce((accumulator, val) => {
    return accumulator + val;
  }, 0);

  return total
  */
 
 return arr.reduce((total, val) => total + val, 0);
};

const multiply = function(arr) {
  /*
  const total = arr.reduce((accumulator, currVal) => {
    return accumulator * currVal;
  })

  return total;
  */

  return arr.reduce((total, val) => total * val, 1);
};

const power = function(val, exp) {
  return val**exp; 
};

const factorial = function(val) {
  if (val == 0) return 1;
  let total = 1;
  for (let i = 1; i <= val; i++) {
    total *= i;
  } 

  return total;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
