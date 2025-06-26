function saludar(nombre) {
    return `Hola, ${nombre}!`
}

let saludoAna = saludar("Ana")
console.log(saludoAna)

const sumar = (a, b) => {
    return a + b
}

console.log("Suma:", sumar(5, 3))