// * METODOS STRING

// *ACCEDER A UN CARACTER
{
  /* 
    NOTE:
      Existen 2 maneras de acceder a un caracter de manera individual, las cuales son:
        -metodo .charAt(position)
        -Tratar a la cadena como un objeto similar a un arreglo: str[position]
  */

  let str = "Hola mundo"
  let metodo1 = str.charAt(1)
  let metodo2 = str[1]

  console.log(metodo1); // -> "o"
  console.log(metodo2); // -> "o"

}

// *.length
{
  /* 
    NOTE:
      Retorna la longitud de una cadana de caracteres.
  */

  let str = "Mi cancion favorita es like a prayer de Madonna"
  let longitudStr = str.length

  console.log(longitudStr); // -> 47

  let cancionesFav = ["Louder", "Babydoll", "Judas"]
  console.log(typeof cancionesFav); // -> object ("array")
  console.log(typeof cancionesFav[0]); // -> string
  console.log(cancionesFav[0].length); // -> ?

}

// *.indexOf(searchString, position)
{

  /* 
    NOTE:
      Retorna la posicion de la primer ocurrencia de una subcadena
        searchString: Subcadena buscada dentro de la cadena principal
        position: Indice en el cual comienza la busqueda.
  */

  //  length    12345678911
  // i          01234567891
  let saludo = "¡Holaoaaaa!"
  let long = saludo.length

  let posicion1 = saludo.indexOf("o", 3)
  let posicion2 = saludo.indexOf("o")
  let posicion3 = saludo.indexOf("a", 5)
  let posicion4 = saludo.indexOf("a")

  console.log(posicion1); // -> 5
  console.log(posicion2); // -> 2
  console.log(posicion3); // -> 6
  console.log(posicion4); // -> 4

  //  length    12345678911234567892 
  //    i       01234567891123456789
  let nombre = "Miguel Angel Miranda"
  let long2 = nombre.length

  let indexNombre = nombre.indexOf("Angel")
  let indexApellido = nombre.indexOf("Miranda")

  console.log(indexNombre); // -> 7
  console.log(indexApellido); // -> 13 

}

// *.slice(start, end)
{
  /* 
    NOTE:
      Retorna una seccion de una cadena.
      start: Indice de comienzo de la porcion especificada de la cadena.
      end: Indice de fin de la porcion de la cadena. La subcadena incluye los caracteres hasta el carácter indicado por el final, pero sin incluirlo.
           Si no se indica, la subcadena continua hasta el final de la cadena principal
  */

  //  i          012345678911
  let message = "¡Hola mundo!"
  let i = message.length - 1// -> 12 - 1 = 11

  //*OPCION 1 
  {
    let corte
    corte = message.slice(0, message.length - 2)
    corte = message.slice(0, 10)
    let i = corte.length - 1 // -> 9
    console.log(corte); // -> "Hola mund"

    /* 
      El uso de "i" es un apoyo visual para saber como es se considera el parametro de fin, teniendo esta referencia se puede decir 
      que el fin es n-1
    */
  }

  //*OPCION 2 
  {
    let corte = message.slice(7)
    console.log(corte); // -> "undo!"
  }

  //*OPCION 3 
  {

    /*
      Al ser un numero negativo, el corte comienza desde el final de la cadena.
    */

    let corte
    corte = message.slice(-6)
    corte = message.slice(message.length - 6)

    console.log(corte); // -> "mundo!"

  }
}

// *.trim()
{
  /* 
    NOTE:
      Remueve los espacios en blanco del inicio y final de la cadena
  */

  let nombre = "  Miguel Angel      "
  let nombreSnBordes = nombre.trim()
  console.log(nombreSnBordes); // -> "Miguel Angel"
}

// *.split(separator, limit)
{
  /* 
    NOTES:
    Separa una cadena en subcadenas usando un separador especifico y lo retorna como un arreglo.
    separator: Cadena que identifica un caracter o caracteres usada para separar la cadena principal.
               Si se omite, se retornara un arreglo de un solo elemento conteniendo la cadena completa.
    limit: Valor usado para limitar el numero de elementos retornados en el arreglo
  */

  let message = "Buenos dias, extraño"
  let arr1 = message.split()
  let arr2 = message.split(" ")
  let arr3 = message.split(", ")

  console.log(arr1); // -> ["Buenos dias, extraño"]
  console.log(arr2); // -> ["Buenos", "dias,", "extraño"]
  console.log(arr3); // -> ["Buenos dias", "extraño"]

  let str = "me gustan los tacos, los dias soleados, los gatos"
  let arr4 = str.split(" los ")
  console.log(arr4); // -> ["me gustan", "tacos,", "dias soleados,", "gatos"]
}

// *.replace(searchValue, replaceValue)
{
  /* 
    NOTE:
      Remplaza texto en una cadena usando una expresion regular (RegExp) o cadena buscada.
      searchBalue: Cadena o expresion regular buscada.
      replaceValue: Cadena que contiene el texto para remplazar. Cuando el searchValue es una RegExp, todas las coincidencias son remplazadas,
                    de otra manera, solo la primer coincidencia del searchValue es remplazada.
  */

  let str1 = "Me gusta la pizza"
  let fraseRemplazada1 = str1.replace("Me gusta", "No me gusta")
  console.log(fraseRemplazada1); // -> "No me gusta la pizza"

  let str2 = "javascript es demasiado util, javascript es demasiado eficiente"
  let fraseRemplazada2 = str2.replace("javascript", "Python")
  let RegExpJS = new RegExp("javascript","g")
  let fraseRemplazada3 = str2.replace(RegExpJS, "Python")

  // UNA SOLA COINCIDENCIA
  console.log(fraseRemplazada2); // -> "Python es demasiado util, javascript es demasiado eficiente"
  // TODAS LAS COINCIDENCIAS
  console.log(fraseRemplazada3); // -> "Python es demasiado util, Python es demasiado eficiente"
}