// first model
let arr = [3,4,5,6];

for (let i = 0; i < arr.length; i++) {
    arr[i] *= 3;    
}
console.log(arr, '\n\n');




// second model
let modifierArr = arr.map(function(element) {
    return element * 3;
});
console.log(modifierArr, '\n\n');