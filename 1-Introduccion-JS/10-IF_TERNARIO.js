// * IF TRADICIONAL VS TERNARIO
{

  let numeroAleatorio = 30

  // * IF TRADICIONAL
  if (numeroAleatorio >= 0) {
    console.log("Numero positivo");
  } else {
    console.log("Numero negativo");
  }

  // * IF TERNARIO
  /* 
    ESTRUCTURA IF TERNARIO
    (condition) -> condicion a evaluar
    ? (si) -> Es seguido de la INSTRUCCION a ejecutar
    : (si no) -> Es seguido por la INSTRUCCION a ejecutar
  */

  (numeroAleatorio >= 0) ? console.log("Numero positivo") : console.log("Numero negativo");

}

{
  let edad = 30
  let mensaje = ""

  if (edad >= 18) {
    mensaje = "Es mayor de edad"
  } else {
    mensaje = "Es menor de edad"
  }

  mensaje = (edad >= 30) ? "Es mayor de edad TERNARIO" : "Es menor de edad TERNARIO"

  console.log(mensaje);

  /* 
    NOTE:
    NO ES NECESARIO DECLARAR LA VARIABLE E INICIARLA DESPUES,
    TAMBIEN SE PUEDE INICIALIZAR CON LA CONDICION
  */

  let mensaje2 = (edad >= 18) ? "Mayor de edad" : "Menor de edad"
  console.log(mensaje2);
}

// *MULTIPLES INSTRUCCIONES IF TERNARIO
{

  let edadN = 23
  let mensajeN = ""
  let categoria = "";

  // *TRADICIONAL
  // if (edadN >= 18) {
  //   mensajeN = "Es mayor de edad!"
  //   categoria = "Adulto"
  //   console.log("Felicidades, eres un adulto");
  // } else {
  //   mensajeN = "Es menor de edad!"
  //   categoria = "Adolecente"
  //   console.log("Felicidades, eres un adolecente");
  // }

  // *TERNARIO
  /* 
    NOTE:
      Al tener mas de una instruccion para un if ternario, las instrucciones a ejecutar deben estar envueltas por () y cada una
      separada por comas
  */
 
  (edadN >= 18)
    ? (
      mensajeN = "Es mayor de edad!",
      categoria = "Adulto",
      console.log("Felicidades, eres un adulto")
    )
    : (
      mensajeN = "Es menor de edad!",
      categoria = "Adolecente",
      console.log("Felicidades, eres un adolecente")
    )

  console.log(mensajeN);
  console.log(categoria);
}

