// Acrecentar nome Mônica
// Remover último elemento do Array
// Encontrar a posição do Samuel
// Trocar Manoel por Emmanuel

let names = ['Guilherme', 'Manoel', 'Samuel', 'Davi', 'Pedro', 'Marcelly', 'Martim'];
console.log(names, '\n\n');

names.unshift('Mônica')
console.log(names, '\n\n');

names.splice(7, 1)
console.log(names, '\n\n');

for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name == 'Samuel') {
        console.log(`Achei o ${name}, ele está na posição names = [${names[i]}]`);
    } else {
        console.log(`Não encontrei o Samuel`);
    }
}

names.splice(2, 1, 'Emmanuel')
console.log(names);