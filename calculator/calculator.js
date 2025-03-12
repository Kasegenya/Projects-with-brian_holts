const plus = document.querySelector(".plus-button");
const minus = document.querySelector(".minus-button");
const multiply = document.querySelector(".mult-button");
const divide = document.querySelector(".divide-button");
const equals = document.querySelector(".equals-button");
const clear = document.querySelector(".clear-button");
const arrow = document.querySelector(".arrow-button");
const display = document.querySelector(".calc-display");
const numeralButtons = document.querySelectorAll(".numeral");

numeralButtons.forEach((numeralButton) => {
    numeralButton.addEventListener("click", () => {
        if (display.innerText === "0") {
            display.innerText = numeralButton.innerText;
        } else {
            display.innerText += numeralButton.innerText;
        }
    });
});

let firstNumber = 0, secondNumber = 0, result = 0;
let plusSignClicked = false, equalsSignClicked = false, minusSignClicked = false, divSignClicked = false, multSignClicked = false;

plus.addEventListener("click", () => {
    plusSignClicked = true;
    if (firstNumber === 0) {
        firstNumber = parseInt(display.innerText);
    } else {
        firstNumber += parseInt(display.innerText);
      }
    display.innerText = "0";
});

minus.addEventListener("click", () => {
    minusSignClicked = true;
    if (firstNumber === 0) {
        firstNumber = parseInt(display.innerText);
    } else {
        firstNumber -= parseInt(display.innerText);
    }
    display.innerText = "0";
});

divide.addEventListener("click", () => {
    divSignClicked = true;
    if (firstNumber === 0) {
        firstNumber = parseInt(display.innerText);
    } else {
        firstNumber /= parseInt(display.innerText);
    }
    display.innerText = "0";
});

multiply.addEventListener("click", () => {
    multSignClicked = true;
    if (firstNumber === 0) {
        firstNumber = parseInt(display.innerText);
    } else {
        firstNumber *= parseInt(display.innerText);
    }
    display.innerText = "0";
});

equals.addEventListener("click", () => {
    equalsSignClicked = true;
    secondNumber = parseInt(display.innerText);
    if (plusSignClicked) {
        result = firstNumber + secondNumber;
        display.innerText = result;
        plusSignClicked = false;
    } else if (minusSignClicked) {
        result = firstNumber - secondNumber;
        display.innerText = result;
        minusSignClicked = false;
    } else if (divSignClicked) {
        result = firstNumber / secondNumber;
        display.innerText = result;
        divSignClicked = false;
    } else if (multSignClicked) {
        result = firstNumber * secondNumber;
        display.innerText = result;
        multSignClicked = false;
    }
    
});

clear.addEventListener("click", () => {
    display.innerText = "0";
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    plusSignClicked = false;
    equalsSignClicked = false;
    minusSignClicked = false;
    divSignClicked = false;
    multSignClicked = false;
});

arrow.addEventListener("click", () => {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
});

document.addEventListener("keydown", function handleKeyPress (event) {   
    console.log(event.key);
});


