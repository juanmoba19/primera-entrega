var express = require('express');
var app = express();
const courses = [{
        id: 1,
        nombre: 'Base de datos',
        duracion: 40,
        valor: 500000
    },
    {
        id: 2,
        nombre: 'Cocina',
        duracion: 60,
        valor: 550000
    },
    {
        id: 3,
        nombre: 'Baile',
        duracion: 35,
        valor: 700000
    }
];
const options = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'cc'
    }
};
let texto = '';

const argv = require('yargs')
    .command('inscribir', 'Agregar persona a curso', options)
    .argv;

let showInfoCourses = () => {
    setTimeout(function() {
        console.log(`ID : ${courses[0].id} - Nombre Curso: ${courses[0].nombre} - Duracion: ${courses[0].duracion} - Valor: ${courses[0].valor}`);
    }, 2000);
    setTimeout(function() {
        console.log(`ID : ${courses[1].id} - Nombre Curso: ${courses[1].nombre} - Duracion: ${courses[1].duracion} - Valor: ${courses[1].valor}`);
    }, 4000);
    setTimeout(function() {
        console.log(`ID : ${courses[2].id} - Nombre Curso: ${courses[2].nombre} - Duracion: ${courses[2].duracion} - Valor: ${courses[2].valor}`);
    }, 6000);
};

let printWeb = () => {
    let course = courses.find(item => item.id == argv.id);
    if (course) {
        texto = 'El estudiante ' + argv.n + '\n' +
            'con Cedula ' + argv.cc + '\n' +
            'Se ha matriculado en el curso ' + course.nombre + '\n' +
            'Con duracion de ' + course.duracion + '\n' +
            'Y un valor de ' + course.valor;
    } else {
        console.log("No se encontro el curso")
    }
}

let executeMain = () => {
    if (typeof argv.n === 'undefined') {
        showInfoCourses();
    } else {
        printWeb();
    }
};

app.get('/', function (req, res) {
    res.send(texto)
});

executeMain();
app.listen(3000);