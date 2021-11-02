const tail = require('../tail');
const assertEqual = require('../assertEqual');


//test cases//
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
assertEqual(words.length, 3);
// original array should still have 3 elements!

// also check tail(words) === ['Lighthouse', 'Labs']

// tail([4, 5, 6, 6, 7, 8, 'fdasfadsfas', 44534534534]);
// tail(["Hello", "Lighthouse", "Labs"]);
// tail([]);