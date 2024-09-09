// * METODOS ARRAY

// *.map()
{
  /* 
    NOTE:
      Llama a una funcion callback en cada uno de los elementos del arreglo, y retorna un arreglo que contiene los resultados

      callbackfn: Una funcion que acepta hasta 3 argumentos. El metodo map llama a la funcion callback una vez por cada elemento
      en el arreglo.

      thisSrg: Objeto al cual la palabra reservada "this" puede hacer referencia en la funcion callback. Si se omite, undefined 
      usado como el valor de "this"
  */

  let nums = [2, 4, 6, 8, 10]

  let resultados

  // FUNCION DECLARADA
  {
    function multiplicadoPorDos(numero) {
      return numero * 2
    }

    resultados = nums.map(multiplicadoPorDos)

    console.log(resultados); // -> [4, 8, 12, 16, 20]
  }

  // FUNCION EXPRESADA
  {
    resultados = nums.map(function (x) {
      return x * 2
    })

    console.log(resultados);
  }

}

// *.filter()
{

  /* 
    NOTE:
      Retorna los elementos de un arreglo que satisfacen la condicion especificada en la funcion callback

      predicate: Funcion que aceptas hasta 3 argumentos. El metodo filter llamma al predicado de la funcion una vez por cada elemento
      en el arreglo.

      thisArg: Objeto al cual la palabra reservada "this" puede hacer referencia en la funcion callback. Si se omite, undefined 
      usado como el valor de "this"
  */

  let x = [15, 36, 84, 50, 98]

  // FUNCION DECLARADA
  {
    function mayores40(x) {
      return x > 40
    }

    let mayores = x.filter(mayores40)
    console.log(mayores); // -> [84, 50, 98]

  }

  // FUNCION FLECHA
  {
    let mayores = x.filter((x) => x > 40)

    console.log(mayores); // -> [84, 50, 98]
  }

}

// *.reduce(callbackfn, initialValue)
{

  /* 
    NOTE:
      LLama a la funcion callback especificada para todos los elementos en el arreglo. El valor de retorno de la funcion callback es el 
      resultado acumulado, y es proveido como un argumento en la siguiente llamada a la funcion callback.

      callbackfn: Funcion que acepta hasta 4 argumentos. El metodo reduce llama a la funcion callback una vez por cada elemento en el
      arreglo.

      initialValue: Si initialValue es especificado, este es usado como el valor inicial para inicial la acumulacion. La primer llamada
      a la funcion callback provee este valor como argumento en vez de un valor del arreglo

  */

  let nums = [16, 7, 19, 3]

  // SUMAR ELEMENTOS DEL ARREGLO
  {
    let valorInicial = 0

    let sumaArr = nums.reduce((acumulador, valorActual) => acumulador + valorActual, valorInicial)

    console.log(sumaArr); // -> 45

  }

  // RESTAR ELEMENTOS DEL ARREGLO
  {
    const resta = (acumulador, valorActual) => {
      return acumulador - valorActual
    }

    let restaArr = nums.reduce(resta, 50)

    console.log(restaArr); // ->
  }

}

// *.forEach()
{

  /* 
    NOTE:
      Ejecuta la accion especificada para cada elemento en el arreglo.

      callbackfn: Una funcion que acepta hasta 3 argumentos. forEach llama a la funcion callback una vez por cada elemento en el arreglo
      thisArg: Objeto al cual la palabra reservada "this" puede hacer referencia en la funcion callback. Si thisArg es omitido, undefined
      es usado como el valor de "this"


      A diferencia de otros metodos que retornan un arreglo como map, forEch no retorna nada, SOLO EJECUTA LA FUNCION PARA CADA ELEMENTO
      DEL ARREGLO. Ademas, no muta al arreglo original.
  */

  let paises = ["Colombia", "Venezuela", "Argentina", "México", "Canada"];
  let paisesMayuscula = []

  paises.forEach(agregarPais) // -> undefined

  function agregarPais(pais) {
    paisesMayuscula.push(pais.toUpperCase())
  }

  console.log(paises); // -> ["Colombia", "Venezuela", "Argentina", "México", "Canada"]
  console.log(paisesMayuscula); // -> ["COLOMBIA", "VENEZUELA", "ARGENTINA", "MEXICO", "CANADA"]
}
