let towns = [
    'Km32',
    'Queimados',
    'Nova Igaçu',
    'Japeri',
    'Cabuçu',
    'Dom Bosco',
    'Seropédica'
]

let citySize = '';
let cityName = '';
for (let i = 0; i < towns.length; i++) {
    let city = towns[i];

    if (city.length > citySize) {
        citySize = city.length;
        cityName = city;
    }
}

console.log(`The city with more positions, is: ${cityName}`);