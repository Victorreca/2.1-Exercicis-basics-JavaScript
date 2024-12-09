// Exercici 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

// Exercici 2
const suma = (...numbers) => {
  let result = 0;
  numbers.forEach((number) => {
    result += number;
  });
  return result;
};

console.log(suma(3, 4, 2));

// Exercici 3
const objecte1 = { name: "Paco", age: 45 };
const objecte2 = { ...objecte1 };

objecte2.name = "Juan";

console.log(objecte1);
console.log(objecte2);

// Exercici 4
const arrayElements = [1, 3, 5, 7, 9];

const [firstElement, secondElement, ...restElements] = arrayElements;
console.log("firstElement: " + firstElement);
console.log("secondElement: " + secondElement);
console.log("restElements: " + restElements);

//Exercici 5
const spreadInFunctions = (firstArgument, secondArgument, thirdArgument) => {
  console.log(
    `Los números son ${firstArgument}, ${secondArgument}, ${thirdArgument}`
  );
};

const arrayThreeElements = [6, 9, 3];
spreadInFunctions(...arrayThreeElements);

// Exercici 6
const firstObject = { name: "Pepe", age: 33 };
const secondObject = { city: "Barcelona", job: "plumber" };

const bothObject = { ...firstObject, ...secondObject };
console.log(bothObject);
