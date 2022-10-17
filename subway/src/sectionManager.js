import { savedLines } from "./lineManger.js"
import { savedStations } from "./stationManager.js";

const sectionSelect = document.getElementById("section-select");
const addStationSector = document.getElementById("add-station-sector");
const selectedLineTable = document.getElementById("selected-line-table");

function putChoiceStations(station){
    const choice = document.createElement("option");
    choice.value = station;
    choice.innerText = station;
    addStationSector.appendChild(choice);
}

function writeSector(){

}

function writeTable(){
    
}

function createSector(event){
    const targetSector = event.target.innerText;
    const parsedLines = JSON.parse(savedLines);
    for(let i=0;i<parsedLines.length;i++){
        if(parsedLines[i].name === targetSector){
            
            // const tr = document.createElement("tr");
            // const td1 = document.createElement("td");
            // const td2 = document.createElement("td");
            // const td3 = document.createElement("td");
            // td1.innerText = i;
            // td2.innerText = parsedLines[i].name;
            // const button = document.createElement("button");
            // button.innerText = "노선에서 제거";
            // td3.appendChild(button);
            // tr.appendChild(td1);
            // tr.appendChild(td2);
            // tr.appendChild(td3);
            // selectedLineTable.appendChild(tr);
        }
    }
}

if(savedLines !== null){
    const parsedLines = JSON.parse(savedLines);
    for(let i=0; i< parsedLines.length;i++){
        const button = document.createElement("button");
        button.innerText = parsedLines[i].name;
        console.log(parsedLines[i]);
        button.addEventListener ("click", createSector);
        sectionSelect.appendChild(button);
    }
}

if(savedStations !== null) {
    const parsedStations = JSON.parse(savedStations);
    parsedStations.forEach(putChoiceStations);
}