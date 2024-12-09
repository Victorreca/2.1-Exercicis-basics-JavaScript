// Exercici 1
const numbersFirstExercise = [1, 2, 3, 4];
const numbersFirstExerciseSquared = numbersFirstExercise.map(
  (number) => number * number
);
console.log(`Números al cuadrat: ${numbersFirstExerciseSquared}`);

// Exercici 2
const numbersToFilter = [1, 2, 3, 4];
const onlyPairNumbers = numbersToFilter.filter((number) => number % 2 === 0);
console.log(`Pair numbers ${onlyPairNumbers}`);

// Exercici 3
const numbersToFind = [1, 10, 8, 11];
const numbersGreaterTen = numbersToFind.find((number) => number > 10);

console.log(`Primer número major que 10: ${numbersGreaterTen}`);

// Exercici 4
const numbersToReduce = [13, 7, 8, 21];
const initialValue = 0;
const numbersTotalAdd = numbersToReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(`Suma total ${numbersTotalAdd}`);

// Exercici 5
const arrayNumbersExerciseFive = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const oneLineFunction = (arrayNumbers) =>
  arrayNumbers
    .filter((number) => number >= 10)
    .map((number) => number * 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("One line: " + oneLineFunction(arrayNumbersExerciseFive));

// Exercici 6
const arrayNumbersEverySome = [11, 12, 13, 14];

const everyNumberIsGreaterThanTen = (arrayNumbersEvery) =>
  arrayNumbersEvery.every((number) => number > 10);

const someNumberIsGreaterThanTen = (arrayNumbersSome) =>
  arrayNumbersSome.some((number) => number > 10);

console.log(
  `Tots els elements són més grans que 10: ${everyNumberIsGreaterThanTen(
    arrayNumbersEverySome
  )}`
);
console.log(
  `Hi ha algun element més gran que 10: ${someNumberIsGreaterThanTen(
    arrayNumbersEverySome
  )}`
);
