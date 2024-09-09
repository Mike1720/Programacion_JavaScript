// * TIPOS DE FUNCIONES

// *FUNCIONES DECLARAS
/* 
  NOTE:
    Pueden ser invocadas antes de su declaración, debido al hoisting.
    Hoisting: término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano,
              scope global o de función. 
*/
console.log(suma(1, 3)); // -> 4

function suma(x1, x2) {
  return x1 + x2
}

console.log(suma(1, 3)); // -> 4


// *FUNCIONES EXPRESADAS O ANONIMAS
/* 
  NOTE:
    Son aquellas que se asignan a una variable o se utilizan como parte de una expresion. 
    Estas funciones no pueden ser invocadas antes de su definición.
*/
{
  // console.log(resta(3, 5)); // -> Error: NO puede ser inicialiazada antes de su declaración

  let resta = function (x1, x2) {
    return x1 - x2
  }

  console.log(resta(3, 5)); // -> -2
}

// *FUNCIONES FLECHA (ARROW FUNCTIONS)
/* 
  NOTE:
      Fueron introducidas para escribir funciones de manera mas concisa.
    -No tienes enlaces propios a this o super y no puede usarse como metodo
    -No apta para los metodos call, apply, y bind, que se basan en establecer un ambito o alcance
*/
{
  let multiplicacion = (x1, x2) => {
    return x1 * x2
  }

  console.log(multiplicacion(7, 8)); // -> 56

  let suma = (x, y) => x + y

  console.log(suma(2, 3)); // -> 5

}

