const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
let x = [2, 1, 2, 2, 3];
let y = [2, 1, 2, 2, 3];

assertArraysEqual(eqArrays(x, y), true);