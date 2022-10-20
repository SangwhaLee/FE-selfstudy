import { putChoiceTopBottom,topLineSelect,bottomLineSelect } from "./lineManger.js";
import { createSector, sectionSelect } from "./sectionManager.js";

const stationManagerButton = document.getElementById("station-manager-button");
const lineManagerButton = document.getElementById("line-manager-button");
const sectionManagerButton = document.getElementById("section-manager-button");
const mapPrintButton = document.getElementById("map-print-manager-button");
const lineManager = document.getElementById("line-manager");
const stationManager = document.getElementById("station-manager");
const sectionManager = document.getElementById("section-manager");
const mapListManager = document.getElementById("section-list");

function stationManage(event){
    lineManager.classList.add("hidden");    
    stationManager.classList.remove("hidden");
    sectionManager.classList.add("hidden");
    mapListManager.classList.add("hidden");
}

function lineManage(event){
    const savedStations = localStorage.getItem("stations")
    if(savedStations !== null){
        topLineSelect.innerText=""
        bottomLineSelect.innerText=""
        const parsedStations = JSON.parse(savedStations);
        parsedStations.forEach(putChoiceTopBottom);
    }
    stationManager.classList.add("hidden");
    lineManager.classList.remove("hidden");
    sectionManager.classList.add("hidden");
    mapListManager.classList.add("hidden");
}

function sectionManage(event){
    const savedLines = localStorage.getItem("lines")
    if(savedLines !== null){
        sectionSelect.innerText=""
        const parsedLines = JSON.parse(savedLines);
        for(let i=0; i< parsedLines.length;i++){
            const button = document.createElement("button");
            button.innerText = parsedLines[i].name;
            button.addEventListener ("click", createSector);
            sectionSelect.appendChild(button);
        }
    }
    sectionManager.classList.remove("hidden");
    stationManager.classList.add("hidden");
    lineManager.classList.add("hidden");
    mapListManager.classList.add("hidden");
}

function mapListManage(event){
    sectionManager.classList.add("hidden");
    stationManager.classList.add("hidden");
    lineManager.classList.add("hidden");
    mapListManager.classList.remove("hidden");
}

stationManagerButton.addEventListener("click", stationManage);
lineManagerButton.addEventListener("click", lineManage);
sectionManagerButton.addEventListener("click", sectionManage);
mapPrintButton.addEventListener("click", mapListManage);

export { stationManage, lineManage };