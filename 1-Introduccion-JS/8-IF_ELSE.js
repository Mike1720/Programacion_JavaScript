// *ESTRUCTURA DE CONTROL IF/ELSE
{
  let edad = 25

  /* 
    ESTRUCTURA IF/ELSE
    if -> palabra reservada (sí)
    (condition) -> condicion a ejecutar
    {} -> Instrucciones a ejecutar si la condicion es verdadera
    else -> palabra reservada (si no)
    {} ->  Instrucciones a ejecutar si la condicion es falsa
  */

  if (edad >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
}

// *** ODD OR EVEN
/*
  ?Instrucciones:

  ?Solicita al usuario un número entero.
  ?Usa una condición para verificar si el número es divisible por 2.
  ?Imprime un mensaje indicando si el número es par o impar.
*/
{

  // *SOLUCION 1
  {

    let number = 15

    /**
     *
     * @param {number} number evaluated number
     * @returns text "Par" or "Impar"
     */

    function isOdd(number) {
      if (number % 2 === 0) {
        return ("Par");
      } else {
        return ("Impar");
      }
    }

    let resultIsOdd = isOdd(number)
    console.log(`El numero ${number} es ${resultIsOdd}`);
  }

  // *SOLUCION 2 
  {
    let number = 15

    /**
     *
     * @param {number} number evaluated number
     * @returns
     */

    function isEven(number) {
      if (number % 2 === 0) {
        return ("Par");
      }
      else {
        return ("Impar");
      }
    }
    let resultIsEven = isEven(number)
    console.log(`El numero ${number} es ${resultIsEven}`);
  }
}


// *GRADES
/*
  ?Instrucciones:

  ?Solicita al usuario una calificación numérica.
  ?Usa condicionales para determinar la letra correspondiente:
  ?A: 90-100
  ?B: 80-89
  ?C: 70-79
  ?D: 60-69
  ?F: 0-59
  ?Imprime la letra correspondiente.
*/
{

  /**
   *
   * @param {number} number note to evaluate
   * @returns text 
   */

  function calculateNote(number) {
    if (number >= 90) {
      return ("A")
    }
    if (number >= 80) {
      return ("B")
    }
    if (number >= 70) {
      return ("C")
    }
    if (number >= 60) {
      return ("D")
    }
    if (number >= 0) {
      return ("F")
    }
  }

  let note = 90
  let noteResult = calculateNote(note)
  console.log(`La nota para la calificacion ${note} es: ${noteResult}`);
}

// ***BIGGEST NUMBER
/*
  ?Instrucciones:

  ?Solicita al usuario tres números enteros.
  ?Usa condicionales para determinar cuál de los tres números es el mayor.
  ?Imprime el número mayor.
*/
{
  /**
   *
   * @param {number} num1 number to evaluate
   * @param {number} num2 number to evaluate
   * @param {number} num3 number to evaluate
   * @returns text with biggest number from params
   */

  function biggestNumber(num1, num2, num3) {

    let bigOne;
    if (num1 > num2 && num1 > num3) {
      bigOne = num1
    }
    if (num2 > num1 && num2 > num3) {
      bigOne = num2
    }
    if (num3 > num2 && num1 < num3) {
      bigOne = num3
    }
    return (`EL NUMERO MAS GRANDE ES ${bigOne}`)
  }

  let num1 = 100
  let num2 = 300
  let num3 = 130

  let resultBiggestNumber = biggestNumber(num1, num2, num3)
  console.log(resultBiggestNumber);

}

// ***AÑO BISIESTO
/*
  ?Instrucciones:

  ?Solicita al usuario un año.
  ?Usa condicionales para verificar si el año es bisiesto:
  ?Un año es bisiesto si es divisible por 4.
  ?Pero no es bisiesto si es divisible por 100, a menos que también sea divisible por 400.
  ?Imprime un mensaje indicando si el año es bisiesto o no.
  *Se puede determinar si un año es bisiesto si:
    *Es divisible entre 400
    *No es divisible entre 100, y en caso de serlo que a la vez tambien sea divisible entre 400
*/
{
  /**
   *
   * @param {number} year año que se desea saber si es bisiesto
   * @returns text 
   */

  function bisiesto(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return ("Es un año bisiesto")
    } else {
      return ("No es un año bisiesto")
    }
  }

  let year1 = 1992
  let year2 = 2000
  let year3 = 1900

  let result1 = bisiesto(year1)
  let result2 = bisiesto(year2)
  let result3 = bisiesto(year3)

  console.log(`El año ${year1} ${result1}`);
  console.log(`El año ${year2} ${result2}`);
  console.log(`El año ${year3} ${result3}`);
}

// *** FAHRENHEIT TO CELSIUS
/*
  ?Instrucciones:

  ?Solicita al usuario una temperatura y la unidad (Celsius o Fahrenheit).
  ?Usa condicionales para realizar la conversión:
  ?De Celsius a Fahrenheit: F = C * 9/5 + 32
  ?De Fahrenheit a Celsius: C = (F - 32) * 5/9
*/
{
  /**
   *
   * @param {number} tempeture cantidad de temperatura
   * @param {string} unit unidad a cambiar
   * @returns text
   */

  function tempetureConversion(tempeture, unit) {
    if (unit.toLowerCase() === "Fahrenheit".toLowerCase()) {
      let result = tempeture * 9 / 5 + 32
      return (`${tempeture} grados celsius a grados fahrenheit son ${result}`)
    } else {
      let result = (tempeture - 32) * 5 / 9
      return (`${tempeture} grados Fahrenheit a grados celsius son ${result}`)
    }
  }

  let conversionUnit1 = "celsius"
  let conversionTemperature1 = 25

  let conversionUnit2 = "fahrenheit"
  let conversionTemperature2 = 150

  let resultConvertion1 = tempetureConversion(conversionTemperature1, conversionUnit1)
  let resultConvertion2 = tempetureConversion(conversionTemperature2, conversionUnit2)

  console.log(resultConvertion1);
  console.log(resultConvertion2);
}