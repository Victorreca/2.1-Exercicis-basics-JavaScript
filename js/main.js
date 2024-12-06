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

const processarCadena = (characterString, callBackCapitalLetters) =>
  callBackCapitalLetters(characterString);

const capitalLetters = (wordToCapitalLetters) =>
  wordToCapitalLetters.toUpperCase();

const wordToChange = "hola";

console.log(processarCadena(wordToChange, capitalLetters));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

const suma = (...numbers) => {
  let result = 0;
  numbers.forEach((number) => {
    result += number;
  });
  return result;
};

console.log(suma(3, 4, 2));

const objecte1 = { name: "Paco", age: 45 };
const objecte2 = { ...objecte1 };

objecte2.name = "Juan";

console.log(objecte1);
console.log(objecte2);

const arrayElements = [1, 3, 5, 7, 9];

const [firstElement, secondElement, ...restElements] = arrayElements;
console.log("firstElement: " + firstElement);
console.log("secondElement: " + secondElement);
console.log("restElements: " + restElements);

const spreadInFunctions = (firstArgument, secondArgument, thirdArgument) => {
  console.log(
    `Los números son ${firstArgument}, ${secondArgument}, ${thirdArgument}`
  );
};

const arrayThreeElements = [6, 9, 3];

spreadInFunctions(...arrayThreeElements);

const firstObject = { name: "Pepe", age: 33 };
const secondObject = { city: "Barcelona", job: "plumber" };

const bothObject = { ...firstObject, ...secondObject };
console.log(bothObject);

const numbersFirstExercise = [1, 2, 3, 4];
const numbersFirstExerciseSquared = numbersFirstExercise.map(
  (number) => number * number
);
console.log(`Números al cuadrat: ${numbersFirstExerciseSquared}`);

const numbersToFilter = [1, 2, 3, 4];
const onlyPairNumbers = numbersToFilter.filter((number) => number % 2 === 0);
console.log(`Pair numbers ${onlyPairNumbers}`);

const numbersToFind = [1, 10, 8, 11];
const numbersGreaterTen = numbersToFind.find((number) => number > 10);

console.log(`Primer número major que 10: ${numbersGreaterTen}`);

const numbersToReduce = [13, 7, 8, 21];
const initialValue = 0;
const numbersTotalAdd = numbersToReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(`Suma total ${numbersTotalAdd}`);

const arrayNumbersExerciseFive = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const oneLineFunction = (arrayNumbers) =>
  arrayNumbers
    .filter((number) => number >= 10)
    .map((number) => number * 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("One line: " + oneLineFunction(arrayNumbersExerciseFive));

const arrayNumbersEverySome = [11, 12, 13, 14];

const everyNumberIsGreaterThanTen = (arrayNumbersEvery) =>
  arrayNumbersEvery.every((number) => number > 10);

const someNumberIsGreaterThanTen = (arrayNumbersSome) =>
  arrayNumbersSome.some((number) => number > 10);

console.log(everyNumberIsGreaterThanTen(arrayNumbersEverySome));
console.log(someNumberIsGreaterThanTen(arrayNumbersEverySome));

const namesForEach = ["Anna", "Bernat", "Clara"];

namesForEach.forEach((name) => {
  console.log(name);
});

const namesForOf = ["Anna", "Bernat", "Clara"];
for (const name of namesForOf) {
  console.log(name);
}

const numbersFilter = [1, 2, 3, 4, 5, 6];
const pairsNumbers = numbersFilter.filter((number) => number % 2 === 0);
console.log(pairsNumbers);

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

let numeros = [1, 2, 3, 4, 5, 6];
for (const numero of numeros) {
  if (numero === 5) {
    break;
  }
  console.log(numero);
}

let noms = ["Anna", "Bernat", "Clara"];
let indexNom = 0;
for (const nom of noms) {
  console.log(`${nom}, posició: ${indexNom}`);
  indexNom++;
}

for (const [index, nom] of noms.entries()) {
  console.log(`${nom}, posició: ${index}`);
}
