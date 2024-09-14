const prompt = require("prompt-sync")({ sigint: true });

let tasks = [];

/* 
  NOTE:
    Al trabajar con un array con strings, se puede considerar una matriz, ya que para acceder a un valor especifico 
    del string se debe de realizar de la misma manera que para acceder a un valor de una matriz
      
      MATRIZ:
        [
          [0,1,2],
          [3,4,5]
        ]
        Acceder a un valor especifico: matriz[1][1] -> 3
      
      ARRAY DE STRINGS:
        [
          "Hola",
          "Mundo"
        ]
        Acceder a un valor especifico: matriz[1][1] -> u

*/

let categories = ["Trabajo", "Personal"];  // Agregar mas categorias según sea necesario 

/**
 * Muestra por consola todas las categorias existentes dentro del arreglo "categories", junto con su indice.
 */
function showAllCategories() {
  console.log("Categorias existentes:");
  categories.forEach((category, index) => {
    console.log(`${index}: ${category}`);
  });
}

/**
 * Agrega una nueva categoria al arreglo "categories"
 * @param {string} categoryName Nombre de la categoria a agregar
 */
function addCategory(categoryName) {
  categories.push(categoryName);
  console.log(`categoria: ${categoryName} agregada con éxito!`);
};


/**
 * Crea una nueva tarea y la agrega al arreglo "tasks".
 * Las tareas deberán contener una categoria.
 * @param {string} taskName Nombre de la tarea
 * @param {string} taskDeadline Fecha limite de la tarea
*/
function addTask(taskName, taskDeadline = null) {

  let assignedIndexCategory = parseInt(prompt("Ingresa el indice para la categoria: "));

  if (assignedIndexCategory >= 0 && assignedIndexCategory < categories.length) {

    tasks.push(
      {
        index: tasks.length,
        name: taskName,
        isDone: false,
        deadLine: taskDeadline,
        category: assignedIndexCategory
      }
    );
    console.log("Tarea agregada con éxito!");

  } else {
    console.log("Ingresa un valor correcto");
  };
};

/**
 * Elimina del arreglo "tasks" la tarea indicada por su indice. 
 * @param {number} index Indice de la tarea en el arreglo "task"
 */
function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log("Tarea eliminada correctamente");
  } else {
    console.log("Indice de tarea invalido");
  };
};

/**
 * Modifica la propiedad "isDone" de la tarea indicada, modificandola a true
 * @param {number} index Indice de la tarea 
 */
function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].isDone = true;
    console.log("Tarea completada!");
  } else {
    console.log("Indice de tarea invalido");
  };
};

/**
 * 
 * @param {number} index Indice de la tarea
 * @param {string} newTaskName Nombre nuevo
 * @param {string} newTaskDeadline Fecha limite nueva
 * @param {number} newCategoryNumber Categoria nueva
 */
function modifyTask(index, newTaskName, newTaskDeadline = null, newCategoryNumber) {

  if (index >= 0 && index < tasks.length) {
    tasks[index].name = newTaskName !== undefined ? newTaskName : tasks[index].name;
    tasks[index].deadLine = newTaskDeadline !== undefined ? newTaskDeadline : tasks[index].deadLine;
    tasks[index].category = newCategoryNumber !== undefined ? newCategoryNumber : tasks[index].category;

    console.log("Tarea modificada con éxito!");
  } else {
    console.log("Indice de tarea invalido");
  };
};

/**
 * Filtra las tareas que coincidan con el indice de la categoria indicada y las retorna en un nuevo arreglo.
 * @param {number} indexCategory Indice de la categoria.
 * @returns Arreglo con los elementos que cumplen la condición.
 */
function filterTasksByCategory(indexCategory) {
  let filteredTasks = tasks.filter(task => task.category === indexCategory);
  return filteredTasks
}

/**
 * Filtra las tareas completas de una categoria en especifico y las muestra por consola.
 * @param {number} indexCategory Indice de la categoria a filtrar.
 */
function filterCompletedTasksByCategory(indexCategory) {
  let filteredTasks = filterTasksByCategory(indexCategory)

  let completedTask = filteredTasks.reduce(function (counter, task,) {
    return task.isDone ? counter + 1 : counter
  }, 0)

  let totalTasks = filteredTasks.length

  console.log(`Tareas completadas de la categoria ${indexCategory}: ${completedTask} de ${totalTasks} tareas!`);
}

/**
 * Muestra por consola TODAS las tareas no completadas
 */
function showIncompletedTasks() {

  console.log("Tareas no completadas");

  tasks.forEach(task => {
    if (!task.isDone) {
      console.log(`-Nombre: ${task.name}, -Categoria: ${categories[task.category]} `);
    }
  });
};


/**
 * Muestra por consola todas las opciones posibles al usuario
 */
function mostrarMenu() {
  console.log(
    `         ___MENU___
    1.- Agregar tarea
    2.- Eliminar tarea
    3.- Marcar tarea como completada
    4.- Modificar una tarea
    5.- Mostrar todas las tareas
    6.- Ver categorias
    7.- Agregar categoria
    8.- Filtrar tareas por categoria
    9.- Ver cantidad de tareas completadas por categoria
    10.- Ver tareas sin completar
    0.- Salir
    `
  );
};

/**
 * Mantiene la interacción con el usuario mediante la seleccion de numeros
 */
function interaction() {
  let option = -1

  while (option !== 0) {

    mostrarMenu();
    option = parseInt(prompt("Selecciona una opción: "));

    switch (option) {
      // * AGREGAR TAREA
      case 1:
        let taskName = prompt("Ingresa el nombre de la tarea: ");
        showAllCategories()
        addTask(taskName);
        break;

      // * ELIMINAR TAREA
      case 2:
        let deleteTaskIndex = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "));
        deleteTask(deleteTaskIndex);
        break;

      // * COMPLETAR TAREA
      case 3:
        let completeTaskIndex = parseInt(prompt("Ingrese el indice de la tarea a completar: "));
        completeTask(completeTaskIndex);
        break;

      // * MODIFICAR TAREA
      case 4:
        let modifyTaskIndex = parseInt(prompt("Ingresa el indice de la tarea a modificar: "));

        if (modifyTaskIndex >= 0 && modifyTaskIndex < tasks.length) {

          let option = parseInt(prompt(`¿Qué propiedad deseas modificar? 1.- Nombre 2.- Fecha limite 3.- Categoria`));

          switch (option) {

            case 1:
              let newName = prompt("Ingresa el nuevo nombre de la tarea: ");

              modifyTask(modifyTaskIndex, newName);
              console.log("Nombre de tarea modificada con exito");
              break;

            case 2:
              let newDeadline = prompt("Ingresa la nueva fecha limite de la tarea: ");

              modifyTask(modifyTaskIndex, undefined, newDeadline)
              console.log("Fecha limite modificada con exito");
              break;

            case 3:
              showAllCategories()

              let newCategory = parseInt(prompt("Ingresa el nuevo indice de categoria de la tarea"));

              if (newCategory >= 0 && newCategory < categories.length) {
                modifyTask(option, undefined, undefined, newCategory)
                console.log("Categoria modificada con exito");
              };
              break;

            default:
              console.log("Error");
              break;
          };

        } else {
          console.log("Indice de tarea incorrecto");
        };
        break;

      // * MOSTRAR TODAS LAS TAREAS
      case 5:
        console.log(`         ___TAREAS___          `);
        console.log(tasks);
        break;

      // * MOSTRAR TODAS CATEGORIAS
      case 6:
        showAllCategories();
        break;

      // * AGREGAR CATEGORIAS
      case 7:
        let newCategory = prompt("Ingresa el nombre de la nueva categoria: ");
        addCategory(newCategory);
        break;

      // * FILTRAR POR CATEGORIA
      case 8:
        showAllCategories()

        let categoryIndex = parseInt(prompt("Ingresa el nombre de la nueva categoria: "));
        let filteredTasks = filterTasksByCategory(categoryIndex)

        console.log("Tareas de la categoria seleccionada");
        console.log(filteredTasks);
        break;

      // * MOSTRAR CANTIDAD DE TAREAS COMPLETADAS POR CATEGORIA
      case 9:
        showAllCategories()

        let categoryNum = parseInt(prompt("Ingresa de la categoria a visualizar: "))

        filterCompletedTasksByCategory(categoryNum)
        break;

      // * MOSTRAR TAREAS INCOMPLETAS
      case 10:
        showIncompletedTasks();
        break;

      default:
        console.log("Cerrando sesión, hasta pronto!");
        break;
    };
  };
};

interaction();