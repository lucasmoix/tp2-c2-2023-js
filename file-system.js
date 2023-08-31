const fs = require('fs'); //TODO: ver la otra forma con imports

const path = './data/inventors.json';

// cadena de texto
let inventorsStr = fs.readFileSync(path, 'utf-8');

// array de objetos
let inventors = JSON.parse(inventorsStr);

console.log(inventors.filter(inventor => inventor.first == 'Albert'));
