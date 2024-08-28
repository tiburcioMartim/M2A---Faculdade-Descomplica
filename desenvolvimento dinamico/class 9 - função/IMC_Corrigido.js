function criarFuncionario(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,
        calculoIMC() {
            const indice = (this.peso / (this.altura ** 2)).toFixed(1);

            if (indice < 18.5) {
                console.log("Seu IMC é: " + indice + " Abaixo do peso.");

            } else if (indice >= 18.5 && indice <= 24.9) {
                console.log("Seu IMC é: " + indice + " Peso normal");

            } else if (indice >= 25 && indice <= 29.9) {
                console.log("Seu IMC é: " + indice + " Acima do peso (Sobrepeso)");

            } else if (indice >= 30 && indice <= 34.9) {
                console.log("Seu IMC é: " + indice + " Obesidade I");

            } else if (indice >= 35 && indice <= 39.9) {
                console.log("Seu IMC é: " + indice + " Obesidade II");

            } else {
                console.log("Seu IMC é: " + indice + " Obesidade III");

            }
        }
    };
};

const p1 = criarFuncionario("Martim", "Tiburcio", 1.75, 79);
p1.calculoIMC()