// Exercici 1
const processar = (numberFunction, functionCallback) => {
  return functionCallback(numberFunction);
};

const sumTwo = (num) => num + 2;
console.log(processar(8, sumTwo));

// Exercici 2
const calculadora = (firstNumber, secondNumber, calculateFunction) =>
  calculateFunction(firstNumber, secondNumber);

const addNumbers = (firstAddNumber, secondAddNumber) =>
  firstAddNumber + secondAddNumber;

console.log(calculadora(3, 4, addNumbers));

// Exercici 3
const esperarISaludar = (name, functionWaiting) =>
  setTimeout(() => {
    functionWaiting(name);
  }, 2000);

const sayHi = (userName) => {
  console.log(`Hi ${userName}`);
};
esperarISaludar("Jose", sayHi);

// Exercici 4
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

// Exercici 5
const processarCadena = (characterString, callBackCapitalLetters) =>
  callBackCapitalLetters(characterString);

const capitalLetters = (wordToCapitalLetters) =>
  wordToCapitalLetters.toUpperCase();

const wordToChange = "hola";

console.log(processarCadena(wordToChange, capitalLetters));
