// Exercici 1
const potConduir = (age) => {
  return age >= 18 ? "Pots conduir" : "No pots conduir";
};

console.log(potConduir(17));
console.log(potConduir(18));

// Exercici 2
const num1 = 3;
const num2 = 5;

const comparativeNumbers = (firstNumber, secondNumber) => {
  firstNumber > secondNumber
    ? console.log(`num1 és més gran`)
    : console.log(`num2 és més gran`);
};
comparativeNumbers(num1, num2);

// Exercici 3
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

// Exercici 4
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
