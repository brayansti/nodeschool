var fs = require('fs')
var path = require('path')

var contenido = fs.readdir(process.argv[2], callback);


//function callback (error, contenido) {
//    var lineas = contenido.toString().split('\n').length - 1;
//    console.log(lineas);
//};

function callback (error, lista) {
    for (var i = 2; i < lista.length; i++) {
        path.extname(lista[i]);
        console.log(path.extname(lista[i]));
    };
    //var extencion = path.extname(lista)
    //console.log(extencion)
}