// Exercici 1
const namesForEach = ["Anna", "Bernat", "Clara"];

namesForEach.forEach((name) => {
  console.log(name);
});

// Exercici 2
const namesForOf = ["Anna", "Bernat", "Clara"];
for (const name of namesForOf) {
  console.log(name);
}

// Exercici 3
const numbersFilter = [1, 2, 3, 4, 5, 6];
const pairsNumbers = numbersFilter.filter((number) => number % 2 === 0);
console.log(pairsNumbers);

// Exercici 4
let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// Exercici 5
let numeros = [1, 2, 3, 4, 5, 6];
for (const numero of numeros) {
  if (numero === 5) {
    break;
  }
  console.log(numero);
}

// Exercici 6
let noms = ["Anna", "Bernat", "Clara"];
let indexNom = 0;
for (const nom of noms) {
  console.log(`${nom}, posició: ${indexNom}`);
  indexNom++;
}

for (const [index, nom] of noms.entries()) {
  console.log(`${nom}, posició: ${index}`);
}
