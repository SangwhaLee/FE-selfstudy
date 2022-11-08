let claw = document.querySelector("#claw")
const mainScreen = document.getElementById("main-screen")
const leftClaw = document.getElementById("clawLeft")
const rightClaw = document.getElementById("clawRight")


window.addEventListener('load', () =>{
	claw.style.position = 'absolute';
	claw.style.left = '15px';
	claw.style.top = '151px';
});

let clawStart = window.pageYOffset + mainScreen.getBoundingClientRect().left
let clawStop = clawStart + 684

console.log(clawStart)
console.log(clawStop)

window.addEventListener("resize", (event) => {
	clawStart = window.pageYOffset + mainScreen.getBoundingClientRect().left
	clawStop = clawStart + 684
})

window.addEventListener("keydown", (event) =>{
	switch (event.key) {
		case 'ArrowLeft':
			let abTop = window.pageXOffset + claw.getBoundingClientRect().left;	
			console.log(abTop)
			if(abTop - 6 > clawStart){
				claw.style.left = parseInt(claw.style.left) - 6 + 'px';
			}
				break;
		case 'ArrowRight':
			let abTop2 = window.pageXOffset + claw.getBoundingClientRect().left;
			console.log(abTop2)	
			if(abTop2 + 56 + 6 < clawStop){
				claw.style.left = parseInt(claw.style.left) + 6 + 'px';
			}
				break;
		case " ":
			openClaws()
			const clawBar = document.getElementById("clawBar")
			// clawBar.style.transform = 'scaleY(4)'
			break;
		// case 'ArrowUp':
		// 	let targetTop3 = claw.getBoundingClientRect().top;

		// 	let abTop3 = window.pageYOffset + claw.getBoundingClientRect().top;	
		// 	console.log(abTop3)
		// 	claw.style.top = parseInt(claw.style.top) - 2 + 'px';
		// 	break;
		// case 'ArrowDown':
		// 	let targetTop4 = claw.getBoundingClientRect().top;

		// 	let abTop4 = window.pageYOffset + claw.getBoundingClientRect().top;	
		// 	console.log(abTop4)
		// 	claw.style.top = parseInt(claw.style.top) + 2 + 'px';
		// 	break;
	}
})

function openClaws() {
	rightClaw.style.transform = "rotate(0deg)"
	leftClaw.style.transform = "rotate(0deg)"
}

function closeClaws() {
	rightClaw.style.transform = "rotate(30deg)"
	leftClaw.style.transform = "rotate(-30deg)"
}