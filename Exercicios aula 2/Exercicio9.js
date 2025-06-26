/*9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, através
do seu peso e sua altura e imprima na tela sua condição de acordo com a tabela abaixo:
Fórmula do IMC = peso / (altura) ²
Tabela Condições IMC
Abaixo de 18,5 | Abaixo do peso
Entre 18,6 e 24,9 | Peso ideal (parabéns)
Entre 25,0 e 29,9 | Levemente acima do peso
Entre 30,0 e 34,9 | Obesidade grau I
Entre 35,0 e 39,9 | Obesidade grau II (severa)
Maior ou igual a 40 | Obesidade grau III (mórbida)*/

let peso = 80
let altura = 1.75
let imc = peso / (altura * altura)
console.log("Seu IMC é: " + imc.toFixed(2))
if (imc < 18.5) {
    console.log("Abaixo do peso")
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso ideal (parabéns)")
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Levemente acima do peso")
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log("Obesidade grau I")
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log("Obesidade grau II (severa)")
} else {
    console.log("Obesidade grau III (mórbida)")
}

