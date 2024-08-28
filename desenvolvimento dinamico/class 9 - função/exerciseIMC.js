// Fórmula: IMC = Peso / Altura²

// IMC / Classificação
// * Menor que 18,5    /   Abaixo do peso
// * Entre 18,5 e 24,9 /   Peso normal
// * Entre 25 e 29,9   /   Acima do peso (Sobrepeso)
// * Entre 30 e 34,9   /   Obesidade I
// * Entre 35 e 39,9   /   Obesidade II
// * Maior que 40      /   Obesidade III

// Exercicio:
//     Criar um objeto de pessoa com pelo menos 5 pessoas e desenvolver um siste para calcular o IMC

/////////////////////////////////////////////////////
//            ATIVIDADE            //
/////////////////////////////////////////////////////

function calcularIMC(peso, altura) {
        return (peso / (altura ^ 2)).toFixed(2);
}

function definirIMC(IMC) {
        if (IMC < 18.5) {
                console.log(`IMC: ${IMC} Abaixo do peso`);

        } else if (IMC >= 18.5 && IMC <= 24.9) {
                console.log(`IMC: ${IMC} Peso normal`);

        } else if (IMC >= 25 && IMC <= 29.9) {
                console.log(`IMC: ${IMC} Acima do peso (Sobrepeso)`);

        } else if (IMC >= 30 && IMC <= 34.9) {
                console.log(`IMC: ${IMC} Obesidade I`);

        } else if (IMC >= 35 && IMC <= 39.9) {
                console.log(`IMC: ${IMC} Obesidade II`);

        } else {
                console.log(`IMC: ${IMC} Obesidade III`);

        }
}

let people = [
        { name: "Tiago", age: 18, height: 1.72, weight: 80 },
        { name: "Maria", age: 18, height: 1.61, weight: 75 },
        { name: "Jonathan", age: 18, height: 1.21, weight: 13 },
        { name: "Marcos", age: 18, height: 1.73, weight: 78 },
        { name: "Cleber", age: 18, height: 1.70, weight: 65 }
];

for (let i = 0; i < people.length; i++) {
        let IMC = calcularIMC(people[i].weight, people[i].height);
        let myIMC = definirIMC(IMC);
        console.log(`\nPaciente - ${i}: ${people[i].name} seu ${myIMC}`);

};


