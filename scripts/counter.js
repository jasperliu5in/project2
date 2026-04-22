let counterbutton = document.getElementById("counter-button");
let counter = document.getElementById("counter");
let number = 0;

function ChangeNumberMode() {
    number = number + 1;
    counter.textContent = number;
}

counterbutton.addEventListener("click", ChangeNumberMode);