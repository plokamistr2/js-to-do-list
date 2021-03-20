const formTasks = document.querySelector("form");
const writeTask = document.querySelector("input");
const listTask = document.querySelector("ul");

let itemsArray = [];

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))


// Document Title
const docTitle = document.querySelector("title");
docTitle.innerText = document.querySelector("h1").innerText;

// Add/Remove Task Function
function addTask(){
  const task = document.createElement("li");
  task.innerText = writeTask.value;
  listTask.append(task);

  ///Remove Task Function
  task.addEventListener("click",()=>{
    task.remove();
  });
}


// We can omit: if(input.value){addTask();} by adding required at HTML input element.
formTasks.addEventListener("submit",(e)=>{
  e.preventDefault();

  itemsArray.push(writeTask.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  
    addTask();
  clearInput();
});

data.forEach((item) => {
  addTask(item);
})

// Clear input Function
function clearInput(){
  writeTask.value="";
  writeTask.focus();
}



  
  












