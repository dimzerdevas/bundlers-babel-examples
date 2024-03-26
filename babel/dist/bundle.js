"use strict";

var greet = function greet() {
  console.log("Hello from Babel!!");
};
greet();
var generateRandomNumber = function generateRandomNumber() {
  var random = Math.random() * 10;
  var number = Math.round(random);
  return number;
};
var randomNumber = generateRandomNumber();
var array = [1, 2, 3];
var a = array[0],
  b = array[1],
  c = array[2];
var object = {
  name: "pikachu"
};
var name = object.name;
