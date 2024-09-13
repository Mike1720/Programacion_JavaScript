// *MATRICES
/*
  Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos. 
  La idea es solo registrar el total de los gastos, al finalizar la jornada. Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. 
  Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día.
  Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.

  Gastos de toda la semana: 
    Crear una función que nos sirva para obtener el total de gastos de una semana específica. 
    Recordemos que cada fila representa una semana. El número de semana deberá recibirse por parámetro.
  
  Gastos de un día de la semana: 
    Crea una función que nos sirva para obtener el total de gastos de un día específico de la semana. 
    Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sábados del mes. 
    El número correspondiente al día deberá recibirse por parámetro.
    Recuerda que el número de día es determinado por las columnas.
    
  Gasto total: 
    Crea una función que nos sirva para obtener el valor total de gastos de todo un mes. La función deberá retornar dicho valor.
*/

let gastoMes1 = [

  // L    M     M   J     V     S     D
  [3452, 128, 943, 7650, 2234, 986, 1045], // -> SEMANA 1
  [6789, 4556, 7890, 354, 5678, 982, 1934], // -> SEMANA 2
  [2345, 874, 3829, 4657, 1298, 6432, 756], // -> SEMANA 3
  [8923, 1012, 3578, 472, 285, 9384, 4921] // -> SEMANA 4

];

const gastoMes2 = [
  [5692, 783, 1234, 8765, 345, 9023, 4789],
  [2367, 6548, 1932, 857, 7629, 5012, 3894],
  [7854, 934, 4561, 271, 823, 9402, 1678],
  [3928, 1845, 5932, 7201, 145, 9821, 3789]
];

// CALCULAR GASTO POR SEMANA
{
  let semanaInvalida1
  let semanaInvalida2
  let semanaInvalida3

  //*OPCION 1
  {
    /**
      * 
      * @param {number} semana Numero de la semana a verificar, este debe de ser un numero entre 1 y 4
      * @param {Array} matriz Matriz en donde se encuentran los gastos
      * @returns Devuelve gastos totales de la semana indicada
      */

    function verificarGastoSemanal(semana, matriz) {

      if (semana > 4 || !semana || !matriz) return "Semana invalida"

      let gastoSemanalTotal = matriz[semana - 1].reduce((acumulador, valorActual) => acumulador + valorActual, 0)

      return `Los gastos de la semana fueron: $${gastoSemanalTotal}`
    }

    // MES 1
    let gastoMes1Semana1 = verificarGastoSemanal(1, gastoMes1)
    let gastoMes1Semana2 = verificarGastoSemanal(2, gastoMes1)

    // MES 2
    let gastoMes2Semana1 = verificarGastoSemanal(1, gastoMes2)
    let gastoMes2Semana2 = verificarGastoSemanal(2, gastoMes2)

    // ENTRADAS INVALIDAS
    semanaInvalida1 = verificarGastoSemanal(0)
    semanaInvalida2 = verificarGastoSemanal()
    semanaInvalida3 = verificarGastoSemanal(5)

    console.log(gastoMes1Semana1); // -> "Los gastos de la semana fueron: $16438"
    console.log(gastoMes1Semana2); // -> "Los gastos de la semana fueron: $28183"

    console.log(gastoMes2Semana1); // -> "Los gastos de la semana fueron: $30631"
    console.log(gastoMes2Semana2); // -> "Los gastos de la semana fueron: $28239"


    console.log(semanaInvalida1); // -> "Semana invalida"
    console.log(semanaInvalida2); // -> "Semana invalida"
    console.log(semanaInvalida3); // -> "Semana invalida"
  }

  // *OPCION 2
  {
    /**
      * 
      * @param {number} semana Numero de la semana a verificar, este debe de ser un numero entre 1 y 4
      * @param {Array} matriz Matriz en donde se encuentran los gastos
      * @returns Devuelve gastos totales de la semana indicada
    */

    const verificarGastoSemanal = (semana, matriz) => {
      if (semana > 4 || !semana || !matriz) return "Semana invalida"

      let sumatoriaGastosTotales = 0

      for (let i = 0; i < matriz[semana - 1].length; i++) {
        sumatoriaGastosTotales += matriz[semana - 1][i]
      }

      return `Los gastos de la semana fueron: $${sumatoriaGastosTotales}`
    }

    // MES 1
    let gastoMes1Semana3 = verificarGastoSemanal(3, gastoMes1)
    let gastoMes1Semana4 = verificarGastoSemanal(4, gastoMes1)

    // MES 2 
    let gastoMes2Semana3 = verificarGastoSemanal(3, gastoMes2)
    let gastoMes2Semana4 = verificarGastoSemanal(4, gastoMes2)

    // ENTRADAS INVALIDAS
    semanaInvalida1 = verificarGastoSemanal(0)
    semanaInvalida2 = verificarGastoSemanal()
    semanaInvalida3 = verificarGastoSemanal(5)

    console.log(gastoMes1Semana3);// -> "Los gastos de la semana fueron: $20191"  
    console.log(gastoMes1Semana4);// -> "Los gastos de la semana fueron: $28575"

    console.log(gastoMes2Semana3);// -> "Los gastos de la semana fueron: $25523"
    console.log(gastoMes2Semana4);// -> "Los gastos de la semana fueron: $32661"

    console.log(semanaInvalida1);// -> "Semana invalida"
    console.log(semanaInvalida2);// -> "Semana invalida"
    console.log(semanaInvalida3); // -> "Semana invalida"
  }
}

// CALCULAR GASTO POR DIA
{

  let gastoLunes
  let gastoMartes
  let gastoMiercoles
  let gastoJueves
  let gastoViernes
  let gastoSabado
  let gastoDomingo
  let diaInvalido1
  let diaInvalido2

  // *OPCION 1
  {
    /**
     * 
     * @param {string} dia 
     * @param {Array} matriz 
     * @returns 
    */

    function verificarGastoDia(dia, matriz) {

      if (!dia || !matriz) return "Dia invalido"

      let gastoDia = 0
      let columna
      let mensaje

      function calculoGastoDia() {
        for (let fila = 0; fila < matriz.length; fila++) {
          gastoDia += matriz[fila][columna]
        }
        return (`El gasto total de los dias ${dia} es de: $${gastoDia}`)
      }

      switch (dia) {
        case "Lunes":

          columna = 0
          mensaje = calculoGastoDia()
          return mensaje

        case "Martes":
          columna = 1
          mensaje = calculoGastoDia()
          return mensaje

        case "Miercoles":
          columna = 2
          mensaje = calculoGastoDia()
          return mensaje

        case "Jueves":
          columna = 3
          mensaje = calculoGastoDia()
          return mensaje

        case "Viernes":
          columna = 4
          mensaje = calculoGastoDia()
          return mensaje

        case "Sabado":
          columna = 5
          mensaje = calculoGastoDia()
          return mensaje

        case "Domingo":
          columna = 6
          mensaje = calculoGastoDia()
          return mensaje

        default:
          return ("Dia invalido")
      }
    }

    // DIA SELECCIONADO
    // gastoLunes = verificarGastoDia("Lunes", gastoMes1);
    // gastoMartes = verificarGastoDia("Martes", gastoMes1);
    // gastoMiercoles = verificarGastoDia("Miercoles", gastoMes1);
    // gastoJueves = verificarGastoDia("Jueves", gastoMes1);
    // gastoViernes = verificarGastoDia("Viernes", gastoMes1);
    // gastoSabado = verificarGastoDia("Sabado", gastoMes1);
    // gastoDomingo = verificarGastoDia("Domingo", gastoMes1);

    // DATOS INVALIDOS
    // diaInvalido1 = verificarGastoDia("", gastoMes1)
    // diaInvalido2 = verificarGastoDia()

    // console.log(gastoLunes); // -> "El gasto total de los dias Lunes es de: $21509"
    // console.log(gastoMartes); // -> "El gasto total de los dias Martes es de: $6570"
    // console.log(gastoMiercoles); // -> "El gasto total de los dias Miercoles es de: $16240"
    // console.log(gastoJueves); // -> "El gasto total de los dias Jueves es de: $13133"
    // console.log(gastoViernes); // -> "El gasto total de los dias Viernes es de: $9495"
    // console.log(gastoSabado); // -> "El gasto total de los dias Sabado es de: $17784"
    // console.log(gastoDomingo); // -> "El gasto total de los dias Domingo es de: $8656"
    // console.log(diaInvalido1); // -> "Dia invalido"
    // console.log(diaInvalido2); // -> "Dia invalido"

  }

  // *OPCION 2
  {
    /**
     * 
     * @param {*} dia 
     * @param {*} matriz 
    */

    const verificarGastoDia = (dia, matriz) => {

      if (!dia || !matriz) return "Error en los datos"
      if (dia > 7) return "Dia invalido"

      let sumatoriaDias = 0

      for (let i = 0; i < matriz.length; i++) {
        sumatoriaDias += matriz[i][dia - 1]
      }

      return (`El gasto total fue de: $${sumatoriaDias}`)
    }

    // DIA SELECCIONADO
    // gastoLunes = verificarGastoDia(1, gastoMes1)
    // gastoMartes = verificarGastoDia(2,gastoMes1)
    // gastoMiercoles = verificarGastoDia(3,gastoMes1)
    // gastoJueves = verificarGastoDia(4,gastoMes1)
    // gastoViernes = verificarGastoDia(5,gastoMes1)
    // gastoSabado = verificarGastoDia(6,gastoMes1)
    // gastoDomingo = verificarGastoDia(7, gastoMes1)

    // DATOS INVALIDOS
    // diaInvalido1 = verificarGastoDia(0, gastoMes1)
    // diaInvalido2 = verificarGastoDia(0)


    // console.log(gastoLunes); // -> "El gasto total fue de: $21509"
    // console.log(gastoMartes); // -> "El gasto total fue de: $6570"
    // console.log(gastoMiercoles); // -> "El gasto total fue de: $16240"
    // console.log(gastoJueves); // -> "El gasto total fue de: $13133"
    // console.log(gastoViernes); // -> "El gasto total fue de: $9495"
    // console.log(gastoSabado); // -> "El gasto total fue de: $17784"
    // console.log(gastoDomingo); // -> "El gasto total fue de: $8656"

    // console.log(diaInvalido1); // -> "Error en los datos"
    // console.log(diaInvalido2); // -> "Error en los datos"

  }

}

// CALCULAR GASTO TOTAL
{
  let gastosTotalMes1
  let gastosTotalMes2
  let error

  // *OPCION 1
  {
    /**
     * 
     * @param {Array} matriz 
     * @returns Sumatoria de los valores de los dias de la matriz 
    */

    function gastoTotal(matriz) {
      if (!matriz) return "Datos faltantes"

      let sumatoriaMes = 0

      for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          sumatoriaMes += matriz[i][j]
        }
      }
      return sumatoriaMes
    }

    // gastosTotalMes1 = gastoTotal(gastoMes1)
    // gastosTotalMes2 = gastoTotal(gastoMes2)
    // error = gastoTotal()

    // console.log(gastosTotalMes1); // -> 93387
    // console.log(gastosTotalMes2); // -> 117054
    // console.log(error); // -> "Datos faltantes"
  }

  // *OPCION 2
  {
    /**
     * 
     * @param {Array} matriz 
     * @returns 
    */

    const gastoTotal = (matriz) => {
      if (!matriz) return "Dato faltante"

      let result = 0

      matriz.forEach(semana => semana.forEach(dia => result += dia))

      return result
    }

    gastosTotalMes1 = gastoTotal(gastoMes1)
    gastosTotalMes2 = gastoTotal(gastoMes2)
    error = gastoTotal()

    console.log(gastosTotalMes1); // -> 93387
    console.log(gastosTotalMes2); // -> 117054
    console.log(error); // -> "Dato faltante"
  }
}

// *CALLBACKS
/* 
  Gastos por semana:
  Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales. 
  En la posición 0 estará el gasto de la semana 0, en la posición 1 el gasto de la semana 1, etc. 
  Será obligatorio el uso de callbacks para esta función.
*/

// GASTOS POR SEMANA 
{

  /**
   * 
   * @param {Array} matriz 
   * @param {Func} callback 
   */

  function gastoSemanal(matriz, callback) {

    let gastosSemanales = []

    for (let i = 0; i < matriz.length; i++) {
      gastosSemanales.push(matriz[i].reduce((acumulador, valorActual) => acumulador + valorActual))

    }

    callback(gastosSemanales)

  }

  /**
   * 
   * @param {Array} gastos 
   */

  function mostrarPorConsola(gastos) {
    gastos.forEach((gasto, index) => console.log(`El gasto de la semana ${index + 1} fue de: ${gasto}`))
  }

  gastoSemanal(gastoMes2, mostrarPorConsola) // -> CALLBACK POR FUNCION DECLARADA

  gastoSemanal(gastoMes1, (gastos) => gastos.forEach((gasto, index) => console.log(`El gasto la semana ${index + 1} fue de: ${gasto}`))) // -> CALLBACK POR FUNCION ANONIMA

}