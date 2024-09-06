// * OBJETOS LITERALES
/* 
  NOTE:
    Los objetos se usan para modelar objetos de la vida real, dandoles caracteristicas (propiedades) y acciones (metodos) 
*/

// *CREACION DE OBJETO

let mascota = {
  especie: "gato",
  nombre: "Iris",
  edad: 11,
  comidaFav: ["Croquetas", "Carne"],

  imprimirDescripcion: function () {
    // "this" se utiliza para hacer referencia al contexto en el que se está ejecutando el código. Su valor depende de cómo y dónde se utiliza
    return `${this.especie} de nombre ${this.nombre} con ${this.edad} años de edad`
  }
};

// *ACCESO A PROPIEDADES
console.log(mascota.especie); // -> "gato"
console.log(mascota.nombre); // -> "Iris"
console.log(mascota.edad); // -> 11
console.log(mascota.comidaFav[1]); // -> "Carne"


// *AGREGAR MAS PROPIEDADES
mascota.color = "Blanco"
console.log(mascota);
/* 
  {
    especie: "gato",
    nombre: "Iris",
    edad: 11,
    comidaFav: ["Croquetas", "Carne"],
    color: "Blanco"
  }
*/

// *SOBREESCRIBIR PROPIEDAD
mascota.nombre = "Chaparra"
console.log(mascota);
/* 
  {
    especie: "gato",
    nombre: "Chaparra",
    edad: 11,
    comidaFav: ["Croquetas", "Carne"],
    color: "Blanco"
  }
*/

// *ELIMINAR PROPIEDAD
delete mascota.comidaFav
console.log(mascota);
/* 
  {
    especie: "gato",
    nombre: "Chaparra",
    edad: 11,
    color: "Blanco"
  }
*/

// *USO DE METODOS DEL OBJETO
let descripcion = mascota.imprimirDescripcion()
console.log(descripcion); // -> "gato de nombre Chaparra con 11 años de edad"