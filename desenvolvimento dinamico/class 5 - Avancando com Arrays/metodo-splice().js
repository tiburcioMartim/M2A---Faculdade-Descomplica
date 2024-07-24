let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
array.splice(1, 4)
console.log(array, '\n\n');





let nomes = ['Maria', 'João', 'Lucas', 'Pedro']
console.log(nomes);
let novosNomes = nomes.splice(1,1, 'Luiz')
console.log(novosNomes);
console.log(nomes,'\n\n');





let country = ['Brasil','Argentina','Colombia']
console.log(country);
country.unshift('Uruguai')
console.log(country);