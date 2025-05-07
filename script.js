// Declare variables
let operand1;
let operand2;
let operator;

let expressionValue = "";
let calculatorDisplay = document.querySelector(".calculator-display");
calculatorDisplay.textContent = expressionValue;

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
    console.log(`Operand1 = ${operand1}\nOperand2 = ${operand2}\nOperator = ${operator}`);
    if(event.target.className == "calculator-buttons-container")
    {
        return;
    }

    let operators = ["=", "CLEAR", "+", "-", "X", "/"];
    if (!(operators.includes(event.target.value))) {
        if(operand1 !== "" && operator !== "")
        {
            clearDisplay();
        }

        addCharToDisplay(event.target.value);
    }
    else if (operators.includes(event.target.value)) {
        switch (event.target.value) {
            case "CLEAR":
                clearDisplay();
                break;

            case "=":
                // Only run if there is an operand1 and operator set
                // Record current expressionValue as operand2
                // operate()
                if(operand1 !== "" && operator !== "")
                {
                    operand2 = expressionValue;
                    operate(operator, operand1, operand2);
                    operand1 = "";
                    operand2 = "";
                    operator = "";
                }
                break;

            case "+":
            case "-":
            case "X":
            case "/":
                if(expressionValue === "")
                {
                    break;
                }

                // Record current expressionValue as operand1
                // Record operator
                // Reset expressionValue
                operand1 = expressionValue;
                operator = event.target.value;
                expressionValue = "";
                break;
        }
    }
});