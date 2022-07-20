//Query Selectors 
const form = $("form");
const todoInput = $("#todo-input");
const addTodoButton = $("#add-todo");
const ulElement = $("#todo-items");
const editButton = $("#edit");
const deleteButton = $("#delete");
const hamburgerIcon = $("#hamburger");
const toggle = $(".toggle-theme");
const textSwitch = $("#text-switch");
const themeSwitch = $("#theme-switch");

//When the page load, the document is ready to run the function
$(document).ready(function() {

    //Get the item from local storage and if not there add it to local storage
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

    //Function to append the todo list 
    const appendTodo = (todo) => {

        //Create element
        const parentElement = $(`<div class="list"></div>`);
        parentElement.attr("data-name", todo);

        //Create the card for todo list
        const todoListItem = $(`<li><p class="list-todo">${todo}</p><div class="icons">
            <button class="edit"><i class="fa-solid fa-pen-to-square edit-delete"></i></button>
            <button class="delete"><i class="fa-solid fa-trash-can edit-delete"></i></button>
            </div></li>`
        );

        //Append the created element to the ul element
        parentElement.append(todoListItem);

        //Append the parentElement of the todo to the ul element
        ulElement.append(parentElement);
    };

    //Function that will display todos from local storage 
    const displayFromLocalStorage = () => {

        //Get the item from local storage and if not there add it to local storage
        const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

        //Loop through each saved todolist and append it 
        todoList.forEach(todo => appendTodo(todo.todos));
    };
    
    //Event listener to add todo to the todo list
    form.on("submit", (event) => {

        //Pevent any default actions 
        event.preventDefault();

        //Get the value of user input 
        const todo = todoInput.val().trim();

        //Check to see if todo is empty, else append the todo 
        if (!todo) {

            //Display message letting the user need to input content
            alert("Please enter a task");
        
        } else {

            //Call the function to append todos 
            appendTodo(todo);

            //Store user input in a object
            let storeTodo = { id: Date.now(), todos: todo };

            //Push the todoList into the object
            todoList.push(storeTodo);

            //Set the key and value in local storage
            localStorage.setItem("todoList", JSON.stringify(todoList));
            
            //Clear the input form
            todoInput.val(" ");
        };
    });

    //Call the function to display todo list from local storage
    displayFromLocalStorage();

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
        };
    });

    //Event listener that toggle the text switch 
    textSwitch.on("click", () => {
        
        //Check to see if the switch is checked
        if ($("this:checked")) {

            //Change the text color based on user preferences
            $(".list-todo").toggleClass("checked");
        };
    });
});