// * CONDICIONALES MULTIPLES
{
  let clima = "soleado"
  let temperatura = 25

  // *CODIGO LARGO
  {
    if (clima === "soleado") {
      if (temperatura >= 25) {
        console.log("dia soleado");
      } else {
        console.log("dia no soleado INNER");
      }
    } else {
      console.log("dia no soleado OUTTER");
    }
  }

  // *MISMO CODIGO SIN REPETIR INSTRUCCIONES
  {
    if (clima === "soleado" && temperatura >= 25) {
      console.log("Dia soleado");
    } else {
      console.log("No es un dia soleado");
    }
  }
}

// *MULTIPLES IF/ELSE
{
  let puntuacion = 75

  if (puntuacion >= 90) {
    console.log("NOTA A");
  } else if (puntuacion >= 80) {
    console.log("NOTA B");
  } else if (puntuacion >= 70) {
    console.log("NOTA C");
  } else {
    console.log("NOTA D");
  }

}

// * CONDICIONALES ANIDADOS
{
  let nota = 6

  // *VALIDACION BASICA DE CONDICION (calificacion 0-10)
  if (nota >= 0 && nota <= 10) {
    if (nota >= 6) {
      console.log("Nota aprobatoria"); // <- CORRECTA
    } else {
      console.log("Nota reprobatoria");
    }
  } else {
    console.log("La nota enviada es erronea");
  }
}