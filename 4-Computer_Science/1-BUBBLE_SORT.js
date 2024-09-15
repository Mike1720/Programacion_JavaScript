// * BUBBLE SORT u ORDENAMIENTO BURBUJA
/*
  NOTE:
    Nos ayuda a ordenar elementos, dentro un array, de menor a mayor o viceversa.

    Bubble sort es un algoritmo de ordenamiento simple pero muy repetitivo, ya que consiste evaluar un elemento
    con el siguiente a la derecha, y los intercambia en caso se encuentren en el orden incorrecto. Este proceso
    se repite tantas veces como la longitud del arreglo.

    EJEMPLO
    [5, 4, 1, 6, 3, 2] -> Arreglo/Lista a ordenar
    [4, 1, 5, 3, 2, 6] -> Primer recorrido      ->¿Esta ordenada? No
    [1, 4, 3, 2, 5, 6] -> Siguiente recorrido   ->¿Esta ordenada? No
    [1, 3, 2, 4, 5, 6] -> Siguiente recorrido   ->¿Esta ordenada? No
    [1, 2, 3, 4, 5, 6] -> Ultimo recorrido      ->¿Esta ordenada? Si
*/
// * NUMBERS
{
  let arr = [10, 18, 9, 25, 3];
  let arr1 = [5, 4, 1, 6, 3, 2];
  let arr2 = [12, 34, 251, 36, 13, 21];

  // FUNCIONAMIENTO BUBBLE SORT
  {
    for (let j = 0; j < arr.length; j++) {

      // RECORREMOS LA TOTALIDAD DEL ARREGLO
      for (let i = 0; i < arr.length; i++) {

        // EVALUAMOS EL VALOR DE LA POSICION [i] CON EL VALOR DE LA POSICION [i + 1]
        if (arr[i] > arr[i + 1]) {

          // ANTES DE PISAR UN VALOR, LO ALMACENAREMOS EN UNA VARIABLE TEMPORAL
          let currentValue = arr[i];

          // PISAMOS EL VALOR 
          arr[i] = arr[i + 1];

          // ASIGNAMOS EL VALOR PISADO AL VALOR PREVIO
          arr[i + 1] = currentValue;

        };
      };
    };
    console.log(arr); // -> [3, 9, 10, 18, 25]
  }

  // FUNCIÓN BUBBLE SORT
  {
    /**
     * Ordena de menor a mayor los elementos del arreglo
     * 
     * Para su elaboración se pueden considerar los siguientes pasos
     * 
     * - 1.- Iterar n veces la longitud del arreglo a ordenar (Es necesario para validar que todos los datos esten en el orden correcto)
     * 
     * - 2.- Iterar sobre el arreglo
     * 
     * - 3.- Evaluar si el elemento del arreglo en la posicion n es mayor que el elemento de la posición n + 1
     * 
     * - 4.- Si el paso anterior es verdadero, almacenar el valor de la posicion n + 1 en una variable de apoyo
     * 
     * - 5.- Remplazar el valor de la posición n + 1 con el valor de la posición
     * 
     * - 6.- Remplazar el valor de la posición n con la variable de apoyo  
     * @param {Array} array Arreglo a ordenar
     */
    function bubbleSort(array) {

      for (let j = 0; j < array.length; j++) {

        for (let i = 0; i < array.length; i++) {

          if (array[i] > array[i + 1]) {

            let support = array[i + 1];

            array[i + 1] = array[i];
            array[i] = support;
          };
        };
      };
    };

    bubbleSort(arr1)
    // bubbleSort(arr2)
    // console.log(arr1); // -> [1, 2, 3, 4, 5, 6]
    // console.log(arr2); // -> [12, 13, 21, 34, 36, 251]
  }
}

// * STRINGS
{
  /* 
    NOTE:
      La misma logica usada para ordenar numeros aplica para ordenar strings, ya que el valor de los caracteres esta
      asociado a un valor numerico (codigo ASCII), lo cual hace posible el ordenamiento de los strings.

      IMPORTANTE:
      ESTE CODIGO ES PRINCIPALMENTE PARA EL ORDEMIENTO DE ARREGLOS CUYOS ELEMENTOS COMIENCEN DE LA MISMA MANERA,
      YA SEA LETRA CAPITAL O MINUSCULA, YA QUE AL REALIZAR EL ORDENAMIENTO SIEMPRE UBICARÁ LAS LETRAS MAYUSCULAS
      AL INICIO (A-Z) Y DESPUES LAS MINUSCULAS (a-z)
  */

  let strings = ["Zapato", "Torta", "Auto", "zorra", "Aura", "Ausa", "alarma"];

  for (let i = 0; i < strings.length; i++) {

    for (let j = 0; j < strings.length; j++) {

      if (strings[j] > strings[j + 1]) {

        let currentValue = strings[j + 1];

        strings[j + 1] = strings[j];

        strings[j] = currentValue;

      };
    };
  };

  console.log(strings); // -> ["Aura", "Ausa", "Auto", "Torta", "Zapato", "alarma", "zorra"]
}

// * OBJECTS
{
  /* 
    NOTE:
      Al realizar un metodo Bubble Sort en un objeto es importante restarle una unidad a la longitud 
      del arreglo en el segundo ciclo for, etos debido a que estariamos comparando el ultimo elemento 
      con undefined, lo que provocaria que el programa se rompa, lo cual no sucede con strings o numeros
  */

  let objects = [
    {
      nombre: "Miguel",
      edad: 24
    },
    {
      nombre: "Ameyali",
      edad: 17
    },
    {
      nombre: "Emily",
      edad: 16
    },
    {
      nombre: "Edson",
      edad: 23
    }
  ];

  // *ORDENAMIENTO POR PROPIEDAD "edad"
  {
    for (let j = 0; j < objects.length; j++) {

      // console.log(objects[j]);

      for (let i = 0; i < objects.length - 1; i++) {

        // console.log(objects[i].edad); // -> 16, 17, 23, 16, 17, 23, 16, 17, 23, 16, 17, 23
        // console.log(objects[i + 1].edad); // -> 17, 23, 24, 17, 23, 24, 17, 23, 24, 17, 23, 24


        if (objects[i].edad > objects[i + 1].edad) {

          let currentValue = objects[i]
          objects[i] = objects[i + 1]
          objects[i + 1] = currentValue
        };
      };
    };

    console.log(objects);
    /* 
      [
        { nombre: "Emily", edad: 16 },
        { nombre: "Ameyali", edad: 17 },
        { nombre: "Edson", edad: 23 },
        { nombre: "Miguel", edad: 24 }
      ]
    */
  }

  // *ORDENAMIENTO POR PROPIEDAD NOMBRE
  {
    for (let i = 0; i < objects.length; i++) {

      // console.log(objects[i]);

      for (let j = 0; j < objects.length - 1; j++) {

        // console.log(objects[j].nombre); // -> "Emily", "Ameyali", "Edson" x4
        // console.log(objects[j + 1].nombre); // -> "Amayali", "Edson", "Miguel" x4

        if (objects[j].nombre > objects[j + 1].nombre) {

          let currentValue = objects[j];

          objects[j] = objects[j + 1]
          objects[j + 1] = currentValue

        }
      }
    }

    console.log(objects);
    /* 
     [
       { nombre: "Ameyali", edad: 17 },
       { nombre: "Edson", edad: 23 },
       { nombre: "Emily", edad: 16 },
       { nombre: "Miguel", edad: 24 }
     ]
   */
  }
}