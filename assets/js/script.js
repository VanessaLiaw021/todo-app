//Query Selectors 
const form = $("form");
const todoInput = $("#todo-input");
const addTodoButton = $("#add-todo");
const ulElement = $("#todo-items");
const liElement = $(".list");
const editButton = $("#edit");
const deleteButton = $("#delete");

//When the page load, the document is ready to run the function
$(document).ready(function() {
    
    //Event listener to add todo to the todo list
    form.on("submit", (event) => {

        //Pevent any default actions 
        event.preventDefault();

        //Get the value of user input 
        const todo = todoInput.val().trim();

        //Check to see if the input is empty 
        if (!todo) alert("Please enter a task");

        //Create element
        const todoListItem = $(`<div class="list"><li><p>${todo}</p><div class="icons">
        <button id="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button id="delete"><i class="fa-solid fa-trash-can"></i></button>
    </div></li></div>`);
        
        //Append the created element to ul element
        ulElement.append(todoListItem);
    });

    //Event listener to edit todo list

    //Event listener to delete todo list
});