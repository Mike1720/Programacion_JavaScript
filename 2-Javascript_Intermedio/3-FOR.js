// * FOR

/* 
  NOTE:
    Al igual que el ciclo while, nos permite ejecutar una o muchas instrucciones sin la necesidad de repetir codigo
    pero la diferencia radica en que se acostumbra a utilizar cuando se conoce de antemano el numero de iteraciones que
    deseamos realizar
*/

const prompt = require("prompt-sync")({ sigint: true })

{
  /* 
    ESTRUCTURA FOR
    for -> Palabra reservada
    (variableInicializadora; condicionEvaluada; actualizacion/incremento) ->
    {} -> Instrucciones a ejecutar
  */
  // *EJEMPLO 1
  {
    for (let i = 0; i <= 10; i++) {
      console.log(`Iteracion numero: ${i}`);
    }
  }

  // *EJEMPLO 2
  {
    for (let i = 0; i <= 10; i += 2) {
      console.log(`Numero: ${i}`);
    }
  }

  // *EJEMPLO 3
  {
    for (let i = 15; i >= 0; i-=5) {
      console.log(`Cuenta atras: ${i}`);
    }
  }

}