// 1 - Forma de criar objetos
const people = {
    nome: "Lucas",
    sobrenome: "Silva"
};

console.log(people.sobrenome);
console.log(people["sobrenome"]);


// 2 - Forma de criar objetos
const functionary = new Object();
functionary.nome = "Karen";
functionary.sobrenome = "Joana";

console.log(functionary.nome);



// 3 - Forma de criar objetos
function createPeople(name, lastName, i) {
    return {
        name,
        lastName,
        age: i,
        get fullName() {
            return `${this.name} ${this.lastName}`
        }
    };
};

const p1 = createPeople("Martim", "Tiburcio");
const p2 = createPeople("Marcelly", "Tiburcio", 27);

console.log(p1.fullName);
console.log(p2);

