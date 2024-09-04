// * WHILE 
/* 
    NOTE:
      Nos sirve para cuando necesitamos repetir una instrucción o mas de una instruccion
      Su uso hace que mantengamos un codigo limpio y no perder tiempo en escribir codigo repetido
*/

const prompt = require("prompt-sync")({ sigint: true })

// *CODIGO REPETITIVO
// {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
//   console.log(5);
//   console.log(6);
//   console.log(7);
//   console.log(8);
//   console.log(9);
//   console.log(10);
// }

// *ESTRUCTURA WHILE
{
  /* 
    ESTRUCTURA WHILE

    let variablesContadora -> Variable que nos ayuda a saber el numero de iteraciones que hizo nuestro bucle 
    while -> Palabra reservada
    (condition) -> Condicion que debe ser falsa en algun momento
    {} -> Instrucciones a ejecutar
    variablesContadora++ (o cualquier incremento) -> dentro del bloque de las instrucciones, incremento para actualizar el contador
  */

  let i = 0;

  while (i <= 10) {

    if (i !== 10) {
      console.log(`Actualmente el valor del contador es: ${i}`);
    } else {
      console.log(`El valor maximo del contador dentro del bucle es: ${i}`);
    }
    i++
  }

  console.log(`El valor final del contador al salir del bucle es: ${i}`) // -> ultimo valor 6, esto hace que la condicion del ciclo sea falsa por ser mayor a 5

}

// *EJERCICIO
{
  let control = "si" // -> Condicion a cumplir en el ciclo while
  let nota; // -> variable inicializada para actualizar despues de cada iteracion
  let sumaNotas = 0 // -> Acumulador de nota
  let cantidadNotas = 0 // -> Numero de veces que se realiza una itereacion


  console.log(`Bienvenido al control de notas!`);
  let nombreAlumno = prompt("Ingresa el nombre del alumno: ")

  while (control === "si") {

    console.log("Ingresa las notas a sumar")

    // VARIABLE QUE RECIBE EL NUMERO DE LA NOTA
    nota = parseInt(prompt("Ingresa la nota del alumno: "))

    // ACUMULA EL VALOR DE LAS NOTAS INGRESADAS 
    // 0         = 0 +   10
    // 10        = 10 +   7
    // 17        = 17 + 9
    // sumaNotas = sumaNotas + nota
    sumaNotas += nota

    // ACTUALIZA EL NUMERO DE ITERACIONES REALIZADAS
    cantidadNotas++

    // ACTUALIZACION DE LA VARIABLE PARA ROMPER LA CONDICION
    control = prompt("¿Agrear otra nota? 'si' si desea agregar mas. ")

  }

  // CALCULO DEL PROMEDIO -> NOTAS ACUMULADAS / NUMERO DE ITERACIONES
  let promedio = sumaNotas / cantidadNotas

  // IMPRESION POR TERMINAL
  console.log(`El promedio final del alumno ${nombreAlumno} es: ${promedio}`);


}