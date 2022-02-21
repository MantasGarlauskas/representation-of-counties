const matematika = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

const veiksmas = '+';
const pirmas = 7;
const antras = 5;

const rezultatas = matematika[veiksmas](pirmas, antras);
console.log(`${pirmas} ${veiksmas} ${antras} = ${rezultatas}`);