// Map() pega elementos e interage neles
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



let result = numbers.map(function (value) {
    return value * 2;
});
console.log(result, '\n\n');

let functionary = [
    { name: 'Luiz', age: 62 },
    { name: 'Davi', age: 22 },
    { name: 'Arthur', age: 18 },
    { name: 'Lucas', age: 48 },
];

let names = functionary.map(people => people.name);
console.log(names);