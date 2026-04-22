let button = document.getElementById("counter-button");
let counter = document.getElementById("counter")
let number = 0;

function ChangeNumberMode(){
    number + 1
}

button.addEventListener("click", ChangeNumberMode);