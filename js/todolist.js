const todoForm=document.querySelector("#todo-form");
const todoInput=todoForm.querySelector("input");
const todoList=document.querySelector("#todo-list");

let toDos=[];  /* todo값을 저장해줄 업데이트 가능한 배열 */
const TODOS_KEY="toDos";

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));  /*local에 todo 목록들 저장 */
    /* KEY 값, 저장될 값 */
}


function removeTodo(event){  /* event가 클릭된 버튼을 알려줌 */
    const li=event.target.parentElement;  /* 해당 버튼의 부모요소 - li */
    li.remove();
    toDos=toDos.filter((toDo)=> 
        toDo.id!==parseInt(li.id)); /* 삭제되는 li의 id와 다른 toDo목록들만 저장 */
  /* parseInt: 문자열을 숫자로 */
    saveTodos();

}


function paintTodo(todo){
    const newLi=document.createElement("li");   
    newLi.id=todo.id;
    const newSpan=document.createElement("span");
    newSpan.innerText=todo.text;  /* text와 id값이 있는 obj를 받기 때문 */
    const button=document.createElement("button");
    button.innerText="🌳";
    button.addEventListener("click",removeTodo);
    newLi.appendChild(button);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    

}

function todoFormSubmit(event){
    event.preventDefault(); /* enter했을 때 새로고침되는 기본동작을 막아줌 */
    const newTodo=todoInput.value; /* input 창에 입력한 input값 저장 */
    todoInput.value="";   /* enter 후에 input을 비워줌 */
    const newTodoObj= {
        text: newTodo,
        id: Date.now(),   /* Date.now() : 1000분의 1초를 리턴해줌 */
    }
    toDos.push(newTodoObj);  /* 데이터베이스에 사용자의 입력값과 id값을 저장 */
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit",todoFormSubmit);

const savedTodos=localStorage.getItem(TODOS_KEY);

/* 새로고침을 해도 저장되있는 todo-list 계속 보이게 */
if(savedTodos){   /* savedTodos 값이 존재할 때 */
    const parsedToDos=JSON.parse(savedTodos);  /* 저장된 값들을 배열로 */
    toDos=parsedToDos;  /* 전에 있던 todo들을 복원 */
    parsedToDos.forEach(paintTodo);
}


