/////////// FUNÇÃO REGULAR /////////////
function multiplicar(x, y) {
    return x * y;
}
let a = multiplicar(4, 2);
console.log(a);
let b = multiplicar(6, 7);
console.log(b);



function somaValores(a, b = 2, c = 6) {
    return ++a + b + c;
}
let f = somaValores(8, 3);
console.log(f);


/////////// FUNÇÃO ANÔNIMA /////////////
let infoCal = function (a, b, c) {
    return a + b + c;
}
console.log(infoCal(2, 5, 7));



/////////// ARROW FUNÇÃO /////////////
const soma = (n1, n2) => {
    return n1 + n2;
}
console.log(soma(3, 3));



const numbers = [1, 2, 3, 4, 5];
const value = numbers.map((x) => x * x)
console.log(value);




let productList = ["geladeira","fogão","microondas","air fryer"];
let upperCaseList = productList.map(firstInUpperCase)

function firstInUpperCase(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
};

console.log(upperCaseList);
