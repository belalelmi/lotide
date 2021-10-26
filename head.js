
const head = (x) => {
  if (x[0] != null || x[0] != undefined) {
    console.log(x[0]);
  } else {
    console.log('undefined');
  }
};
head([4, 5, 6]);
head(["Hello", "Lighthouse", "Labs"])
head([]);


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual[0]} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual[0]} !== ${expected}`);
  }
};