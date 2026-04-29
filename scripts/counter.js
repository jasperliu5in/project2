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
let Addbutton = document.getElementById("plus")
let Minusbutton = document.getElementById("minus")
let Equalbutton = document.getElementById("equal")
let Oldnumber = 0
let counter = document.getElementById("counter");
let number = 0;

//Define Functions
function Show(num) {
    counter.textContent = num;
}

function Rember() {}

function Add() {}

function Minus() {}

function Add1() {
    number = number + 1;
    Show(number);
}

function Add2() {
    number = number + 2;
    Show(number);
}

function Minus1() {
    number = number - 1;
    Show(number);
}

function Minus2() {
    number = number - 2;
    Show(number)
}

function One() {
    number = number * 10 + 1;
    Show(number)
}

function Two() {
    number = number * 10 + 2;
    Show(number)
}

function Three() {
    number = number * 10 + 3;
    Show(number)
}

function Four() {
    number = number * 10 + 4;
    Show(number)
}

function Five() {
    number = number * 10 + 5;
    Show(number)
}

function Six() {
    number = number * 10 + 6;
    Show(number)
}

function Seven() {
    number = number * 10 + 7;
    Show(number)
}

function Eight() {
    number = number * 10 + 8;
    Show(number)
}

function Nine() {
    number = number * 10 + 9;
    Show(number)
}

function Zero() {
    number = number * 10 + 0;
    Show(number)
}
function clear() {
    number = 0;
    Show(number)
}

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
