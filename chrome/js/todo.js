const todoIcon = document.getElementById('todo-icon');
const todoWrap = document.getElementById('todo-wrap');
const toDoForm = document.getElementById('todo-form');
const todoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = "todos"

let toDos = [];

function handleTodo(){
    todoWrap.classList.toggle('hidden');
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){ // todo를 그리는 역할
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button') ;
    button.innerText = "X";
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.append(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; // 공백으로 만들기 전에 새로운 변수로 복사
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){ // if(savedToDos){ 이렇게도 가능
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

todoIcon.addEventListener('click', handleTodo)
