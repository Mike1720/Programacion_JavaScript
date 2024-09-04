const prompt = require("prompt-sync")({ sigint: true })

function suma(x = 0, y = 0) {
  let resultado = x + y
  return resultado
}

function resta(x, y) {
  x ??= 0
  y ??= 0
  let resultado = x - y
  return resultado
}

function multiplicacion(x, y) {
  return x * y
}

function division(x, y) {
  if (y === 0) return "No se puede dividir por 0"
  return x / y

}
console.log(
  `
Bienvenido a su calculadora digital!
    1. Suma
    2. Resta
    3. Multiplicacion
    4. Division
`);

//  4 opciones
let opcion = parseInt(prompt("Indica que operacion deseas realizar: "))

let numero1
let numero2
let resultado

switch (opcion) {
  case 1:
    numero1 = parseInt(prompt("Indique el primer numero a sumar: "))
    numero2 = parseInt(prompt("Indique el segundo numero a sumar: "))
    resultado = suma(numero1, numero2)
    console.log(`El resultado de la suma es ${resultado}`)
    break
  case 2:
    numero1 = parseInt(prompt("Indique el primer numero a restar: "))
    numero2 = parseInt(prompt("Indique el segundo numero a restar: "))
    resultado = resta(numero1, numero2)
    console.log(`El resultado de la resta es ${resultado}`)
    break
  case 3:
    numero1 = parseInt(prompt("Indique el primer numero a multiplicar: "))
    numero2 = parseInt(prompt("Indique el segundo numero a multiplicar: "))
    resultado = multiplicacion(numero1, numero2)
    console.log(`El resultado de la multiplicacion es ${resultado}`)
    break
  case 4:
    numero1 = parseInt(prompt("Indique el primer numero a dividir: "))
    numero2 = parseInt(prompt("Indique el segundo numero a dividir: "))
    resultado = division(numero1, numero2)
    if (typeof resultado === "string") {
      console.log(resultado)
    } else {
      console.log(`El resultado de la division es ${resultado}`)
    }
    break
  default:
    console.log("Operacion invalida")
    break
}