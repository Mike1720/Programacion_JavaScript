// *METODOS DE ARRAYS
/* 
  NOTE: 
    Funciones previamente definidas para poder manipular este tipo de dato.
*/

// *.push(items)
{
  /* 
    NOTE:
      Agrega un nuevo elemento al final del arreglo, y retorna la nueva longitud del arreglo.
      items: elemento a agregar, puede recibir un o mas elementos
  */

  // length        1         2          3
  //  i            0         1          2
  let colores = ["Rojo", "Naranja", "Carmesi"];
  let coloresLongitud = colores.push("Azul", "Amarillo")

  console.log(coloresLongitud); // -> 5
  console.log(colores); // -> ["Rojo", "Naranja", "Carmesi", "Azul", "Amarillo"]

  colores.push("Verde") // -> ?
  colores // -> ?

}

// *.pop()
{
  /* 
    NOTE:
      Remueve el ultimo elemento de un arreglo y lo retorna. Si el arreglo esta vacio se retornara "undefiend" 
      y el arreglo no será modificado. 
  */

  let colores = ["Rojo", "Naranja", "Carmesi"];
  let colorEliminado = colores.pop()

  console.log(colores); // -> ["Rojo", "Naranja"]
  console.log(colorEliminado); // -> "Carmesi"

}

// *.shift()
{
  /* 
    NOTE:
      Remueve el primer elemento de un arreglo y lo retorna. Si el arreglo esta vacio se retornara "undefiend" 
      y el arreglo no será modificado. 
  */

  let numeros = [1, 2, 3, 4, 5, 6]
  let numeroEliminado = numeros.shift()

  console.log(numeros); // -> [2, 3, 4, 5, 6]
  console.log(numeroEliminado); // -> 1
}

// *.unshift("items")
{
  /* 
    NOTE:
      Inserta un nuevo elemento al incio de un arreglo, y retorna la nueva longitud del arreglo.
      items: Elementos a agregar.
  */

  //  length        1
  //  i             0
  let djs = ["Martin Garrix"];
  let longitudDjs = djs.unshift("Zedd")

  console.log(djs); // -> ["Martin Garrix", "Zedd"]
  console.log(longitudDjs); // -> 2

  djs.unshift("Alan Walker", "Kygo") // -> ?
  djs // -> ?

}

// *.join(separator)
{
  /* 
    NOTE:
      Une todos los elementos de un arreglo en una cadena de texto, separados por el caracter especificado como separador.
      separator: Cadena usada para separar un elemento del arreglo de los siguientes, resultando una cadena de texto.
      Si se omite, los elementos del arreglo son separados por una coma.
  */

  let abecedario = ["a", "b", "c", "d"];
  let sinSeparador = abecedario.join()
  let separadoVacio = abecedario.join("")
  let separadoEspacio = abecedario.join(" ")
  let separadoGuionEspacio = abecedario.join(" - ")

  console.log(sinSeparador); // -> "a,b,c,d"
  console.log(separadoVacio); // -> "abcd"
  console.log(separadoEspacio); // -> "a b c d"
  console.log(separadoGuionEspacio); // -> "a - b - c - -d"

}

// *.indexOf(searchElement, fromIndex)
{
  /* 
    NOTE:
      Retorna el indice de la primer ocurrencia de un valor dentro de un arreglo, retorna -1 si no se encuentra el valor.
      searchElement: Elemento a localizar en el arreglo
      fromIndex: Indice del arreglo en el cual comienza la busqueda. Si se omite, la busqueda comienza en el indice 0
  */

  // length         1         2       3        4          5        6
  // i              0         1       2        3          4        5
  let frutas = ["Guayaba", "Pera", "Pera", "Manzana", "Platano", "Uva"]
  let indiceFruta1 = frutas.indexOf("Pera")
  let indiceFruta2 = frutas.indexOf("Manzana")

  console.log(indiceFruta1); // -> 1
  console.log(indiceFruta2); // -> 3

}

// *.lastIndexOf()
{
  /* 
    NOTE:
      Retorna el indice de la ultima ocurrencia de un valor dentro de un arreglo, retorna -1 si no se encuentra el valor.
        searchElement: Elemento a localizar en el arreglo
        fromIndex: Indice del arreglo en el cual comienza a buscar hacia atras. Si se omite, la busqueda comienza en el indice 0

  */

  // i              0         1       2        3          4        5          6
  let frutas = ["Manzana", "Guayaba", "Pera", "Pera", "Manzana", "Platano", "Uva"]

  let ultimaOcurrencia1 = frutas.lastIndexOf("Pera")
  let ultimaOcurrencia2 = frutas.lastIndexOf("Manzana")
  let ultimaOcurrencia3 = frutas.lastIndexOf("Manzana", 2)

  console.log(ultimaOcurrencia1); // -> 3
  console.log(ultimaOcurrencia2); // -> 4
  console.log(ultimaOcurrencia3); // -> 0


}

// *.includes()
{
  /* 
    NOTE:
      Determina si un arreglo contiene un determinado elemento, retornando true o false segun el caso
      searchElement: Elemento a buscar
      fromIndex: Posicion en el cual comienza la busqueda de searchElement
  */

  let frutas = ["Manzana", "Guayaba", "Pera", "Pera", "Manzana", "Platano", "Uva"]

  let dentroArr1 = frutas.includes("Manzana")
  let dentroArr2 = frutas.includes("Manzana", 5)
  let dentroArr3 = frutas.includes("Pera")

  console.log(dentroArr1); // -> true
  console.log(dentroArr2); // -> false
  console.log(dentroArr3); // -> true

}
