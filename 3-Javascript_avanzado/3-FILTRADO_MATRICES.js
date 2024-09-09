// * FILTRADO DE MATRICES
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// *ENCONRAR LOS NUMEROS PARES
for (let i = 0; i < matriz.length; i++) { // -> recorrer filas, i -> 0
  for (let j = 0; j < matriz[i].length; j++) { // -> recorrer columnas, j -> 0 
    if (matriz[i][j] % 2 == 0) {
      console.log(matriz[i][j]);
    }
  }
}
