const bodyDim = document.getElementById('body-wrap');
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');
const link = document.querySelector('a');

const BODYDIM = "dim"
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


function onLoginSubmit(event){
    event.preventDefault();
    bodyDim.classList.remove(BODYDIM);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText = "Hello " + username; 대체하는방법
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `${username}さん,今日も頑張りましょう !_!`;
}
// function handleLinkClick(e){
//     e.preventDefault();
//     console.dir(e);
// }

// link.addEventListener('click', handleLinkClick); 

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    bodyDim.classList.remove(BODYDIM);
    // show the greetings
    paintGreetings(saveUsername);
}