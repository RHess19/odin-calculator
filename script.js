// Declare variables
let operand1;
let operand2;
let operator;

let display = document.querySelector(".calculator-display");
display.textContent = "";

// Basic operation functions
function add(a, b) {
    return (Number(a) + Number(b));
}

function subtract(a, b) {
    console.log(`result: ${Number(a)-Number(b)}`);
    return (Number(a) - Number(b));
}

function multiply(a, b) {
    return (Number(a) * Number(b));
}

function divide(a, b) {
    return (Number(a) / Number(b));
}




// Main operation function
function operate(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return add(operand1, operand2);
            break;

        case '-':
            return subtract(operand1, operand2);
            break;

        case 'X':
            return multiply(operand1, operand2);
            break;

        case '/':
            return divide(operand1, operand2);
            break;
    }
}


// Add a character to the calculator's display
function addCharToDisplay(char) {
    display.textContent += char;
}

// Clear display
function clearDisplay() {
    display.textContent = "";
}




// Event listeners via delegation
const buttonsContainer = document.querySelector(".calculator-buttons-container");

buttonsContainer.addEventListener("click", (event) => {
    console.log(event);
    if(event.target.className === "calculator-buttons-container")
    {
        return;
    }

    let operators = ["+", "-", "X", "/"];

    if(event.target.value === "CLEAR")
    {
        clearDisplay();
        operand1 = "";
        operator = "";
    }
    else if(event.target.value === "=")
    {
        display.textContent = operate(operator, operand1, display.textContent);
    }
    // Operator entered
    else if(operators.includes(event.target.value))
    {
        if(!operator) // If no operator has been entered yet, proceed. Otherwise, don't overwrite the previous operand value. Just assign the new operator
        {
            operand1 = display.textContent;
        }
        operator = event.target.value;
        clearDisplay();
    }
    else
    {
        addCharToDisplay(event.target.value);
    }
});