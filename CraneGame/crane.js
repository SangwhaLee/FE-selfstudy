let claw = document.querySelector("#claw")
window.addEventListener("keydown", (event) =>{
    switch (event.key) {
        case 'ArrowLeft':
            console.log(claw.style)
            claw.style.left = parseInt(claw.style.left) - 2 + 'px';
            console.log(claw.style.left)
            break;
        case 'ArrowRight':
            claw.style.left = parseInt(claw.style.left) + 2 + 'px';
            break;
    }
})


let myCircle = document.querySelector('.circle');

window.addEventListener('load', () =>{
 	myCircle.style.position = 'absolute';
 	myCircle.style.left = '30px';
 	myCircle.style.top = '30px';
});

window.addEventListener('keydown', (event) => {
 switch (event.key) {
 	case 'ArrowLeft':
 		myCircle.style.left = parseInt(myCircle.style.left) - 2 + 'px';
 		break;
 	case 'ArrowRight':
 		myCircle.style.left = parseInt(myCircle.style.left) + 2 + 'px';
 		break;
 	case 'ArrowUp':
 		myCircle.style.top = parseInt(myCircle.style.top) - 2 + 'px';
 		break;
 	case 'ArrowDown':
 		myCircle.style.top = parseInt(myCircle.style.top) + 2 + 'px';
 		break;
 	default:
 		alert("Only Arrow Keys Are Allowed!");
    }
});