const prompt = require("prompt-sync")({ sigint: true })

// ALMACENAR TAREAS
let tasks = []

// AGREGAR TAREA
function addTask(taskName, taskDeadline = null) {
  tasks.push(
    {
      nombre: taskName,
      isDone: false,
      deadLine: taskDeadline
    }
  )
}

// ELIMINAR TAREA
function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1)
    console.log("Tarea eliminada correctamente");
  } else {
    console.log("Indice de tarea invalido");
  }
}

// COMPLETAR TAREA
function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].isDone = true
    console.log("Tarea completada");
  } else {
    console.log("Indice de tarea invalido");
  }
}

// MODIFICAR TAREA
function modifyTask(index, newTaskName, newTaskDeadline = null) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].nombre = newTaskName
    if (newTaskDeadline !== null) {
      tasks[index].deadLine = newTaskDeadline
    }
    console.log("Tarea modificada con exito");
  } else {
    "Indice de tarea invalido"
  }
}

// MENU DE OPCIONES

function mostrarMenu() {
  console.log(
    `         ___MENU___
    1.- Agregar tarea
    2.- Eliminar tarea
    3.- Marcar tarea como completada
    4.- Modificar una tarea
    5.- Mostrar todas las tareas
    0.- Salir
    `
  );

}


// INTERACCION CON USUARIO
function interaction() {
  let opcion = -1

  while (opcion !== 0) {
    mostrarMenu()
    opcion = parseInt(prompt("Ingresa la opcion seleccionada: "))


    switch (opcion) {
      case 1:
        let taskName = prompt("Ingresa el nombre de la tarea: ")
        addTask(taskName)
        break;

      case 2:
        let deleteTaskIndex = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "))
        deleteTask(deleteTaskIndex)
        break;

      case 3:

        let completeTaskIndex = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "))
        completeTask(completeTaskIndex)
        break;

      case 4:
        let modifyTaskIndex = parseInt(prompt("Ingresa el indice de la tarea a modificar"))
        let newTaskName = prompt("Ingresa el nuevo nombre de la tarea: ")
        modifyTask(modifyTaskIndex, newTaskName)
        break;

      case 5:
        console.log(`         ___TAREAS___          `);
        console.log(tasks);
        break;

      default:
        console.log("Opcion invalida");
        break;
    }
  }
}

interaction()