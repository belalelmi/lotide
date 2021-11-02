const assertEqual = require('./assertEqual');

const tail = (x) => {
  const y = x.slice(1);
  return y;
};
console.log(tail(['2', '3', '4']))
module.exports = tail;