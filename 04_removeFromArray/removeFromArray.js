const removeFromArray = function(arrayIn, subset) {
  return arrayIn.filter((string) => {!(subset.includes(string))})
};

// Do not edit below this line
module.exports = removeFromArray;
