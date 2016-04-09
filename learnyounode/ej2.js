var numeros = (process.argv);
var resultado = 0;

for (var i = 2; i < numeros.length; i++) {
    resultado += Number(numeros[i]);
};

console.log(resultado);