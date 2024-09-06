// *VALIDADOR DE CONTRASEÑA
{
  /*
    Validador de contraseña:
      Crea una variable llamada ‘contraseña’ donde guardes un valor específico.
      Luego, crea una función que reciba por parámetro un dato y utilizando operadores lógicos y condicionales,
      verifica si dicho parámetro coincide con la variable llamada ‘contraseña’.
      La función deberá mostrar por consola si la contraseña recibida es válida o no.
  */

  let PASSWORD = "ABC123"

  function verifyPassword(password) {
    if (password === PASSWORD) {
      return ("Contraseña valida");
    } else {
      return ("Contraseña invalida");
    }
  }

  let result = verifyPassword("ABC123")

  console.log(result); // -> "Contraseña valida"

}
// *CALCULADORA IMC
{
  /*
    Calculadora de Índice de Masa Corporal (IMC):
      Crea una función que calcule el IMC utilizando los parámetros de peso y altura.
      Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC (bajo peso, peso normal, sobrepeso, etc.).
  */

  /**
   *
   * @param {number} weight peso en kilogramos
   * @param {number} height altura en metros
   * @returns
   */

  function IMCCalculator(weight, height) {

    let IMCresult = (weight / (height ** 2)).toFixed(2)

    if (IMCresult >= 30) {
      return (`Tu IMC es ${IMCresult} indica Obesidad`)
    } else if (IMCresult >= 25) {
      return (`Tu IMC es ${IMCresult} indica Sobrepeso`)
    } else if (IMCresult < 24.99 && IMCresult >= 18.50) {
      return (`Tu IMC es ${IMCresult} indica Peso normal`)
    } else if (IMCresult < 18.50) {
      return (`Tu IMC es ${IMCresult} indica Bajo peso`)
    }
  }

  function IMCCalculator2(weight, height) {

    let IMCresult = (weight / (height ** 2)).toFixed(2)

    if (IMCresult < 18.50) {
      return (`Tu IMC2 es ${IMCresult} indica Bajo peso`)
    } else if (IMCresult <= 24.99) {
      return (`Tu IMC2 es ${IMCresult} indica Peso normal`)
    } else if (IMCresult >= 25 && IMCresult < 30) {
      return (`Tu IMC2 es ${IMCresult} indica Sobrepeso`)
    } else if (IMCresult >= 30) {
      return (`Tu IMC2 es ${IMCresult} indica Obesidad`)
    } else {
      return ("Completar los datos faltantes")
    }
  }

  let resultIMC = IMCCalculator(80, 1.60)
  let resultIMC2 = IMCCalculator2(70, 1.70)

  console.log(resultIMC); // -> "Tu IMC es 31.25 indica Obesidad"
  console.log(resultIMC2); // -> "Tu IMC2 es 24.22 indica Peso normal"


}

// *CONVERSOR DE DIVISAS
{
  /**
   *
   * @param {string} initialCurrency divisa a cambiar
   * @param {number} quantity cantidad a cambiar
   * @param {string} finalCurrency divisa destino
   */

  function badgeConversor(initialCurrency, quantity, finalCurrency) {

    let initialCurrencyMayus = initialCurrency.toUpperCase()
    let finalCurrencyMayus = finalCurrency.toUpperCase()

    if (initialCurrencyMayus === finalCurrencyMayus) return ("Las divisas ingresadas son las mismas, ingresa una diferente")

    function calculateBadgeMX(quantity, budge, dolarEquivalent) {
      return ((quantity / budge) * dolarEquivalent).toFixed(2)
    }

    let budge = null
    let budgeName = null
    let result = null
    let text = null

    let USD_MX = 18.46
    let USD_USD = 1
    let USD_EUR = 0.92
    let USD_Q = 7.74
    let USD_PEN = 3.75


    switch (initialCurrencyMayus) {
      case "MX":
        budge = 18.46
        budgeName = "Pesos Méxicanos"
        if (finalCurrencyMayus === "USD") {
          result = calculateBadgeMX(quantity, budge, USD_USD)
        }
        if (finalCurrencyMayus === "EUR") {
          result = calculateBadgeMX(quantity, budge, USD_EUR)
        }
        if (finalCurrencyMayus === "Q") {
          result = calculateBadgeMX(quantity, budge, USD_Q)
        }
        if (finalCurrencyMayus === "PEN") {
          result = calculateBadgeMX(quantity, budge, USD_PEN)
        }

        break;

      case "USD":
        budge = 1
        budgeName = "Dolares estadounidenses"
        if (finalCurrencyMayus === "MX") {
          result = calculateBadgeMX(quantity, budge, USD_MX)
        }
        if (finalCurrencyMayus === "EUR") {
          result = calculateBadgeMX(quantity, budge, USD_EUR)
        }
        if (finalCurrencyMayus === "Q") {
          result = calculateBadgeMX(quantity, budge, USD_Q)
        }
        if (finalCurrencyMayus === "PEN") {
          result = calculateBadgeMX(quantity, budge, USD_PEN)
        }
        break;

      case "EUR":
        budge = 0.92
        budgeName = "Euros"
        if (finalCurrencyMayus === "MX") {
          result = calculateBadgeMX(quantity, budge, USD_MX)
        }
        if (finalCurrencyMayus === "USD") {
          result = calculateBadgeMX(quantity, budge, USD_USD)
        }
        if (finalCurrencyMayus === "Q") {
          result = calculateBadgeMX(quantity, budge, USD_Q)
        }
        if (finalCurrencyMayus === "PEN") {
          result = calculateBadgeMX(quantity, budge, USD_PEN)
        }
        break;

      case "Q":
        budge = 7.74
        budgeName = "Quetzales"

        if (finalCurrencyMayus === "MX") {
          result = calculateBadgeMX(quantity, budge, USD_MX)
        }
        if (finalCurrencyMayus === "USD") {
          result = calculateBadgeMX(quantity, budge, USD_USD)
        }
        if (finalCurrencyMayus === "EUR") {
          result = calculateBadgeMX(quantity, budge, USD_EUR)
        }
        if (finalCurrencyMayus === "PEN") {
          result = calculateBadgeMX(quantity, budge, USD_PEN)
        }
        break;


      case "PEN":
        budge = 3.75
        budgeName = "Soles"

        if (finalCurrencyMayus === "MX") {
          result = calculateBadgeMX(quantity, budge, USD_MX)
        }
        if (finalCurrencyMayus === "USD") {
          result = calculateBadgeMX(quantity, budge, USD_USD)
        }
        if (finalCurrencyMayus === "EUR") {
          result = calculateBadgeMX(quantity, budge, USD_EUR)
        }
        if (finalCurrencyMayus === "Q") {
          result = calculateBadgeMX(quantity, budge, USD_Q)
        }
        break;

      default:
        return "divisa invalida"
    }

    return `La conversion de la moneda ingresada: ${quantity} ${initialCurrencyMayus} a ${finalCurrencyMayus} es de: ${result}`

  }

  badgeConversor("mx", 100, "usd")
  badgeConversor("mx", 100, "eur")
  badgeConversor("mx", 100, "q")
  badgeConversor("mx", 100, "pen")

  badgeConversor("usd", 100, "mx")
  badgeConversor("usd", 100, "eur")
  badgeConversor("usd", 100, "q")
  badgeConversor("usd", 100, "pen")

  badgeConversor("eur", 100, "mx")
  badgeConversor("eur", 100, "usd")
  badgeConversor("eur", 100, "q")
  badgeConversor("eur", 100, "pen")

  badgeConversor("q", 100, "mx")
  badgeConversor("q", 100, "usd")
  badgeConversor("q", 100, "eur")
  badgeConversor("q", 100, "pen")

  badgeConversor("pen", 100, "mx")
  badgeConversor("pen", 100, "usd")
  badgeConversor("pen", 100, "eur")
  badgeConversor("pen", 100, "q")

  badgeConversor("pen", 100, "pen")

}
// *EVALUADOR RANGO DE EDAD
{
  /*
    Evaluador de Rango de Edad:
    Escribe una función que determine en qué categoría de edad se encuentra una persona.
    Utiliza las estructuras que consideres necesarias para clasificar a las personas en rangos como
      niño, adolescente, adulto joven, adulto, etc., según su edad.
  */


  /**
   *
   * @param {number} edad
   */

  function evaluateAge(edad) {

    if (edad === undefined || edad < 0) return "edad invalida, favor de ingresar dato correcto"

    if (edad < 12) {
      return "Niño"
    } else if (edad < 18) {
      return "Adolescente"
    } else if (edad < 30) {
      return "Adulto joven"
    } else {
      return "Momia"
    }
  }
  let res = evaluateAge(15)
  console.log(res); // -> "Adolescente"
}
// *GENERADOR DE MENSAJES PERSONALIZADOS
{
  /*
    Generador de Mensajes Personalizados:
      Crea una función que genere un mensaje personalizado para un usuario según su nombre y el momento del día
        (solo tendremos en consideración si es de mañana, o es de tarde).
      Utiliza concatenación e interpolación para construir el mensaje, y condicionales(if ternario) para incluir diferentes saludos.
  */

  /**
   *
   * @param {string} name
   * @param {string} timePeriod
   * @returns
   */

  function customMesages(name, timePeriod) {

    // !!undefined
    // !!null

    // !!name
    // !!timePeriod

    // !undefined
    // !null

    // !name
    // !timePeriod

    if (!!name == !!null || !!timePeriod === !!null) return "Datos faltantes"

    let saludo = (timePeriod === "mañana") ? `Buenos dias ${name}` : `Buenas tardes ${name}`
    return saludo

  }
  let message = customMesages("Miguel", "mañana")
  console.log(message) // -> "Buenos dias Miguel"

}

