const prompt = require('prompt-sync')();

let nombre = prompt('Ingrese su nombre: ');
console.log(`Hola, ${nombre}. Bienvenido a la clase 3.`);

// Entrada de datos numéricos
let entradaedad = prompt('Ingresa tu edad: ');
let edad = Number(entradaedad);
if (isNaN(edad)) {
    console.log('Error: Debes ingresar un número válido.');
} else {
    console.log(`Tu edad ingresada es: ${edad}`);
}

// Entrada anidada
let edad2 = Number(prompt('Ingresa tu edad: '));

if (isNaN(edad2)) {
    console.log('Error: Debes ingresar un número válido.');
} else {
    if (edad2 >= 18) {
        console.log('Acceso concedido: sos mayor de edad.');
    } else {
        console.log('Acceso denegado: sos menor de edad.');
    }
}

// Ejercicio #1: Calculadora de tarifa de transporte 
let edad3 = Number(prompt('Ingrese su edad: ')); 
let estudiante = prompt('¿Tienes carnet? (si/no): ');
let carnet = estudiante.toLowerCase() === 'si';
let tarifa = 1000;

if (isNaN(edad3)) { 
    console.log('Error: Debes ingresar un número válido.');
} else {
    if (edad3 >= 65 || carnet === true) {
        tarifa = tarifa / 2;
        console.log(`Tu tarifa es: $${tarifa}`); 
    } else {
        console.log(`Tu tarifa es: $${tarifa}`);
    }
}

// Ejercicio #2: Clasificar calificaciones con validación
let nota = Number(prompt('Ingresa la nota asignada: '));

if (isNaN(nota)) {
    console.log('Error: Debes ingresar un número válido.');
} else {
    if (nota <= 5) {
        console.log('Reprobado');
    } else if (nota <= 6) {
        console.log('Aprobado');
    } else if (nota <= 8) {
        console.log('Sobresaliente');
    } else {
        console.log('Excelente');
    }
}

// Ejercicio #3: Becado
let promedio = Number(prompt('Ingrese el promedio general: '));
let money = prompt('¿Ingresos mensuales bajos? (si/no): ');
let ingresof = money.toLowerCase() === 'si';

if (isNaN(promedio)) {
    console.log('Error: Debes ingresar un número válido.');
} else {
    if (promedio >= 8 || ingresof === true) {
        console.log('Felicidades, has sido aceptado en la beca');
    } else {
        console.log('No ha sido aceptado en la beca');
    }
}

