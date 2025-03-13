"use strict"; //modo estricto para elegir las variables
let nombre = "Ana López"; //variable
const pi = 3.1416; //constante
var ciudad = "CDMX";  //variable

console.log(nombre, pi, ciudad);

let texto = "los gatos son los mejores";
let numero = 12;
let numero2 = 1;
let bool = true;

console.log(typeof texto, typeof numero, typeof bool);

let nombre2 = prompt("¿Cómo te llamas?");

alert("Bienvenida(o)  " + nombre2)

// Función para realizar operaciones
function calculadora() {
    let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicación, división)");
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let resultado;

    switch (operacion.toLowerCase()) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicación":
            resultado = num1 * num2;
            break;
        case "división":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("Error: No se puede dividir entre cero.");
                return;
            }
            break;
        default:
            alert("Operación no válida. Por favor, elige suma, resta, multiplicación o división.");
            return;
    }

    alert("El resultado de la " + operacion + " es: " + resultado);
}

// Llamar a la función de la calculadora
calculadora();
/*
let num = prompt("ingresa tu calificacion")
if (num>= 90){
alert ("ya pasaste facil")
}

else if (num>=60 || num>=60){
    alert("pasaste")
}
else{
    alert("reprobaste")
}

let usuario = prompt ("ingresa usuario");
let clave = prompt ("contraseña");

if(usuario === "admin" && clave ==="12345"){
    alert("Acceso permitido");
}else {
    alert ("nel prro");
}


let dia= prompt ("ingrese un dia")

switch(dia.toLowerCase()){
    case "lunes":
        alert ("inicio de semana");
        break;
    case"martes":
        alert ("mhe martes");
        break;
case"miercoles":
case"jueves":
         alert ("dias que no me interesan");
         break;
    case"viernes":
    case"sabado":
         alert("ahora si viene lo chido");
         break;
         default:
            alert("parametro no permitido");

        }
*/

// pedir al usuario un numero y saber si es par o impar, sin %

let num = prompt("ingresa un numero");
let resultado;

if (num === null || num.trim() === "") {
    alert("No ingresaste un número.");
} else {
    // Convertir el número a entero
    let numeroIngresado = parseInt(num);

    // Verificar si el número es un número válido
    if (isNaN(numeroIngresado)) {
        alert("Por favor, ingresa un número válido.");
    } else {
        // Comprobar si el número es par o impar
        resultado = (numeroIngresado / 2);
        if (resultado === Math.floor(resultado)) {
            alert("El número " + numeroIngresado + " es par.");
        } else {
            alert("El número " + numeroIngresado + " es impar.");
        }
    }
}