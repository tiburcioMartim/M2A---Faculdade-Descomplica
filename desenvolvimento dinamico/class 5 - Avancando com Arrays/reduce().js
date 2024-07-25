// first method
let totalOne = 0;
let numbOne = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbOne.length; i++) {
    totalOne += numbOne[i];
};
console.log(totalOne, '\n\n');



// second method
let numbTwo = [1, 2, 3, 4, 5, 6];
let totalTwo = numbTwo.reduce(function(total, number) {
    return total * number;
}, 1);
console.log(totalTwo, '\n\n');