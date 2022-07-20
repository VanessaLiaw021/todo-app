//Query Selectors 
const form = $("form");
const todoInput = $("#todo-input");
const addTodoButton = $("#add-todo");
const ulElement = $("#todo-items");
const liElement = $(".list");
const editButton = $("#edit");
const deleteButton = $("#delete");
const hamburgerIcon = $("#hamburger");
const toggle = $(".toggle-theme");
const textSwitch = $("#text-switch");
const themeSwitch = $("#theme-switch");

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
        const todoListItem = $(`<div class="list"><li><p class="list-todo">${todo}</p><div class="icons">
        <button id="edit"><i class="fa-solid fa-pen-to-square edit-delete"></i></button>
        <button id="delete"><i class="fa-solid fa-trash-can edit-delete"></i></button>
        </div></li></div>`);
        
        //Append the created element to ul element
        ulElement.append(todoListItem); 

        //Event listener to edit todo list
        editButton.on("click", () => {

        });

        //Event listener to delete todo list
        deleteButton.on("click", () => {
            
        });
    });

    //Event listener that toggle the hamburger icon 
    hamburgerIcon.on("click", () => {

        //Toggle between the menu
        $(".toggle-theme").toggleClass("hide");
    }); 

    //Event Listener that toggle dark and light mode
    themeSwitch.on("click", () => {
        
        //Check to see if the switch is checked
        if ($("this:checked")) {

            //Change the text color based on user preferences
            $("body").toggleClass("light");

            //Change the heading color
            $("header h1").toggleClass("light");

            //Change the hamburger menu color
            $("#hamburger").toggleClass("light");
        }
    });

    //Event listener that toggle the text switch 
    textSwitch.on("click", () => {
        
        //Check to see if the switch is checked
        if ($("this:checked")) {

            //Change the text color based on user preferences
            $(".list-todo").toggleClass("checked");
        }
    });
});