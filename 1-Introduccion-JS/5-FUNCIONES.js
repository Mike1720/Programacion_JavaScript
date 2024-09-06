// * FUNCIONES
/*
  NOTE:
    Las funciones se pueden definir como un bloque de codigo reutilizable que realiza una tarea especifica.
*/

{
  /* ESTRUCTURA DE UNA FUNCION
    function -> palabra reservada
    name -> Nombre de la función (Usar nombres descriptivos de la funcion ¿Que hace?)
    (params) -> Parametros que recibe la función
    {} -> Instrucciones que se ejecuta cuando se llama a la función 
  */
}

function saludar (){
  console.log("HOLA");
}

function suma() {
  let result = 5 * 9
  console.log(result);
}

saludar() // -> En terminal "HOLA"
suma() // -> En terminal 45