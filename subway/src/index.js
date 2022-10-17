const stationManagerButton = document.getElementById("station-manager-button");
const lineManagerButton = document.getElementById("line-manager-button");
const lineManager = document.getElementById("line-manager");
const stationManager = document.getElementById("station-manager");

function stationManage(event){
    lineManager.classList.add("hidden");    
    stationManager.classList.remove("hidden");
}

function lineManage(event){
    stationManager.classList.add("hidden");
    lineManager.classList.remove("hidden");
}

stationManagerButton.addEventListener("click", stationManage);
lineManagerButton.addEventListener("click", lineManage);

export { stationManage, lineManage };