var fs = require('fs')

var parametros = (process.argv);
var nombre = "";


for (var i = 2; i < parametros.length; i++) {
    nombre += (parametros[i]);
};

var archivo = fs.readFileSync(nombre);

console.log(archivo.toString().split('\n').length-1);




// Forma reomendada 
//var fs = require('fs')  
//var contents = fs.readFileSync(process.argv[2])  
//var lines = contents.toString().split('\n').length - 1  
//console.log(lines)