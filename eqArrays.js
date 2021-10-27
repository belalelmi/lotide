
const eqArrays = (a1, b1) => {
  // determining truth based on array length
  if (a1.length !== b1.length) {
    return false;
  }
  for (let x = 0; x < a1.length; x++) {
    // checking to see if items are not the same throughout the loop
    if (a1[x] !== b1[x]) {
      return false;  // check for item(?) in array1 is not === item(?) in b1
    }
  };

  return true;  // otherwise arrays match
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true); // false 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);// => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
