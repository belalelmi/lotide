const assertArraysEqual = (a1, b1) => {
  if (eqArrays(a1, b1)) {
    console.log(`✅ Assertion Passed: ${a1} does match ${b1}`);
  } else {
    console.log(`🛑 Assertion Failed: ${a1} does not match ${b1}`);
  }
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


const without = (source, itemsToRemove) => {
  if (eqArrays(source, itemsToRemove)) {
    return true;
  } else {
    const newArray = [];
    for (const item of source) {
      if (!itemsToRemove.includes(item)) { // if item in source is NOT in itemsToRemove.. push item to newArray 
        newArray.push(item);
      }
    }
    return newArray;
  };
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);