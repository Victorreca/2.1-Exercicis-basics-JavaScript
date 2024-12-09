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

const promiseHelloWorld = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

promiseHelloWorld.then((message) => {
  console.log(message);
});

const promiseResolveReject = (input) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      input === "Hola"
        ? resolve("Promesa resolta")
        : reject("Promesa rebutjada");
    }, 2000);
  });

promiseResolveReject("Hola")
  .then((exit) => console.log(exit))
  .catch((error) => console.log(error));

promiseResolveReject("Adéu")
  .then((exit) => console.log(exit))
  .catch((error) => console.log(error));

const promiseHelloWorldAsync = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, món2");
  }, 2000);
});

const printHelloWorld = async () => {
  try {
    const result = await promiseHelloWorldAsync;
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
};
printHelloWorld();

const firstPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Primera promesa");
  }, 2000);
});

const secondPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Segona promesa");
  }, 3000);
});

const printAllPromises = async () => {
  try {
    const results = await Promise.all([firstPromise, secondPromise]);
    console.log(results);
  } catch (error) {
    console.log("Error:", error);
  }
};

printAllPromises();
