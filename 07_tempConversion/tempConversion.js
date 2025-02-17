const convertToCelsius = function(fahrenheit) {
  let celcius=(fahrenheit-32)*5/9;

  if (!Number.isInteger(celcius)) {
    celcius=Math.round(celcius*10)/10;
  }

  return celcius;  
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit=celcius*9/5+32;

  if (!Number.isInteger(fahrenheit)) {
    fahrenheit=Math.round(fahrenheit*10)/10;
  }

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
