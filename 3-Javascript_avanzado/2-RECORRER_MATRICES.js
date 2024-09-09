// * RECORRER MATRICES

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let matrizSuperior = [
  ["x0", "x1", "x2"],
  ["y0", "y1", "y2"]
]

console.table(matriz);

// *RECORRER LA TOTALIDAD DE LA MATRIZ
for (let i = 0; i < matriz.length; i++) { // -> recorrer filas
  for (let j = 0; j < matriz[i].length; j++) { // -> recorrer columnas
    console.log(matriz[i][j]);
  }
}

for (let i = 0; i < matrizSuperior.length; i++) {
  console.log(matrizSuperior[i]);
  for (let j = 0; j < matrizSuperior[i].length; j++) {
    console.log(matrizSuperior[i][j]);
  }  
}