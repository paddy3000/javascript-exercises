const removeFromArray = function(arrayIn, ...args) {
  return arrayIn.filter(string => !args.includes(string));
};

// Do not edit below this line
module.exports = removeFromArray;
