
const assertEqual = require('./assertEqual');

const head = (x) => {
  if (x[0] != null || x[0] != undefined) {
    return x[0];
  } else {
    return undefined;
  }
};

module.exports = head;