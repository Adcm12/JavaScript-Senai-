console.log('\x1b[31m%s\x1b[0m',"Ejemplo de uso de slice\n");

let texto = "JavaScript";
console.log(texto.slice(0, 4));   // Output: Java (desde el índice 0 hasta antes del índice 4)
console.log(texto.slice(4));      // Output: Script (desde el índice 4 hasta el final)
console.log(texto.slice(-6));     // Output: Script (los últimos 6 caracteres)
console.log(texto.slice(4, -1));  // Output: Scrip (desde el índice 4 hasta antes del último carácter)
console.log(texto.slice(10));     // Output: "" (si el índice de inicio es mayor o igual que la longitud, devuelve una cadena vacía)


console.log('\x1b[31m%s\x1b[0m',"Ejemplo de uso de slice con un arrray\n");
let frutas = ["manzana", "banana", "naranja", "kiwi"] 
console.log(frutas.slice(1, 3)); // Output: ["banana", "naranja"] (desde el índice 1 hasta antes del índice 3)
console.log(frutas.slice(-2));   // Output: ["naranja", "kiwi"] (los últimos 2 elementos)
console.log(frutas.slice(2, -1)); // Output: ["naranja"] (desde el índice 2 hasta antes del último elemento)
console.log(frutas.slice(4));   // Output: [] (si el índice de inicio es mayor o igual que la longitud, devuelve un array vacío)



console.log('\x1b[31m%s\x1b[0m',"\nEjemplo de uso de concat\n");
let saludo = "Hola";
let nombre = "Mundo";
let mensaje = saludo.concat(", ", nombre, "!");
console.log(mensaje); // Output: Hola, Mundo!
console.log(saludo); // Output: Hola (la cadena original no cambia)


console.log('\x1b[31m%s\x1b[0m',"\nEjemplo de uso de concat con un array\n");

let frutas1 = ["manzana", "banana"];
let frutas2 = ["naranja", "kiwi"];  
let frutasCombinadas = frutas1.concat(frutas2);
console.log(frutasCombinadas); // Output: ["manzana", "banana", "naranja", "kiwi"]


console.log('\x1b[31m%s\x1b[0m',"\nEjemplo de uso de split\n");

let nombres = "Ana,Beto,Carlos,Diana";
let arrayDeNombres = nombres.split(",");
console.log(arrayDeNombres); // Output: [ 'Ana', 'Beto', 'Carlos', 'Diana' ]

let fraseSeparadaPorEspacios = "Esta es una frase";
let palabras = fraseSeparadaPorEspacios.split(" ");
console.log(palabras); // Output: [ 'Esta', 'es', 'una', 'frase' ]

let letras = "abcde";
let arrayDeLetras = letras.split(""); // Separador vacío para dividir por cada carácter
console.log(arrayDeLetras); // Output: [ 'a', 'b', 'c', 'd', 'e' ]

let primerosDos = nombres.split(",", 2); // Limita la división a 2 elementos
console.log(primerosDos); // Output: [ 'Ana', 'Beto' ]



console.log('\x1b[31m%s\x1b[0m',"\nEjemplo de uso de de join\n");

let arrayDeFrutas = ["manzana", "banana", "naranja"];
let frutasUnidas = arrayDeFrutas.join(", ");
console.log(frutasUnidas); // Output: "manzana, banana, naranja"
let arrayDeNumeros = [1, 2, 3, 4, 5];
let numerosUnidos = arrayDeNumeros.join(" - ");
console.log(numerosUnidos); // Output: "1 - 2 - 3 - 4 - 5"
let arrayVacio = [];
let vacioUnido = arrayVacio.join(", ");
console.log(vacioUnido); // Output: "" (cadena vacía)
let arrayConElementosVacios = ["", "", ""];
let vaciosUnidos = arrayConElementosVacios.join(", ");
console.log(vaciosUnidos); // Output: ", , " (cadena con comas entre los elementos vacíos)