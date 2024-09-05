// * ALGORITMOS CLASICOS CON ARREGLOS

let num = [10, 20, 30, 40, 50]

// *MODIFICAR CADA UNO DE SUS ELEMENTOS A UN ARRAY E IMPRIMIRLOS
{
  for (let i = 0; i < num.length; i++) {
    num[i] += 1
    console.log(num[i]);
  }
}

// *MODIFICAR UN SOLO DATO
{
  num[1] = 44
  console.log(num); // -> 11, 44, 31, 41, 51
}

// *AGREGAR ELEMENTOS A UN ARRAY
{
  let notas = [8, 4, 10, 6]
  notas[notas.length] = 9
  console.log(notas); // -> [8, 4, 10, 6, 9] 
}

// *EXTRAER ELEMENTOS DE UN ARRAY A UNA VARIABLE
{
  let nombres = ["Miguel", "Ameyali", "Sam", "Edson"]
  let nombreSeleccionado = nombres[0]
  console.log(nombreSeleccionado); // -> "Miguel"
}

// *EXTRAER TODOS LOS ELEMENTOS PARA ALGO ESPECIFICO
{
  let num = [10, 20, 30, 40, 50]
  let sumarotiaNum = 0

  for (let i = 0; i < num.length; i++) {
    sumarotiaNum += num[i]
  }
  let promedio = sumarotiaNum / num.length
  console.log(promedio); // -> 30
}

// *ENCONTRAR MAYOR Y/O MENOR
{

  let numeros = [10, 48, 7, 52, 19]
  
  /* 
    NOTE:
      Igualar las variables a 0 seria un error muy grande, ya que al no saber si los numeros del arreglo son negativos, podrian
      dejar al 0 como numero mas grande o pequeño segun el caso. Asi que se opta por seleccionar el primer elemento del array
      para comenzar la comparacion
  */
 
  let minNumero = numeros[0]
  let maxNumero = numeros[0]

  // 
  for (let i = 0; i < numeros.length; i++) {
    if (minNumero > numeros[i]) {
      minNumero = numeros[i]
    }
    if (maxNumero < numeros[i]) {
      maxNumero = numeros[i]
    }
  }
  console.log(minNumero); // -> 7
  console.log(maxNumero); // -> 52

}