const formTasks = document.querySelector("form");
const writeTask = document.querySelector("input");
const listTask = document.querySelector("ul");
let itemsArray =[];

localStorage.setItem("Tasks added", JSON.stringify(itemsArray));
const info = JSON.parse(localStorage.getItem('tasks'));


// Document Title
const docTitle = document.querySelector("title");
docTitle.innerText = document.querySelector("h1").innerText;


// Add/Remove Task Function
function addRemoveTask(){
    const task = document.createElement("li");
    task.innerText = writeTask.value;
    listTask.append(task);

    
    task.addEventListener("click",()=>{
      task.remove();
    });

    
}

// Clear input Function
function clearInput(){
  writeTask.value="";
  writeTask.focus();
}

// We can omit: if(input.value){addTask();} by adding required at HTML input element.
formTasks.addEventListener("submit",(e)=>{
  e.preventDefault();

  itemsArray.push(writeTask.value);
  localStorage.setItem("Tasks added", JSON.stringify(itemsArray));

  addRemoveTask();
  clearInput();
});


info.forEach((item) => {
  addRemoveTask(item);
});









