// Exercice: Array com todos os meses do ano; 
// Dividir o Array em trimestres;

let months = [
    'January', 'Febriary', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'Ouctuber', 'November', 'December'
];

let trimestres = {
    first: months.slice(0, 3).join(', '),
    second: months.slice(3, 6).join(', '),
    third: months.slice(6, 9).join(', '),
    fourth: months.slice(9, 13).join(', ')
}

console.log(`1º trimestre: ${trimestres.first}`, '\n');
console.log(`2º trimestre: ${trimestres.second}`, '\n');
console.log(`3º trimestre: ${trimestres.third}`, '\n');
console.log(`4º trimestre: ${trimestres.fourth}`, '\n');