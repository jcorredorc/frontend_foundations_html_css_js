// Recorrer un arreglo con forEach - forEach es una función que toma un valor actual y lo procesa, pero no devuelve nada. Se usa para realizar acciones con cada elemento del arreglo, como imprimirlo, modificarlo, etc.

const frutas = ['manzana', 'banana', 'naranja'];
frutas.forEach(function(fruta) {
    console.log(fruta);
});

frutas.forEach(fruta => console.log(fruta.toUpperCase()));



// Recorrer un arreglo con map - map es una función que toma un valor actual y devuelve un nuevo valor transformado. El resultado es un nuevo arreglo con los valores transformados, sin modificar el arreglo original.

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
    return numero * numero;
});
console.log(cuadrados);

const cubos = numeros.map(numero => numero * numero * numero);
console.log(cubos);

const resultado= frutas.map(fruta => fruta.length);
console.log(resultado);

// Recorrer un arreglo con filter - filter es una función que toma un valor actual y devuelve true o false, dependiendo de si el valor cumple una condición. Si devuelve true, el valor se incluye en el nuevo arreglo; si devuelve false, se excluye.

const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numerosPares);

const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
console.log(numerosImpares);

const frutasConA = frutas.filter(fruta => fruta.includes('a'));
console.log(frutasConA);    

// Recorrer un arreglo con reduce - reduce es una función que toma un acumulador y un valor actual, y devuelve un nuevo valor acumulado. Se puede usar para sumar, multiplicar, concatenar, encontrar el máximo, etc.

const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(suma);

const producto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(producto);

const concatenacion = frutas.reduce((acumulador, fruta) => acumulador + ' ' + fruta);
console.log(concatenacion.trim());  

const maximo = numeros.reduce((acumulador, numero) => numero > acumulador ? numero : acumulador, 0);
console.log(maximo);

// estrucutura MAp: clave-valor con superpoderes - iterable, tiene claves, tiene índices, permite valores duplicados, ordena por inserción, tiene métodos útiles para manipular los datos

const mapa = new Map();
mapa.set('nombre', 'Juan');
mapa.set('edad', 30);
mapa.set('ciudad', 'Madrid');

console.log(mapa.get('nombre')); // Juan
console.log(mapa.get('edad')); // 30
console.log(mapa.get('ciudad')); // Madrid

mapa.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`);
});


// Estrucutura Set: colección de valores únicos - iterable, no tiene claves, no tiene índices, no permite valores duplicados 

const conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
conjunto.add(2); // No se añadirá porque ya existe

console.log(conjunto.has(2)); // true
console.log(conjunto.has(4)); // false

conjunto.forEach(valor => {
    console.log(valor);
}); 
