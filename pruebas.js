// DONE Añadir tareas a traves del boton
// DONE Añadir tareas a traves de la tecla Enter
// DONE Despues de añadir una tarea limpiar el input y hacerle focus
// DONE Al hacer click en una tarea deberia borrarse desde localStorage y Front
// DONE Si se intenta añadir una tarea vacia mostrar un mensaje de error
// DONE Que las tareas se guarden en localStorage
// UNDONE Añadir una cuenta de cuantas tareas faltan por completar

const formTasks = document.querySelector("form");
const writeTask = document.querySelector("input");
const listTask = document.querySelector("ul");
let pendingTask = document.querySelector("#pendingtasks span");
const removeAll = document.getElementById("removeAll");


// Document Title
const docTitle = document.querySelector("title");
docTitle.innerText = document.querySelector("h1").innerText;


let tasksArray
if (localStorage.getItem('Tasks Added')) {
  tasksArray = JSON.parse(localStorage.getItem('Tasks Added'))
} else {
  tasksArray = [];
}
localStorage.setItem('Tasks Added', JSON.stringify(tasksArray));
const tasksInfo = JSON.parse(localStorage.getItem('Tasks Added'));


// Add/Remove Task Function
const addRemoveTask = (taskText) => {
  
    const task = document.createElement("li");
    task.innerText = taskText;
    listTask.append(task);
    
    
  ///Remove Task on Click
  task.addEventListener("click",()=>{
    task.remove();
                                                                                                       
    function removeItem(taskText) {
      let tasksArray = JSON.parse(localStorage.getItem('Tasks Added'));
      tasksArray = tasksArray.filter((e) => e !== taskText);
      localStorage.setItem('Tasks Added', JSON.stringify(tasksArray));
    }
    removeItem(taskText);
  });

}

// We can omit: if(input.value){addTask();} by adding required at HTML input element.
formTasks.addEventListener("submit",(event)=>{
  event.preventDefault();
  
  addRemoveTask(writeTask.value);

  tasksArray.push(writeTask.value)
  localStorage.setItem('Tasks Added', JSON.stringify(tasksArray))
  
  writeTask.value="";
  writeTask.focus();
});


// If i move it above addRemoveTask popsup : Cannot access 'addRemoveTask' before initialization
tasksInfo.forEach((item) => {
  addRemoveTask(item);
});


// Clear all tasks from LocalStorage and FrontEnd
removeAll.addEventListener("click",()=>{
  localStorage.clear();
  while (listTask.firstChild) {
    listTask.firstChild.remove();
  }
  tasksArray=[];
});






  
  












