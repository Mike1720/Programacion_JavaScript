// * INTRODUCCION A ARRAYS
/* 
  NOTE:
    Tipo de dato que almacena multiples valores.
    Los elementos de un array estan ordenados bajo un indice, y este comienza desde el valor 0
*/

// *CREAR UN ARRAY

let edades = [24, 37, 18, 59, 7];
let nombres = ["Miguel", "Ameyali", "Edson", "Emily"];
let boolean = [true, false, false, true];
let combinados = [15, "Hola", true];

// *ACCEDER A UN ELEMENTO ESPECIFICO DE UN ARREGLO

//?          arr[position]
console.log(edades[0]); // -> 24
console.log(nombres[0]); // -> "Miguel"
console.log(boolean[0]); // -> true

// *RECORRER UN ARREGLO
{
  // EDADES
  {
    for (let i = 0; i < edades.length; i++) {
      console.log(edades[i]);
    }
  }

  // NOMBRES
  {
    for (let i = 0; i < nombres.length; i++) {
      console.log(nombres[i]);
    }
  }

  // BOOLEAN
  {
    for (let i = 0; i < boolean.length; i++) {
      console.log(boolean[i]);
    }
  }

  // COMBINADOS
  {
    for (let i = 0; i < combinados.length; i++) {
      console.log(combinados[i]);
      
    }
  }

}
