console.log("Hello, World!");
console.log("Title", title);
// variables
var title = "Easycars" // var is golbal scope - DEPRECATED
let title2 = "Easycars" // let is block scope
const PI = 3.14159 // const is block scope and cannot be reassigned

console.log("Title", title2);
console.log("PI", PI);

// strings
let nombre = "Maria";
let apellido = "Gomez";
let edad = 30;
let esEstudiante = true;
let frase = "Hola, mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años.";
let frase2 = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;

// numbers
let entero = 42;
let decimal = 3.14;
let negativo = -10;
let notANumber = NaN;
let infinito = Infinity;

console.log("Entero:", entero);
console.log("Decimal:", decimal);
console.log("Negativo:", negativo);
console.log("Not a Number:", notANumber);
console.log("Infinito:", infinito);

// boolean
let esVerdadero = true;
let esFalso = false;

console.log("Es verdadero:", esVerdadero);
console.log("Es falso:", esFalso);

// null y undefined
let valorNulo = null;
let valorIndefinido;

// objetos
let persona = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: false
};

console.log("Persona:", persona);
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Es estudiante:", persona.esEstudiante);

// arrays
let numeros = [1, 2, 3, 4, 5];
let frutas = ["manzana", "banana", "naranja"];

console.log("Números:", numeros);
console.log("Frutas:", frutas);
console.log("Primer número:", numeros[0]);
console.log("Segunda fruta:", frutas[1]);


// typeof variables
console.log("Tipo de title:", typeof title);
console.log("Tipo de edad:", typeof edad);
console.log("Tipo de esEstudiante:", typeof esEstudiante);
console.log("Tipo de persona:", typeof persona);
console.log("Tipo de numeros:", typeof numeros);    


// operadores
let a = 10;
let b = 5;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);
console.log("Exponenciación:", a ** b);

// operadores de comparación
console.log("a es igual a b:", a == b);
console.log("a es estrictamente igual a b:", a === b);
console.log("a es diferente de b:", a != b);
console.log("a es estrictamente diferente de b:", a !== b);
console.log("a es mayor que b:", a > b);
console.log("a es menor que b:", a < b);
console.log("a es mayor o igual que b:", a >= b);
console.log("a es menor o igual que b:", a <= b);

// operadores lógicos
let x = true;
let y = false;

console.log("x AND y:", x && y);
console.log("x OR y:", x || y);
console.log("NOT x:", !x);  

// operadores de asignación
let c = 10;
c += 5; // c = c + 5
console.log("c después de += 5:", c);
c -= 3; // c = c - 3
console.log("c después de -= 3:", c);
c *= 2; // c = c * 2
console.log("c después de *= 2:", c);
c /= 4; // c = c / 4
console.log("c después de /= 4:", c);
c %= 3; // c = c % 3
console.log("c después de %= 3:", c);
c **= 2; // c = c ** 2
console.log("c después de **= 2:", c); 

// operadores de incremento y decremento
let d = 5;
d++; // d = d + 1
console.log("d después de incremento:", d);
d--; // d = d - 1
console.log("d después de decremento:", d);
--d; // d = d - 1
console.log("d después de decremento:", d);  

// operadores de comparación de igualdad -coerción de tipos
let e = 10;
let f = "10";

console.log("e == f:", e == f); // true, porque compara solo el valor
console.log("e === f:", e === f); // false, porque compara valor y tipo

// operadores de comparación de desigualdad - coerción de tipos
console.log("e != f:", e != f); // false, porque compara solo el valor
console.log("e !== f:", e !== f); // true, porque compara valor y tipo      

// operadores de comparación de orden - coerción de tipos
console.log("e > f:", e > f); // false, porque "10" se convierte a 10
console.log("e < f:", e < f); // false, porque "10" se convierte a 10
console.log("e >= f:", e >= f); // true, porque "10" se convierte a 10
console.log("e <= f:", e <= f); // true, porque "10" se convierte a 10      

// operadores de comparación de igualdad - sin coerción de tipos
console.log("e === f:", e === f); // false, porque compara valor y tipo
console.log("e !== f:", e !== f); // true, porque compara valor y tipo          

// operadores de comparación de orden - sin coerción de tipos
console.log("e > f:", e > f); // false, porque "10" no se convierte a 10
console.log("e < f:", e < f); // false, porque "10" no se convierte a 10
console.log("e >= f:", e >= f); // false, porque "10" no se convierte a 10
console.log("e <= f:", e <= f); // false, porque "10" no se convierte a 10  

// operadores de comparación de igualdad - con coerción de tipos
console.log("e == f:", e == f); // true, porque compara solo el valor
console.log("e != f:", e != f); // false, porque compara solo el valor  

// operadores de comparación de orden - con coerción de tipos
console.log("e > f:", e > f); // false, porque "10" se convierte a 10
console.log("e < f:", e < f); // false, porque "10" se convierte a 10
console.log("e >= f:", e >= f); // true, porque "10" se convierte a 10
console.log("e <= f:", e <= f); // true, porque "10" se convierte a 10      

// operadores lógicos
let g = true;
let h = false;

console.log("g AND h:", g && h); // false, porque ambos deben ser true
console.log("g OR h:", g || h); // true, porque al menos uno es true
console.log("NOT g:", !g); // false, porque g es true
console.log("NOT h:", !h); // true, porque h es false

// Precedencia de operadores
let resultado = 10 + 5 * 2; // multiplicación tiene mayor precedencia que suma
console.log("Resultado de 10 + 5 * 2:", resultado); // 20

resultado = (10 + 5) * 2; // paréntesis alteran la precedencia
console.log("Resultado de (10 + 5) * 2:", resultado); // 30

resultado = 10 + 5 * 2 > 20 && true; // multiplicación > comparación > lógica
console.log("Resultado de 10 + 5 * 2 > 20 && true:", resultado); // false

resultado = 10 + 5 * 2 > 20 || false; // multiplicación > comparación > lógica
console.log("Resultado de 10 + 5 * 2 > 20 || false:", resultado); // false

resultado = !(10 + 5 * 2 > 20); // multiplicación > comparación > lógica
console.log("Resultado de !(10 + 5 * 2 > 20):", resultado); // true 

// estructuras de control
let edad2 = 18;
if (edad2 >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

let edad = 18;
edad >= 18 ? console.log("Eres mayor de edad.") : console.log("Eres menor de edad.");

let dia = "Lunes";
switch (dia) {
    case "Lunes":
        console.log("Hoy es lunes.");
        break;
    case "Martes":
        console.log("Hoy es martes.");
        break;
    default:
        console.log("No es lunes ni martes.");
}

for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
}

let j = 0;
while (j < 5) {
    console.log("Número:", j);
    j++;
}

let k = 0;
do {
    console.log("Número:", k);
    k++;
} while (k < 5);

// for of
let frutas = ["manzana", "banana", "naranja"];
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

// for in
let persona2 = {
    nombre: "Ana",
    edad: 28,
    esEstudiante: true
};

for (let clave in persona2) {
    console.log("Clave:", clave, "Valor:", persona2[clave]);
}


// Funciones - Sesión  

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Carlos"));

const sumar = (a, b) => a + b;

console.log("Suma de 5 y 3:", sumar(5, 3));

function esMayorDeEdad(edad) {
    return edad >= 18;
}

console.log("¿Es mayor de edad?", esMayorDeEdad(20));   