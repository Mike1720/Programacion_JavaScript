// ***SCOPE

{
  {
    /* 
      NOTE:
        En el ejemplo de abajo, la función console.log no puede alcanzar a la variable num ya que no
        se encuntran en el mismo bloque de codigo ({}), por lo que al correr el programa dira que num no esta definido
    */

    function suma() {
      let num = 15
    }

    // console.log(num);
  }

  {
    /* 
      NOTE: 
        En este caso el primer log no tiene problemas en alcanzar la variable "y", ya que a pesar de no encontrarse
        en el mismo bloque de codigo, la variable "y" esta declarada de manera global para ese bloque de codigo, por lo que el
        log no dira que "y" esta indefinida.
        El segundo log puede leer perfectamente la variable porque estan en el mismo bloque de codigo.

        Una forma de entender esto seria: "Lo de adentro puede leer lo de afuera, pero lo de afuera no puede leer lo de adentro"
    */

    let y = 20

    function suma() {
      let x = 10;
      console.log(`y vale ${y} desde adentro de la función`);
    }

    console.log(y);
  }

}

// ***RETURN
{
  /* 
    NOTE:
      La palabra "return" es la palabra reservada que nos retornará algo, por ejemplo un resultado.
      Cuando una función retorna algo, el resultado que nos proporciona deberá ser almacenado en una variable.
      Ademas de retornar algun dato, return corta la ejecucion del programa, por lo que las instrucciones que se
      encuentren delante de el no serán consideradas en la lectura del programa.
  */

  // 1.- DECLARACION DE FUNCION
  function suma(x, y, z) {
    // 2.- ALMACENAMIENTO DE SUMA DE LOS PARAMETROS EN UNA VARIABLE
    let res = x + y + z
    // 3.- RETORNO DE LA VARIABLE
    return res
  }

  function promedio() {
    // 4.- LLAMADO DE LA FUNCION, DECLARACION DE PARAMETROS Y ALMACENAMIENTO DEL RESULTADO DE LA FUNCION
    let resSuma = suma(7, 8, 9)
    // 5.- MANIPULACION DEL RESULTADO
    let resProm = resSuma / 3
    return resProm
  }

  let resultPromedio = promedio()

  console.log(resultPromedio);
}
