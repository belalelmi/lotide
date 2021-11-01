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

module.exports = middle;

