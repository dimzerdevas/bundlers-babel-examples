import { isEven } from "./helpers";

function greet() {
  console.log("Hello from Webpack!!");
}
greet();

const generateRandomNumber = () => {
  const random = Math.random() * 10;
  const number = Math.round(random);
  return number;
};

const randomNumber = generateRandomNumber();

const result = isEven(randomNumber);

console.log(`The random number ${randomNumber} is ${result}.`);
