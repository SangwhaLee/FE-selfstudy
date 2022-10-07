

const todayFocus = document.getElementById("focus-today");
const focusInput = todayFocus.querySelector("#focus-today input");
const MainFocus = document.querySelector("#FocusToday");

const HIDDEN= "hidden";
const FOCUS_KEY = "focustoday";

function onFocusSubmit(event){
  console.log(event);
  event.preventDefault();
  todayFocus.classList.add (HIDDEN);
  const mainfocus = focusInput.value;
  localStorage.setItem(FOCUS_KEY, mainfocus);
  paintFocus(mainfocus);
}

function paintFocus(mainfocus){
  MainFocus.classList.remove (HIDDEN);
  MainFocus.innerText = mainfocus;
}

const savedFocus = localStorage.getItem(FOCUS_KEY);

if(savedFocus === null){
  todayFocus.addEventListener("submit", onFocusSubmit);
}
else{
  todayFocus.classList.add (HIDDEN);
  paintFocus(savedFocus);
}