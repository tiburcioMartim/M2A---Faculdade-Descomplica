let foods = ['bread', 'rice', 'meat', 'pizza'];

foods.forEach(function (food) {
    console.log(food);
});
console.log('\n\n');





let a = [1, 2, 3, 4, 5, 6];

for (let value of a) {
    console.log(value);
}
console.log('\n\n');



let total = 0;
a.forEach(value => {
    total += value;
});

console.log(total, '\n\n');





a.forEach(function (value, indice, array) {
console.log(array[indice]);
});