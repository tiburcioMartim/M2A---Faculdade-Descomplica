const myPromise = new Promise((resolve, reject) => {

    const sucess = true;

    if (sucess) {
        resolve("Deu bom...");
    } else {
        reject("Ocorreu um problema...")
    }
});

myPromise
    .then((result) => {
        console.log("Foi sucesso: " + result);
    })
    .catch((erro) => {
        console.log("Deu ruim: " + erro);

    })