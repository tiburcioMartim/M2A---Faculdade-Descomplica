let A, B;
A = 21;
B = 8;

// A é maior que B e B é divisivel por 2
if (A > B) {
    console.log(`O valor ${A} é maior que ${B}\n`);
} else {
    console.log(`${B} é maior que ${A}\n`);
}

// B é maior ou igual a A ou B é dividido por 2 o resultado é 2
if (B >= A || B % 2 == 0) {
    console.log('True\n');
} else {
    console.log('False\n');
}

// A é maior que B e B é maior que 5
if (A > B && B > 5) {
    console.log('True\n');
} else {
    console.log('False\n');
}

// B é par ou ímpar (usando ternário)
B % 2 == 0 ? console.log(`${B} é Par`) : console.log(`${B} é Ímpar`);
