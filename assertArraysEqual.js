
const assertArraysEqual = (a1, b1) => {
  if (eqArrays(a1, b1)) {
    console.log(`✅ Assertion Passed: ${a1} === ${b1}`);
  } else {
    console.log(`🛑 Assertion Failed: ${a1} !== ${b1}`);
  };
};


const eqArrays = (a1, b1) => {
  if (a1.length !== b1.length) {
    return false;
  }
  for (let x = 0; x < a1.length; x++) {
    if (a1[x] !== b1[x]) {
      return false;
    }
  };
  return true;
};


// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // // TEST CODE
// assertArraysEqual[1, 2, 3], [1, 4, 3]; // false 
// assertArraysEqual([1, 2, 3], [3, 2, 1], true);// => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => true
// // assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
