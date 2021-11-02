const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


//TEST CODE
assertArraysEqual(middle([1, 2, 3, 4, 5]), 3);
assertArraysEqual(middle([1, 2, 3, 5, 6, 3, 4, 5]), [5, 6]);
assertArraysEqual(middle([1, 4]), []);
assertArraysEqual(middle([1]), []);