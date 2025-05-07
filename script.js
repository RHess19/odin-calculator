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
    let display = document.querySelector(".calculator-display");
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
    operand1 = "";
    operand2 = "";
    operator = "";
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
    }
    else if(event.target.value === "=")
    {
        // Begin by assigning the current display value to operand2
        operand2 = display.textContent;
        console.log(`operand2: ${operand2}`);

        switch (operator) {
            case "+":
                display.textContent = operate("+", operand1, operand2);
                break;
            
            case "-":
                display.textContent = operate('-', operand1, operand2);
                break;

            case "X":
                display.textContent = operate("X", operand1, operand2);
                break;

            case "/":
                display.textContent = operate("/", operand1, operand2);
                break;
        
            default:
                break;
        }
    }
    else if(operators.includes(event.target.value))
    {
        console.log(`event.target.value = ${event.target.value}`);
        // Four operators
        // When an operator is read, assign the current display value to operand1
        // Assign the operator to operator
        operand1 = display.textContent;
        operator = event.target.value;
        console.log(`operand1: ${operand1}`);
        console.log(`operator: ${operator}`);
    }
    else
    {
        if(operand1)
        {
            clearDisplay();
        }
        addCharToDisplay(event.target.value);
    }
});