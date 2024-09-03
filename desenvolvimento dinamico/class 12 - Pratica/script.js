class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu cargo atual é de ${this.cargo}.`)
    }

    trabalhar() {
        console.log(`Ir atuar no setor de ${this.cargo}.`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, meu cargo atual é de ${this.cargo} e hoje tenho colaborado com o departamento ${this.departamento}.`)
    }

    gerenciar() {
        console.log(`O departamento ${this.departamento} precisa de gestão.`)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`Vou programar na linguagem ${this.linguagem} hoje.`)
    }
}








// if(true) { código da aula 10
//     console.log("\n");

//     let funcionario_1 = new Funcionario("Tiago", 18, "Estoquista");
//     funcionario_1.seApresentar();
//     funcionario_1.trabalhar();

//     console.log("\n");

//     let gerente_1 = new Gerente("Pedro", 25, "Gerente", "Pessoal");
//     gerente_1.seApresentar();
//     gerente_1.gerenciar();

//     console.log("\n");

//     let desenvolvedor_1 = new Desenvolvedor("Martim", 32, "Desenvolvedor", "Python");
//     desenvolvedor_1.seApresentar();
//     desenvolvedor_1.programar();

//     console.log("\n");
// }