class dispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log("Já está ligado.");
            return;
        }
        this.ligado = true;
    }
}

class smartPhone extends dispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

let smartPhone_1 = new smartPhone("Sansung", "Preto", "A71")

console.log(smartPhone_1);
smartPhone_1.ligar();
smartPhone_1.ligar();