// * CALLBACKS
/* 
  NOTE:
    Los callbacks son funciones que se envian como parametro a otras funciones y se ejecutan despues de que finalice
    una tarea asincrona. Ademas ayudar a la reutilizacion de codigo
*/

// *RECORRE ARRAY Y EJECUTAR CALLBACK
/**
 * Recorre un arreglo, retornando uno nuevo con las caracteristicas del callback ejecutado
 * @param {Array} arr Arreglo inicial
 * @param {Function} callback Funcion que modifica cada elemento del arreglo
 * @returns Nuevo arreglo modificado por el callback
*/

function procesarArr(arr, callback) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
  }
  return newArr
}

// *FUNCION QUE MUESTRA LOS ELEMENTOS DEL ARRAY
function mostrarElem(elemento) {
  return elemento
}


// *MULTIPLICAR ARRAY
const multiplicacionPorDos = (el) => {
  return el * 2
}

// *CUADRADO DE ELEMENTOS DEL ARRAY
const cuadrado = (el) => {
  return el ** 2
}


let arr = [1, 2, 3, 4, 5]
let res1 = procesarArr(arr, mostrarElem)
let res2 = procesarArr(arr, multiplicacionPorDos)
let res3 = procesarArr(arr, cuadrado)

console.log(res1); // -> [1, 2, 3, 4, 5]
console.log(res2); // -> [2, 4, 6, 8, 10]
console.log(res3); // -> [1, 4, 9, 16, 25]