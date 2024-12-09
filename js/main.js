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
