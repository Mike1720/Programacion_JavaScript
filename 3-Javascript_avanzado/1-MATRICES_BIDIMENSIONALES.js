// * INTRODUCCION A MATRICES

/* 
  NOTE:
    Se puede definir como una matriz de matrices (arreglo de arreglos), esto quiere decir que cada elemento de una matriz principal es otra matriz.
    La forma de visualizar una matriz suele ser en forma de tabla (filas y columnas)
*/

/* 

  [                     --> INICIO MATRIZ PRINCIPAL
     COLUMNA
     | 
    [1,2,3], -> FILA
    [4,5,6],
    [7,8,9]

  ]                     --> FIN MATRIZ PRINCIPAL


  [[1,2,3],[4,5,6],[7,8,9]]  --> MISMA MATRIZ

*/

// *CREAR UNA MATRIZ 

// OPCION 1 
let matriz = [
  [1, 2, 3], // -> FILA 0
  [4, 5, 6], // -> FILA 1
  [7, 8, 9]  // -> FILA 2
]

// OPCION 1 
let matrizSuperior = []

let fila1 = ["x0", "x1", "x2"]
let fila2 = ["y0", "y1", "y2"]

matrizSuperior[0] = fila1
matrizSuperior[1] = fila2

// *VISUALIZAR UNA MATRIZ
console.table(matriz)
console.table(matrizSuperior)

// *ACCEDER A UN ELEMENTO ESPECIFICO
console.log(matriz[1][1]); // -> 5


// *MODIFICAR UN ELEMENTO ESPECIFICO
matriz[0][1] = 15
console.table(matriz)


// *RECORRER UNA COLUMNA EN ESPECIFICO
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i][0]); // -> 1 4 7
}


// *RECORRER UNA FILA ES ESPECIFICO
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[0][i]); // -> 1 2 3
}