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
