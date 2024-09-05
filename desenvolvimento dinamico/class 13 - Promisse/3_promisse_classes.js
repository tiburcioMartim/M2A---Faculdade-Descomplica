class MinhaClasse {

    constructor(value) {
        this.value = value;
    }

    assyncOperator() {
        return new Promise((resolve, reject) => {
            const result = this.value * 2;

            if (result >= 10) {
                resolve(result)
            } else {
                reject("O resultado é negativo.")
            }
        })
    }
}

const minhaClasse = new MinhaClasse(2);
minhaClasse.assyncOperator()
    .then((resultado) => {
        console.log("O resultado da operação é: " + resultado);
    })
    .catch((erro) => {
        console.log("Ocorreu um problema: " + erro);
    })
