const add = (a, b) => a + b;

const randomNumber = () => Math.floor(Math.random() * 101);

const person = new Person("Isma");

person.greet();

const arrayNumbers = [0, 2, 5];

const printNumbers = (arrayNumbersValue) => {
  for (let i = 0; i < arrayNumbersValue.length; i++) {
    (() => console.log(arrayNumbers[i]))();
  }
};
printNumbers(arrayNumbers);

const setTimeOutFunction = () => {
  setTimeout(() => {
    console.log(`Has esperat 3 segons`);
  }, 3000);
};
setTimeOutFunction();

const potConduir = (age) => {
  return age >= 18 ? "Pots conduir" : "No pots conduir";
};

console.log(potConduir(17));
console.log(potConduir(18));

const num1 = 3;
const num2 = 5;

const comparativeNumbers = (firstNumber, secondNumber) => {
  firstNumber > secondNumber
    ? console.log(`num1 és més gran`)
    : console.log(`num2 és més gran`);
};
comparativeNumbers(num1, num2);

const determineSymbol = (number) => {
  return number > 0
    ? `${number} és positiu`
    : number === 0
    ? `${number} és zero`
    : `${number} és negatiu`;
};
console.log(determineSymbol(0));
console.log(determineSymbol(5));
console.log(determineSymbol(-2));

const trobarMaxim = (a, b, c) => {
  return a > b && a > c ? a : b > c ? b : c;
};
console.log(trobarMaxim(5, 6, 7));
