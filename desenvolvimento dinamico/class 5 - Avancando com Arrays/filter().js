let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let result = numbers.filter(item => item % 2 == 0);
console.log(result);







let filterNumbers = numbers.filter(
    function (value) {
        return value > 5;
    }
);
console.log(filterNumbers);







function findValues(value) {
    return value < 5;
}

let findingValues = numbers.filter(findValues)
console.log(findingValues);






let r1 = numbers.filter((value) => {
    return value > 5
});
console.log(r1);








let r2 = numbers.filter(value => value > 5);
console.log(r2);








let functionary = [
    { name: 'Luiz', age: 62 },
    { name: 'Davi', age: 22 },
    { name: 'Arthur', age: 18 },
    { name: 'Lucas', age: 40 },
]

let peopleList = functionary.filter(
    function (value) {
        return value.name.length < 5;
    }
);
console.log(peopleList);