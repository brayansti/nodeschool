var fs = require('fs')  

var contenido = fs.readFile(process.argv[2], callback);


function callback (error, contenido) {
    var lineas = contenido.toString().split('\n').length - 1;
    console.log(lineas);
};