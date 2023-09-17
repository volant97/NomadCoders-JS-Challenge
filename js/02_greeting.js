const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoList = document.querySelector("#todo-list")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KET = "username";

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  localStorage.setItem(USERNAME_KET, username);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  loginButton.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(savedUsername) {
  greeting.innerText = `Hello ${savedUsername}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  showTodoInput();
}

function showTodoInput() {
  todoInput.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KET);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  todoList.classList.add(HIDDEN_CLASSNAME);
} else {
  loginInput.classList.add(HIDDEN_CLASSNAME);
  loginButton.classList.add(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}


