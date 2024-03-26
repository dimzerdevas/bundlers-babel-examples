import { isEven } from "./helpers";

const a = "test2";

console.log(a);
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

const element = document.querySelector("div");

element.textContent = `The random number ${randomNumber} is ${result}.`;
