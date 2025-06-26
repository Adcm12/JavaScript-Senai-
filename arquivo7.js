console.log('\x1b[31m%s\x1b[0m',"\nEjemplo de uso de parseInt\n");
// La función parseInt() convierte una cadena en un número entero.
// Si la cadena no puede ser convertida, devuelve NaN (Not a Number).

console.log(parseInt("10"))         // Devuelve 10 (base 10 por defecto)
console.log(parseInt("10.5"))       // Devuelve 10 (la parte decimal se trunca)
console.log(parseInt("10 20 30"))   // Devuelve 10 (solo analiza la primera parte numérica)
console.log(parseInt("   40"))      // Devuelve 40 (ignora los espacios en blanco iniciales)
console.log(parseInt("40 años"))     // Devuelve 40 (se detiene en el primer carácter no numérico)
console.log(parseInt("no es un número")) // Devuelve NaN
console.log(parseInt("0x1A"))       // Devuelve 26 (base 16 se asume por el prefijo "0x")
console.log(parseInt("010"))        // Devuelve 10 (base 10 por defecto, la interpretación octal está en desuso)
console.log(parseInt("010", 8))     // Devuelve 8 (se especifica explícitamente la base 8)
console.log(parseInt("FF", 16))      // Devuelve 255 (base 16)
console.log(parseInt("1101", 2))    // Devuelve 13 (base 2 - binario)
console.log(parseInt("123", 8))     // Devuelve 83 (1*8^2 + 2*8^1 + 3*8^0)
console.log(parseInt("-5"))         // Devuelve -5
console.log(parseInt("+5"))         // Devuelve 5
console.log(parseInt("Infinity"))   // Devuelve NaN