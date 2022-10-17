function checkOneBox(event){
  const boxes = document.querySelectorAll(".choose");
  // console.log(boxes.length)
  for(let i=0; i<boxes.length;i++){
    if(boxes[i] != event.target){
      boxes[i].checked = false;
    }
  }
}

function nextStage(event){
  const ratingbox = document.querySelector(".ratingbox");
  const resultbox = document.getElementById("resultbox");
  const boxes = document.querySelectorAll(".choose");
  const notice = document.querySelector(".noticebox p");
  for(let i=0; i<boxes.length;i++){
    if(boxes[i].checked === true){
      notice.innerText = ("You selected "+(i+1)+" out of 5");
    }
  }
  resultbox.classList.remove("hidden");
  ratingbox.classList.add("hidden");
}

const circleButton1 = document.getElementById("button1");
const circleButton2 = document.getElementById("button2");
const circleButton3 = document.getElementById("button3");
const circleButton4 = document.getElementById("button4");
const circleButton5 = document.getElementById("button5");
const submitButton = document.querySelector("div .submitbutton");

circleButton1.addEventListener("click", checkOneBox);
circleButton2.addEventListener("click", checkOneBox);
circleButton3.addEventListener("click", checkOneBox);
circleButton4.addEventListener("click", checkOneBox);
circleButton5.addEventListener("click", checkOneBox);

submitButton.addEventListener("click", nextStage);

