// Exercici 1
const promiseHelloWorld = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

// Exercici 2
promiseHelloWorld.then((message) => {
  console.log(message);
});

// Exercici 3
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

// Exercici 4 y 5
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

// Exercici 6
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
