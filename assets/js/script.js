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

        //Create an object to store the todo that will be store in local storage 
        const storeTodo = { todos: todo };

        //Get item from local storage and if does not exist, add it to the array
        const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

        //Push the array if not in local storage
        todoList.push(storeTodo);

        //Set the key and value in local storage
        localStorage.setItem("todoList", JSON.stringify(todoList));

        //Event listener to edit todo list
        editButton.on("click", () => {

        });

        //Event listener to delete todo list
        deleteButton.on("click", () => {
            
        });
    });
});