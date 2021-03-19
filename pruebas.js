// BASICS 
//1
/*
let sayHi = () => alert("Hello!");
sayHi();
*/

//2
/*
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();
*/

// 3 TEST
// ES5
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  //ES6
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );