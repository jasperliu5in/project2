let counterbuttonAdd1 = document.getElementById("counter-button-add1");
let counterbuttonMinus1 = document.getElementById("counter-button-minus1");
let counterbuttonClear = document.getElementById("counter-button-clear");
let counter = document.getElementById("counter");
let number = 0;

function Add1() {
    number = number + 1;
    counter.textContent = number;
}

function Minus1() {
    number = number - 1;
    counter.textContent = number;
}

function clear() {
    number = 0
    counter.textContent = number;
}

console.log(number)

counterbuttonAdd1.addEventListener("click", Add1);
counterbuttonMinus1.addEventListener("click", Minus1);
counterbuttonClear.addEventListener("click", clear);
