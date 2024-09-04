// * ESTRUCTURA DE CONTROL SWITCH

// *SWITCH
{
  /* 
    ESTRUCTURA SWITCH
    switch -> Palabra reservada
    (expr) -> Expresión a evaluar
    {} -> Lista de casos
    case valX: -> Instancia "case" con la que se compara la expresion, seguido de las declaraciones o instrucciones a ejecutar en caso coincidan
    break -> Palabra reservada para romper la ejecucion del programa o marcar el final del caso
    default -> Instancia que se ejecuta en caso la expresion no coincida con ninguna instancia case valX
  */

  // diaSemana ??= 15 //*valor predefinido

  let diaSemana = -3;
  let mensajeSwitch = "";


  switch (diaSemana) {
    case 1:
      mensajeSwitch = "Lunes";
      break;
    case 2:
      mensajeSwitch = "Martes";
      break;
    case 3:
      mensajeSwitch = "Miercoles";
      break;
    default:
      mensajeSwitch = "No es un dia valido"
      break;
  }

  console.log(mensajeSwitch);

  /* 
    En caso de olvidar la palabra break para cada caso, la ejecucion de las declaraciones continuara hasta el final del programa
    por lo que las instrucciones podrian sobreescribirse
  */
}
// *MISMO CODIGO PERO USANDO CONTROL IF
{
  let mensajeIf

  if (diaSemana === 1) {
    mensajeIf = "LUNES"
  } else if (diaSemana === 2) {
    mensajeIf = "MARTES"
  } else if (diaSemana === 3) {
    mensajeIf = "MIERCOLES"
  }
  console.log(mensajeIf);
}
