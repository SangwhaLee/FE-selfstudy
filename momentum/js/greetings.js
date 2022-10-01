const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
    loginForm.classList.add("hidden");
    console.log(username);
}

function handleLinkClick(event){
    console.log(event);
    alert("clicked");
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(USERNAME_KEY);
}