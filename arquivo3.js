let calificacion = 75

if (calificacion >= 70) {

    console.log("Resultado: Aprobado")
} else if (calificacion >= 60) {

    console.log("Resultado: Suficiente")
} else {
    
    console.log("Resultado: Reprobado")
}

/////////////////////////////////////////////////////

console.log("\nBucle for:")
for (let i = 0; i < 5; i++) {
    console.log("Iteración:", i)
}
/////////////////////////////////////////////////////

console.log("\nBucle while:")

let contador = 0

while (contador < 3) {
    console.log("Contador:", contador)
    contador++
}