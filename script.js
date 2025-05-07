// Declare variables
let operand1;
let operand2;
let operator;

let expressionValue = "";
let calculatorDisplay = document.querySelector(".calculator-display");
calculatorDisplay.textContent = expressionValue;

// Stacks
let operationsStack = [];
let operatorsStack = [];

// Basic operation functions
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}




// Main operation function
function operate(operator, operand1, operand2) {
    let display = document.querySelector(".calculator-display");
    switch (operator) {
        case '+':
            display.textContent = add(operand1, operand2);
            operand1 = "";
            operand2 = "";
            operator = "";
            break;

        case '-':
            display.textContent = subtract(operand1, operand2);
            operand1 = "";
            operand2 = "";
            operator = "";
            break;

        case 'X':
            display.textContent = multiply(operand1, operand2);
            operand1 = "";
            operand2 = "";
            operator = "";
            break;

        case '/':
            display.textContent = divide(operand1, operand2);
            operand1 = "";
            operand2 = "";
            operator = "";
            break;
    }
}


// Add a character to the calculator's display
function addCharToDisplay(char) {
    let display = document.querySelector(".calculator-display");
    display.textContent += char;
    expressionValue += char;
}

// Clear display
function clearDisplay() {
    let display = document.querySelector(".calculator-display");
    display.textContent = "";
    expressionValue = "";
}




// Event listeners via delegation
const buttonsContainer = document.querySelector(".calculator-buttons-container");

buttonsContainer.addEventListener("click", (event) => {
    
});