// Calcular a média de todos os números de um Array.
let values = [8, 1, 7, 2, 9];

let soma = 0;
for (let i = 0; i < values.length; i++) {
    soma += values[i];
}
let media = soma / values.length
console.log(media);