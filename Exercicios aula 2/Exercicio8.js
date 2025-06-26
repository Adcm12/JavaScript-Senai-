/*8 - Faça um algoritmo que compare três valores inteiros diferentes e imprima na tela os valores
em ordem decrescente*/

let valor1 = 5
let valor2 = 1
let valor3 = 1

if (valor1 > valor2 && valor1 > valor3) {
    if (valor2 > valor3) {
        console.log(valor1, valor2, valor3)
    } else {
        console.log(valor1, valor3, valor2)
    }
}
else if (valor2 > valor1 && valor2 > valor3) {
    if (valor1 > valor3) {
        console.log(valor2, valor1, valor3)
    } else {
        console.log(valor2, valor3, valor1)
    }
} else {
    if (valor1 > valor2) {
        console.log(valor3, valor1, valor2)
    } else {
        console.log(valor3, valor2, valor1)
    }
} 
