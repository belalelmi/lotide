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

const middle = (array) => {

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    const soloMidle = (Math.floor(array.length / 2));
    return array[soloMidle];
  } else {
    const even1 = (array.length / 2) - 1; // '-1' becuase I want to "move back one spot" and get the "first" middle value 
    const even2 = (array.length / 2);
    return [array[even1], array[even2]];
  }
};

//TEST CODE
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 5, 6, 3, 4, 5]), [5, 6]);
assertArraysEqual(middle([1, 4]), []);
assertArraysEqual(middle([1]), []);

