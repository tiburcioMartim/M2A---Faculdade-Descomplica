function obterValor(valor) {
    return new Promise((resolve, reject) => {
        if (valor > 10) {
            valor += 1;
            resolve(valor);
        } else {
            reject("Não foi possível obter o valor.")
        }
    })
}

function dobrarValor(valor) {
    return valor * 2;
}

function add10(valor) {
    return valor + 10;
}

obterValor(28)
    .then((valor) => {
        console.log("Valor obtido");
        return dobrarValor(valor);
    })
    .then((novoValor) => {
        console.log("Fazendo o segundo tratamento");
        return add10(novoValor);
    })
    .then((resultadoFinal) => {
        let total = resultadoFinal + 5;
        return console.log("O resultado final é: " + total);        
    })
    .catch((erro) => {
        console.log("Ocorreu um erro: ", erro);

    })