//test run
const assertEqual = require('../assertEqual');
const head = require('../head')

let w = [4, 5, 6]
let y = ["Hello", "Lighthouse", "Labs"]
assertEqual((head(w)), 4);
assertEqual((head(y)), 'Labs');
assertEqual((head([])), undefined);