let counterbuttonAdd1 = document.getElementById("counter-button-add1");
let counterbuttonAdd2 = document.getElementById("counter-button-add2");
let counterbuttonAdd3 = document.getElementById("counter-button-add3");
let counterbuttonAdd4 = document.getElementById("counter-button-add4");
let counterbuttonAdd5 = document.getElementById("counter-button-add5");
let counterbuttonAdd6 = document.getElementById("counter-button-add6");
let counterbuttonAdd7 = document.getElementById("counter-button-add7");
let counterbuttonAdd8 = document.getElementById("counter-button-add8");
let counterbuttonAdd9 = document.getElementById("counter-button-add9");
let counterbuttonMinus1 = document.getElementById("counter-button-minus1");
let counterbuttonMinus2 = document.getElementById("counter-button-minus2");
let counterbuttonMinus3 = document.getElementById("counter-button-minus3");
let counterbuttonMinus4 = document.getElementById("counter-button-minus4");
let counterbuttonMinus5 = document.getElementById("counter-button-minus5");
let counterbuttonMinus6 = document.getElementById("counter-button-minus6");
let counterbuttonMinus7 = document.getElementById("counter-button-minus7");
let counterbuttonMinus8 = document.getElementById("counter-button-minus8");
let counterbuttonMinus9 = document.getElementById("counter-button-minus9");
let counterbuttonClear = document.getElementById("counter-button-clear");
let counter = document.getElementById("counter");
let number = 0;

function Add1() {
    number = number + 1;
    counter.textContent = number;
}

function Add2() {
    number = number + 2;
    counter.textContent = number;
}

function Add3() {
    number = number + 3;
    counter.textContent = number;
}

function Add4() {
    number = number + 4;
    counter.textContent = number;
}

function Add5() {
    number = number + 5;
    counter.textContent = number;
}

function Add6() {
    number = number + 6;
    counter.textContent = number;
}

function Add7() {
    number = number + 7;
    counter.textContent = number;
}

function Add8() {
    number = number + 8;
    counter.textContent = number;
}

function Add9() {
    number = number + 9;
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

function Minus3() {
    number = number - 3;
    counter.textContent = number;
}

function Minus4() {
    number = number - 4;
    counter.textContent = number;
}

function Minus5() {
    number = number - 5;
    counter.textContent = number;
}

function Minus6() {
    number = number - 6;
    counter.textContent = number;
}

function Minus7() {
    number = number - 7;
    counter.textContent = number;
}

function Minus8() {
    number = number - 8;
    counter.textContent = number;
}

function Minus9() {
    number = number - 9;
    counter.textContent = number;
}

function clear() {
    number = 0;
    counter.textContent = number;
}

console.log(number)

counterbuttonAdd1.addEventListener("click", Add1);
counterbuttonAdd2.addEventListener("click", Add2);
counterbuttonAdd3.addEventListener("click", Add3);
counterbuttonAdd4.addEventListener("click", Add4);
counterbuttonAdd5.addEventListener("click", Add5);
counterbuttonAdd6.addEventListener("click", Add6);
counterbuttonAdd7.addEventListener("click", Add7);
counterbuttonAdd8.addEventListener("click", Add8);
counterbuttonAdd9.addEventListener("click", Add9);
counterbuttonMinus1.addEventListener("click", Minus1);
counterbuttonMinus2.addEventListener("click", Minus2);
counterbuttonMinus3.addEventListener("click", Minus3);
counterbuttonMinus4.addEventListener("click", Minus4);
counterbuttonMinus5.addEventListener("click", Minus5);
counterbuttonMinus6.addEventListener("click", Minus6);
counterbuttonMinus7.addEventListener("click", Minus7);
counterbuttonMinus8.addEventListener("click", Minus8);
counterbuttonMinus9.addEventListener("click", Minus9);
counterbuttonClear.addEventListener("click", clear);
