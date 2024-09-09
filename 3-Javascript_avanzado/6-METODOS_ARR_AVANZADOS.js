// * METODOS DE ARREGLOS AVANZADOS

// *.slice(start, end)
{
  /*
    NOTE:
      Retorna una copia de la seccion de un arreglo. Tanto para el parametro start y end, se puede usar un indice negativo
      para indicar el desplazamiento del final del arreglo. Por ejemplo -2 refiere al segundo elemento del final del arreglo

      start: Indice de comienzo de la porcion especificada del arreglo. Si start es indefinido, entonces el corte comienza 
      en el indice 0

      end: Indice de finalizacion de la porcion especificada del arreglo. Esto es exclusivo del elemento en el indice "end".
      Si end es indefinido, entonces el corte se extiende hasta el final del arreglo. (index - 1)
  */

  //   i     0  1  2  3  4  5  6  7  8  9 
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let section

  section = arr.slice(2)
  console.log(section); // -> [3, 4, 5, 6, 7, 8, 9, 10]

  section = arr.slice(-2)
  console.log(section); // -> [9, 10]

  section = arr.slice(2, 6)
  console.log(section); // -> [3, 4, 5, 6]

}

// *.splice(star, deleteCount,...items)
{
  /* 
    NOTE:
      Remueve los elementos de un arreglo, y si es necesario, inserta nuevos elementos en su lugar, retornando un nuevo
      arreglo con los elementos eliminados

      start: Indice de comienzo en el arreglo desde el cual se comienza a remover elementos 
      deleteCount: Numero de elementos a remover
      ...items: Elementos nuevos que sustituiran los elementos eliminados
  */

  //    i         0         1         2        3        4       5
  let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

  let mesesEliminados = meses.splice(2, 1, "Agosto");

  console.log(meses); // -> ["Enero", "Febrero", "Agosto", "Abril", "Mayo", "Junio"]
  console.log(mesesEliminados); // -> ["Marzo"]
}

// *.sort(compareFn)
{
  /* 
    NOTE:
      Ordena un arreglo. Este metodo muta al arreglo y retorna una referencia AL MISMO arreglo.

      compareFn: Funcion usada para determinar el orden de los elementos. Se espera que retorne un valor negativo si el 
      primer argumento es menor al segundo argumento, cero si son iguales, y de lo contrario positivo. Si se omite,
      los elementos son ordenados en ascendencia, ASCII orden de caracteres.

  */

  // ORDENAMIENTO DE NUMEROS
  {
    let numeros = [7, 6, 2, 8, 5, 3, 1, 9, 4, 11, 84]

    // SIN PARAMETROS
    {
      numeros.sort() // -> Ordena en base al primer digito [1, 11, 2, 3, 4, 5, 6, 7, 8, 84, 9]
      console.log(numeros);
    }

    // CON PARAMETROS (Menor -> Mayor)
    {
      numeros.sort((a, b) => a - b) // -> Ordena de menor a mayor [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 84]
      console.log(numeros);
    }
  }

  // ORDENAMIENTO DE STRINGS
  {
    let strings = ["Alfabeto", "amarillo", "gato", "Perro", "Zorro", "zapato"]

    // SIN PARAMETROS (Mayus first)
    {
      strings.sort() // -> Ordena primero mayusculas, despues minusculas ["Alfabeto", "Perro", "Zorro","amarillo", "gato", "zapato"]
      console.log(strings);
    }

    // CON PARAMETROS (Orden alfabetico)
    {
      strings.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" })) // -> Ordena por abecedario ["Alfabeto", "amarillo", "gato", "Perro", "zapato", "Zorro" ]
      console.log(strings);
    }
  }
}

// *.find()
{
  /* 
    NOTE:
      Retorna el valor del PRIMER ELEMENTO en el arreglo donde predicate es verdadero, de lo contrario undefined 

      predicate: find llama al predicado una vez por cada elemento del arreglo, en orden ascendente, hasta que encuentre uno
      donde predicate retorne verdadero. Si se encuentra un elemento, find inmediatamente retorna ese elemento. De lo contrario,
      find retorna undefined

      thisArg: Si se provee, será usado como este valor por cada invocacion del predicado. Si no es proveido, undefined será usado
  */

  let num = [2, 12, 60, 26, 50, 38, 47, 56, 94, 15, 64]

  // ARRAY ORDENADO
  {
    num.sort((a, b) => a - b)
    let numEncontrado = num.find(x => x > 40)
    console.log(numEncontrado); // -> 47
  }

  // ARRAY DESORDENADO
  {
    let numEncontrado = num.find(x => (x > 20))
    console.log(numEncontrado); // -> 26
  }
}