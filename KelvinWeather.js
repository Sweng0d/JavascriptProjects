const kelvin = 293;
// constant called kelvin, which is the number 293

const celsius = kelvin - 273;
// constant called celsius, which is the kelvin(293) minus 273;

let fahrenheit = celsius * (9/5) + 32;
// the variable called fahrenheit is equal to celsius * (9/5) + 32;
//we use let to be able to change this variable later
fahrenheit = Math.floor(fahrenheit);
//now we are using the value in fahrenheit and rounding down the number using the Math.floor command
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperatura is ${Newton} degrees Newton`);
