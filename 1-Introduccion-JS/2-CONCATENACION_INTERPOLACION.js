// *CONCATENACION E INTERPOLACION
/* 
  NOTE:
    La concatenacion e interpolacion son 2 formas de unir codigo que por lo general son datos tipo string.
*/

// *VARIABLES A UNIR
let nombre = "Miguel"
let apellido = "Miranda"

// *CONCATENACIÓN
/* 
  La concatenacion hace uso del operador "+" para unir los strings 
*/
console.log("Hola mi nombre es: " + nombre + " " + apellido);

// *INTERPOLACION
/* 
  NOTE:
    La interpolacion es una forma de insertar valores dentro de un string utilizando template literals, que se definen con comillas
    invertidas o backticks (``). Los valores que se agregan se insertan utilizando la sintaxis ${valores} dentro de la cadena.
*/
console.log(`Hola mi nombre es: ${nombre} ${apellido}`);