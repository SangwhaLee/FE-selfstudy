

const focusForm = document.getElementById("focus-today")
const focusInput = focusForm.querySelector("#focus-input")
const MainFocus = document

const HIDDEN_CLASSNAME = "hidden";
const FOCUS_KEY = "focus_today";

const savedFocus = localStorage.getItem(FOCUS_KEY);

function onFocusSubmit(event){
  event.preventDefault();
  focusForm.classList.add(HIDDEN_CLASSNAME);
  const mainfocus = focusInput.value;
  localStorage.setItem(FOCUS_KEY, mainfocus);
  paintFocus(mainfocus);
}

function paintFocus(mainfocus){
  MainFocus.classList.remove(HIDDEN_CLASSNAME);
  MainFocus.innerText = mainfocus;
}

if(savedFocus === null){
  focusForm.classList.remove(HIDDEN_CLASSNAME);
  focusForm.addEventListener("submit", onFocusSubmit);
}
else{
  focusForm.classList.add(HIDDEN_CLASSNAME);
  paintFocus(savedFocus);
}