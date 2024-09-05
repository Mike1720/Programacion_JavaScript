// * DO WHILE

/* 
  NOTE
    A diferencia de la estructura while, que se ejecuta en caso la condicion evaluada sea verdadera,
    la estructura do while itera una vez y despues valida si la concidion es verdadera. 
*/

const prompt = require("prompt-sync")({ sigint: true })

// *WHILE
{
  let i = 1

  while (i <= 10) {
    console.log(`Bucle while, valor del contador: ${i}`); // -> muestra por terminal los numeros 1-10
    i++
  }
  console.log(`Valor final del contador en ciclo while: ${i}`); // -> valor final 11

}

// *DO WHILE
{

  /* 
    ESTRUCTURA DO WHILE
    let variableContadora -> Variable para saber el numero de iteraciones
    do -> Palabra reservada
    {} -> Bloque de codigo donde se escriben las instrucciones
    variableContadora++ -> Incremento del contador
    while -> Palabra reservada
    (condition) -> Condicion evaluada 
  */

  let j

  j = 5 // -> muestra por consola los numero 5-10
  // j = 15 // -> muestra por consola el numero 15 

  do {
    console.log(`Bucle do while, valor del contador: ${j}`);
    j++
  } while (j <= 10);

  console.log(`Valor final del contador en ciclo do while: ${j}`); // -> valor final 11

}

// *EJERCICIO
{
  let nroAdivinar = 4;
  let intento = 0;
  let numero;


  console.log("Adivina el numero entre el 0 y el 10");
  do {

    numero = parseFloat(prompt(""))

    if (numero < nroAdivinar) {
      console.log("Casi pero tu numero es menor, intenta nuevamente");
    } else if (numero > nroAdivinar) {
      console.log("Casi pero tu numero es mayor, intenta nuevamente");
    } else {
      console.log(`Acertaste!!!, lo lograste en el intento ${intento + 1}`);
    }

    intento++
  } while (numero !== nroAdivinar);

}