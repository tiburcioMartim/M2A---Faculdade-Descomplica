let country = 'Brazil';
if (country != 'Brazil') {
    console.log('You are estrangeiro.');
} else {
    console.log("You're Brazilian.");
};

/////////////////

let age = 15;
if (age < 16) {
    console.log('You do not vote.');
} else if (age < 18 || age > 65) {
    console.log('Optional vote.');
} else {
    console.log('Obrigatory vote.');
}