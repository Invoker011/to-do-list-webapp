const toDoList = [];
rendorToDoList();
function rendorToDoList(){
    let todolistHTML = '';
    for(let i = 0; i < toDoList.length; i++){
        const todoObject = toDoList[i];
        const {name, dueDate} = todoObject;
        const html =`
            <div>${name}</div>
            <div>${dueDate}</div> 
            <button class = "delete-todo-button" onclick="
                toDoList.splice(${i},1);
                rendorToDoList();
            ">Delete</button>
            `
        todolistHTML += html;
    }
    console.log(todolistHTML);
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}
function addToDo(){
  const inputElement=  document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dueDateElement = document.querySelector('.js-dueDate-input');
  const dueDate = dueDateElement.value;
  toDoList.push({
        name,
        dueDate
    });
  console.log(toDoList);

  inputElement.value = '';
  dueDateElement.value = '';
  rendorToDoList();
}