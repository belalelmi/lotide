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
  }
  return true;  // otherwise arrays match
};

module.exports = eqArrays;