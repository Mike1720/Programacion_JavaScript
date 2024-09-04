/* 
  NOTE:
    En un mismo bloque de codigo:
      las variables declaradas con "let" pueden ser sobreescritas pero no redeclaradas
      las variables declaradas con "var" pueden ser sobreescritas y redeclaradas
      las variables declaradas con "const" deben ser inicializadas, y estas no pueden ser redeclaradas ni sobreescritas
*/

// *EJEMPLO 1 VAR SOBREESCRITURA
{
  /* 
    Al finalizar la ejecucion de este bloque del programa, la variable "variableVar" tendra un valor final de
    "Dentro de la funcion 1", ya que la ultima funcion llamada para sobreescribir la variable fue la funcion1
  */

  var variableVar = "variable global con var ejemplo 1"

  // FUNCION 1
  function funcion1() {
    variableVar = "Dentro de la funcion 1"
  }

  // FUNCION 2
  function funcion2() {
    variableVar = "AHORA DENTRO DE LA FUNCION 2"
  }

  funcion2()
  funcion1()

  console.log(variableVar);
}

// *EJEMPLO 2 VAR REDECLARACION
{
  function funcion1() {
    var variableVar = "variable de la funcion"

    var variableVar = "Variable var ejemplo 2"

    return variableVar
  }

  var output = funcion1();
  console.log(output); // -> "Variable var ejemplo 2"

  /* 
      A pesar de ya haber sido declarada la variable "variableVar", la ejecucion del programa sigue siendo correcto
      pero esto puede generar demasiados errores ya que podriamos los nombres de nuestras variables generando sucesos 
      imprevistos como en una suma.
  */

  var result

  function suma() {
    var resultSuma = 10 + 15
    return resultSuma
  }

  result = suma()
  console.log(result); // -> 25

  function unirNombres() {
    var nom = "Miguel"
    var ape = "Miranda"
    var resultUnion = nom + ape
    return resultUnion
  }

  result = unirNombres()

  console.log(result); // -> "MiguelMiranda"
  /* 
    Con esto podemos tener una nocion de como podria llegar a afectar el uso de las variables var en nuestros programas.
    No es completamente malo pero en general se recomiendo el uso de let en su lugar
  */

}

// *EJEMPLO 1 LET
{
  /* 
    Sucede el mismo caso que el ejemplo 1 de var, la ultima funcion llamada es la que sobreescribe la variable "variableGlobalLet"
  */
  let variableLet = "Variable global con let ejemplo 1"

  function funcion1() {
    variableLet = "Variable global let dentro de la funcion 1"
  }

  function funcion2() {
    variableLet = "VARIABLE GLOBAL LET DENTRO DE LA FUNCION 2"
  }

  funcion2()
  funcion1()

  console.log(variableLet);
}

// *EJEMPLO 2 LET
{
  function ejemplo2Let() {
    let variableFuncion = "Variable let de la funcion"

    if (true) {
      let variableFuncion = "Variable let dentro de IF"
    }
    return variableFuncion
  }

  let outputLet = ejemplo2Let();

  console.log(outputLet);
  /* 
    Al estar en un diferente bloque de codigo, las variables "let" pueden llamarse de la misma manera,
    pero en caso de estar en el mismo bloque, el programa se romperá y dirá que las variables let NO pueden
    redeclararse
  */
}