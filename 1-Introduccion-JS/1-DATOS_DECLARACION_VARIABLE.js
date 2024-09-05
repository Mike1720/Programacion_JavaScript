// *TIPOS DE DATOS PRIMITIVOS
// En JavaScript, un primitive (valor primitivo, tipo de dato primitivo) son datos que no son un objeto y no tienen métodos.

// BOOLEANO
{
  /* 
    NOTE:
      Representa una valor logico que puede ser true o false
  */

  let esMayor = true
  let tienePermiso = false
}

// NULL
{
  /* 
    NOTE:
      Representa la ausencia INTENCIONAL de un valor, este es diferente de undefined ya que se asigna
      explicitamente.
  */
  let vacio = null
}

// UNDEFINED
{
  /*
    NOTE:
      Variable a la cual no se le ha asignado un valor
  */
  let sinValor // -> undefined 
}

// NUMBER
{
  /*
    NOTE: 
      Representa tanto numeros enteros como de punto flotante
  */
  let num1 = 15
  let num2 = 10.3
}

// BIGINT
{
  /* 
    NOTE:
      Primitivo numerico que permite almacenar y operar de forma segura con numeros enteros muy grandes,
      mas alla del limite seguro de Number
  */
  let bigInt = 1234567890123456789012345678901234567890155n
}

// STRING
{
  /* 
    NOTE:
      Se utiliza para representar datos textuales. Se definen usando comillas simples (''), comillas dobles (""), o 
      comillas invertidas para interpolacion
  */
  let mensaje = "Hola, mundo";
  let saludo = '¡Buenos días!';
  let nombre = `Juan`;
}

// SYMBOL
{
  /* 
    NOTE:
      Valor primitivo ÚNICO e INMUTABLE y se puede utilizar como clave de una propiedad de objeto
  */
  let id1 = Symbol(5)
  let id2 = Symbol(5)
  console.log(id1 === id2); // -> false
}

// * PRACTICA DECLARACION DE VARIABLES

let numero = 15
let typeNumber = typeof numero
console.log(typeNumber); // -> number

let numeroFloat = 15.78
let typeNumberFloat = typeof numeroFloat
console.log(typeNumberFloat) // -> number

let booleano = true
let typeBoolean = typeof booleano
console.log(typeBoolean) // -> boolean 

let string = "Caracteres"
let typeString = typeof string
console.log(typeString) // -> string

let vacio = null
let typeNull = typeof vacio
console.log(typeNull) // -> object

let indefinido;
let typeUndefined = typeof indefinido
console.log(typeUndefined) // -> undefined