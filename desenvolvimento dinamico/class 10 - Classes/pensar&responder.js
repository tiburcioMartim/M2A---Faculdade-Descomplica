//if { Comentário

//1 - criar as classes Funcionario, Gerente e Desenvolvedor
//2 - A classe Funcionario deve ter os 
//          atributos (nome, idade e cargo)
//          métodos [seApresentar() e trabalhar()]

//3 - A classe Gerente 
//          herdar da classe Funcionario
//          ter um atributo adicional departamento
//          método gerenciar()

//4 - A classe Desenvolvedor
//          herdar da classe Funcionario
//          ter um atributo adicional linguagem
//          método programar()

//criar instâncias de:
//          # gerente
//          # desenvolvedor

//Definir valores para seus atributos
//Chamar os métodos apropriados para cada um dos funcionários, exibindo as saídas corretas no console.
//}

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

console.log("\n");

let funcionario_1 = new Funcionario("Tiago", 18, "Estoquista");
funcionario_1.seApresentar();
funcionario_1.trabalhar();

console.log("\n");

let gerente_1 = new Gerente("Pedro", 25, "Gerente", "Pessoal");
gerente_1.seApresentar();
gerente_1.gerenciar();

console.log("\n");

let desenvolvedor_1 = new Desenvolvedor("Martim", 32, "Desenvolvedor", "Python");
desenvolvedor_1.seApresentar();
desenvolvedor_1.programar();

console.log("\n");