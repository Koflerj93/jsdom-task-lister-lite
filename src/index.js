document.addEventListener("DOMContentLoaded", () => {
  //
  document.querySelector("#create-task-form").addEventListener("submit", postTask);

  function postTask(e) {
    // prevents a page refresh
    e.preventDefault();
    // Gets the value of the from 
    const value = document.querySelector("#new-task-description").value
    // Grabs the ul of class tasks
    const ul = document.querySelector("#tasks")
    // creates an Li element
    const newLi = document.createElement("li");
    // changes the text content of the li to the value value
    newLi.textContent = value
    //appends the new li to the ul. 
    ul.appendChild(newLi)
  }

});
