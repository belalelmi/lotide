
const tail = (x) => {
  const y = x.slice(1);
  if (y[0] != null || y[0] !== undefined) {
    console.log(y);
  } else {
    console.log('undefined');
  }
};

//test run
tail([4, 5, 6, 6, 7, 8, 'fdasfadsfas', 44534534534]);
tail(["Hello", "Lighthouse", "Labs"]);
tail([]);

///assert
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Test Case: Checking the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!