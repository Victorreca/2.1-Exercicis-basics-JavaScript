// Exercici 1
const add = (a, b) => a + b;
console.log(`Function suma: ${add(2, 4)}`);

// Exercici 2
const randomNumber = () => Math.floor(Math.random() * 101);
console.log(`Function número aleatori: ${randomNumber()}`);

// Exercici 3
const person = new Person("Isma");
person.greet();

// Exercici 4
const arrayNumbers = [0, 2, 5];

const printNumbers = (arrayNumbersValue) => {
  for (let i = 0; i < arrayNumbersValue.length; i++) {
    console.log(arrayNumbersValue[i]);
  }
};
printNumbers(arrayNumbers);

// Exercici 5
const setTimeOutFunction = () => {
  setTimeout(() => {
    console.log(`Has esperat 3 segons`);
  }, 3000);
};
setTimeOutFunction();
