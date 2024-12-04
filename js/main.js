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

const parOImpar = (arrayNumbers) => {
  let result = "";

  arrayNumbers.forEach((numberParOImpar) => {
    result =
      numberParOImpar % 2 === 0
        ? `${numberParOImpar} és parell.`
        : `${numberParOImpar} és imparell.`;

    console.log(result);
  });
};
const arrayNumberParOImpar = [2, 3, 4, 10, 5];
parOImpar(arrayNumberParOImpar);

const processar = (numberFunction, functionCallback) => {
  return functionCallback(numberFunction);
};

const sumTwo = (num) => num + 2;

console.log(processar(8, sumTwo));

const calculadora = (firstNumber, secondNumber, calculateFunction) =>
  calculateFunction(firstNumber, secondNumber);

const addNumbers = (firstAddNumber, secondAddNumber) =>
  firstAddNumber + secondAddNumber;

console.log(calculadora(3, 4, addNumbers));

const esperarISaludar = (name, functionWaiting) =>
  setTimeout(() => {
    functionWaiting(name);
  }, 2000);

const sayHi = (userName) => {
  console.log(`Hi ${userName}`);
};
esperarISaludar("Jose", sayHi);

const processarElements = (arrayProcessarElements, functionElement) => {
  arrayProcessarElements.forEach((elementArray) => {
    functionElement(elementArray);
  });
};

const showNumber = (number) => {
  console.log(number);
};
const arrayNumbersElements = [1, 3, 4];
processarElements(arrayNumbersElements, showNumber);
