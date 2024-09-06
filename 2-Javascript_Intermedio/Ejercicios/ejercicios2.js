// *UNIR ARRAYS
/* 
  ?Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo.
  ?La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()
*/
{
  /**
   * Une dos arreglos, retornando el arreglo final.
   * @param {Array} arr1 Arreglo principal.
   * @param {Array} arr2 Arreglo a incorporar en el arreglo principal.
   * @returns Retorna la union de dos arreglos.
   */

  function unirArrays(arr1, arr2) {
    return arr1.concat(arr2)

  }

  let arr1 = ["Louder", "Let Go"]
  let arr2 = ["Complicated", "Sweet Nothing"]

  let newArr = unirArrays(arr1, arr2)

  console.log(newArr); // -> ["Louder", "Let Go", "Complicated", "Sweet Nothing"]
}

// *ELIMINAR PRIMER ELEMENTO
/*  
  ?Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento. 
  ?La función debe devolver el elemento eliminado.
*/
{
  /**
   * Se elimina el primer elemento del arreglo, y lo retorna
   * @param {Array} arr Arreglo al que se desea eliminar el primer elemento del mismo
   * @returns Retorna el elemento eliminado del arreglo
   */

  function eliminarPrimerElemento(arr) {
    return arr.shift()
  }

  let arr = ["Cacahuates", "Pistaches", "Chetos", "Papas"]
  let elementoEliminado = eliminarPrimerElemento(arr)
  console.log(elementoEliminado); // -> "Cacahuates"

}

// *CONVERTIR TEXTO
/*
  ?Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente.
  ?La función deberá mostrar los resultados por consola. Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()
*/
{
  /**
   * 
   * @param {string} str 
   */

  function convertitTexto(str) {
    let lower = str.toLowerCase()
    let upper = str.toUpperCase()
    return { lower, upper }
  }

  let str = "Javascript"
  let res = convertitTexto(str)
  let { lower, upper } = res

  console.log(lower); //  ->"javascript"
  console.log(upper); //  ->"JAVASCRIPT"
}

// *MANIPULACION DE OBJETOS
/*
  ?Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación.
  ?Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores.
  ?Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’.
  ?Llama nuevamente a la función creada para visualizar el cambio efectuado.
*/

// *OBJETOS ANIDADOS
/* 
  ?Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’, 
  ?donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. 
  ?Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto.
*/

{
  let persona = {
    nombre: "Emily",
    apellido: "Velasco",
    edad: 18,
    ocupacion: "Estudiante",
  }

  function verProps(objeto) {
    console.log(`Nombre: ${objeto.nombre}`);
    console.log(`Apellido: ${objeto.apellido}`);
    console.log(`Edad: ${objeto.edad}`);
    console.log(`Ocupacion: ${objeto.ocupacion}`);
    console.log(`Habilidad: ${objeto.habilidad}`);
  }

  verProps(persona) // -> "Habilidad: undefined". Para este punto aun no se ha agregado la propiedad habilidad asi que el resultado es undefined

  persona.ocupacion = "Arquitecta"
  persona.habilidad = "Cargar 60kg en bench press"

  verProps(persona)

  console.log(persona);
  /* 
    {
      nombre: 'Emily',
      apellido: 'Velasco',
      edad: 18,
      ocupacion: 'Arquitecta',
      habilidad: 'Cargar 60kg en bench press
    }
  */

  persona.ubicacion = {
    codigoPostal: "02553",
    ciudad: "Ciudad de México",
    calle: "Benito Juarez",
    numero: 28
  }

  /**
   * Elimina la propiedad del objeto pasada como parametro
   * @param {Object} objeto Dato tipo object
   * @param {string} propiedad Propiedad a eliminar
   */

  function elmininarPropiedad(objeto, propiedad) {

    switch (propiedad) {
      case "nombre":
        delete objeto.nombre
        break;

      case "apellido":
        delete objeto.apellido
        break;

      case "edad":
        delete objeto.edad
        break;

      case "ocupacion":
        delete objeto.ocupacion
        break;

      case "habilidad":
        delete objeto.habilidad
        break;

      case "ubicacion":
        delete objeto.ubicacion
        break;

      default:
        console.log("Esta propiedad no existe");
        break;
    }

  }

  elmininarPropiedad(persona, "edad")
  console.log(persona);
  /* 
    {
      nombre: 'Emily',
      apellido: 'Velasco',
      ocupacion: 'Arquitecta',
      habilidad: 'Cargar 60kg en bench press',
      ubicacion: {
        codigoPostal: '02553',
        ciudad: 'Ciudad de México',
        calle: 'Benito Juarez',
        numero: 28
      }
    }
  */


}

