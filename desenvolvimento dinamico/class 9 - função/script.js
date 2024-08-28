let url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";
const parametros = url.split("?")[1];
console.log(parametros);

let valuers = parametros.split("&");
console.log(valuers);

for (let i = 0; i < valuers.length; i++) {
    if (valuers[i].startsWith("atores")) {
        valuers[i] = "atores=" + valuers[i].substring(7).toLocaleUpperCase();
    }

}
console.log(valuers);

var carro = "fiat"
