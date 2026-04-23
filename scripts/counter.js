//Make Variables

let counterbuttonAdd1 = document.getElementById("counter-button-add1");
let counterbuttonAdd2 = document.getElementById("counter-button-add2");
let counterbuttonMinus1 = document.getElementById("counter-button-minus1");
let counterbuttonMinus2 = document.getElementById("counter-button-minus2");
let one = document.getElementById("One")
let two = document.getElementById("Two")
let three = document.getElementById("Three")
let four = document.getElementById("Four")
let five = document.getElementById("Five")
let six = document.getElementById("Six")
let seven = document.getElementById("Seven")
let eight = document.getElementById("Eight")
let nine = document.getElementById("Nine")
let zero = document.getElementById("Zero")
let counterbuttonClear = document.getElementById("counter-button-clear");
let counter = document.getElementById("counter");
let number = 0;

//Define Functions

function Add1() {
    number = number + 1;
    counter.textContent = number;
}

function Add2() {
    number = number + 2;
    counter.textContent = number;
}

function Minus1() {
    number = number - 1;
    counter.textContent = number;
}

function Minus2() {
    number = number - 2;
    counter.textContent = number;
}

function One() {
    number = 1;
    counter.textContent = number;
}

function Two() {
    number = 2;
    counter.textContent = number;
}

function Three() {
    number = 3;
    counter.textContent = number;
}

function Four() {
    number = 4;
    counter.textContent = number;
}

function Five() {
    number = 5;
    counter.textContent = number;
}

function Six() {
    number = 6;
    counter.textContent = number;
}

function Seven() {
    number = 7;
    counter.textContent = number;
}

function Eight() {
    number = 8;
    counter.textContent = number;
}

function Nine() {
    number = 9;
    counter.textContent = number;
}

function Zero() {
    number = 0;
    counter.textContent = number;
}
function clear() {
    number = 0;
    counter.textContent = number;
}

console.log(number)

//Define Button Event Listeners

counterbuttonAdd1.addEventListener("click", Add1);
counterbuttonAdd2.addEventListener("click", Add2);
counterbuttonMinus1.addEventListener("click", Minus1);
counterbuttonMinus2.addEventListener("click", Minus2);
one.addEventListener("click", One);
two.addEventListener("click", Two);
three.addEventListener("click", Three);
four.addEventListener("click", Four);
five.addEventListener("click", Five);
six.addEventListener("click", Six);
seven.addEventListener("click", Seven);
eight.addEventListener("click", Eight);
nine.addEventListener("click", Nine);
zero.addEventListener("click", Zero);
counterbuttonClear.addEventListener("click", clear);
