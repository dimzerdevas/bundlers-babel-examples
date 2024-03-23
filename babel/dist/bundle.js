"use strict";

function greet() {
  console.log("Hello from Webpack!!");
}
greet();
var generateRandomNumber = function generateRandomNumber() {
  var random = Math.random() * 10;
  var number = Math.round(random);
  return number;
};
var randomNumber = generateRandomNumber();
