let drink = "Chá";
let formatDrink = drink.toLocaleLowerCase()
    .replace(/[àáâãä]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')

switch (formatDrink) {
    case 'cha':
        console.log('Aqui está seu chá, custa: R$ 6,50');
        break;

    case 'cafe':
        console.log('Aqui está seu café, custa: R$ 9,00');
        break;

    case 'leite':
        console.log('Aqui está seu leite, custa: R$ 10,00');
        break;

    default:
        console.log('Desculpe, as opções disponiveis são: Chá, Café ou Leite');
        break;
}