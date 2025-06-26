let a = 10; // 'a' es un número
let b = 5;  // 'b' es un número

console.log("Suma:", a + b); // Esto es una simple suma numérica: 15
console.log("¿Es a mayor que b?", a > b); // Compara dos números, 10 es mayor que 5: true
console.log("¿Es a estrictamente igual a '10'?", a === "10"); // Compara un número (10) con una cadena ("10"). Tienen el mismo valor, ¡pero tipos diferentes! Por lo tanto, la comparación estricta devuelve: false
console.log("¿Es a igual a '10'?", a == "10"); // Compara un número (10) con una cadena ("10"). El operador '==' intenta convertir la cadena "10" a un número antes de comparar. Como la conversión es exitosa y ambos tienen el valor 10, la comparación no estricta devuelve: true
console.log("true && false:", true && false); // Operador lógico AND, ambos deben ser true para que el resultado sea true: false
console.log("true && false:", true || false); // Operador lógico OR, Por lo menos 1 tiene que ser true para que el resultado sea true: false