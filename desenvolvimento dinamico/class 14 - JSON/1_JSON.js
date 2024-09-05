const pessoa = {
    nome: "João",
    idade: 25,
    prodissao: "Desenvolvedor"
}

//Converte objeto em JSON
const pessoaJSON = JSON.stringify(pessoa);
console.log(pessoa);
console.log(pessoaJSON);

//Converte JSON em Objeto
const pessoaOBJ = JSON.parse(pessoaJSON);
console.log(pessoaOBJ);
