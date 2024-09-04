// *FUNCION SIN PARAMETROS
{
  // DECLARACION DE LA FUNCION
  function sumarEstatico() {
    let result = 5 + 10
    // UNA VEZ HECHA LA SUMA SE IMPRIMIRA EN PANTALLA EL RESULTADO
    console.log(result);
  }

  sumarEstatico() // -> En consola 15
}

// *FUNCION CON PARAMETROS
{
  /* 
    NOTE:
      Los parametros que recibe una funcion podrian llamarse de cualquier manera pero deberan ser
      descriptivos para tratarlos
  */

  // LA FUNCION RECIBE 3 NUMEROS CUALQUIERA
  function sumarDinamico(num1, num2, num3) {
    // UNA VEZ RECIBIDOS SE SUMARAN Y SE ALMACENARAN EN UNA VARIABLE
    let result = num1 + num2 + num3;
    // IMPRESION EN PANTALLA DE LA VARIABLE
    console.log(result);
  }
  sumarDinamico(3, 10, 5) // -> 18
}

// *VARIABLES EN PARAMETROS
{

  /* 
    NOTE: 
      Una vez declarada la funcion y a sus parametros, es posible que al llamar se utilicen variables 
      en sus parametros.
      No existe problema alguno si los nombres de las variables y los nombres de los parametros son los
      mismos.
  */

  let num1 = 10
  let num2 = 11

  function printTerminal(num1, num2) {
    console.log(num1); // -> 10
    console.log(num2); // -> 11
  }

  printTerminal(num1, num2)
}  