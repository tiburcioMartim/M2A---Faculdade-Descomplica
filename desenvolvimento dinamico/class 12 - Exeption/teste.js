try {
    setTimeout(() => {
        throw new Error("Opa, ocorreu um erro!");

    }, 2000);

} catch (error) {

    console.log("Erro capturado: ", error.message);

}