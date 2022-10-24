class Car {
  constructor (name) {
    this.name = name;
  }
}

const carNameInput = document.getElementById("car-names-input");
const carNameForm = document.getElementById("car-names-form");
const racingCountForm = document.getElementById("racing-count-form");
const racingCountInput = document.getElementById("racing-count-input");
// const scoreBoard = document.createElement("div");
const raceResult = document.getElementById("race-result");

let cars = [];

function parseCarName(event){
  event.preventDefault();
  cars = carNameInput.value.split(',');
  if(isCar_valid()===false){
    carNameInput.value= "";
    return;
  }
  const racingCountNotice = document.getElementById("racing-count-notice");
  racingCountForm.classList.remove("hidden");
  racingCountNotice.classList.remove("hidden");
  console.log(cars);
}

function isCar_valid(){
  for(let i=0;i<cars.length;i++){
    if(cars[i].length > 5){
      alert('한 차의 이름이 5자를 넘어가지 않도록 해주십시오.');
      carNameInput.value= "";
      return false;
    }
  }
  return true;
}

function countRace(event){
  event.preventDefault();
  raceResult.classList.remove("hidden");
  let car_count = new Array(cars.length).fill(0);
  for(let i=0;i<racingCountInput.value;i++){
    const temp = document.createElement("div");
    drawScoreBoard(temp);
    car_count = makeScoreBoard(car_count, temp);
    const br = document.createElement("br");
    raceResult.appendChild("br");
  }
}

function makeScoreBoard(car_count, temp){
  for(let i=0;i<cars.length;i++){
    const randomNumber = MissionUtils.Random.pickNumberInRange(0,9);
    if(randomNumber >= 4){
      const pTarget = temp.querySelector(`p:nth-child(${i+1})`);
      car_count[i] += 1;
      pTarget.innerText += makeHyphen(car_count[i]);
    }
  }
  return car_count;
}

function makeHyphen(count){
  let result = '';
  for(let i=0;i<count;i++){
    result += '-'
  }
  return result;
}


function drawScoreBoard(scoreBoard){
  scoreBoard.innerText = "";
  for(let i=0;i<cars.length;i++){
    const p = document.createElement("p");
    p.innerText = `${cars[i]}: `;
    scoreBoard.appendChild(p);
  }
  // console.log(scoreBoard);
} 

carNameForm.addEventListener("submit", parseCarName);
racingCountForm.addEventListener("submit", countRace);