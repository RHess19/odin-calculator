let operand1 = "";
let operand2 = "";
let operator = "";
let operator2 = "";
let result = "";
let display = document.querySelector(".calculator-display");
display.textContent = "";
let chaining;
let equals; // True if equals was just pressed - keeps the screen from clearing when entering multidigit numbers
let message = document.querySelector(".message-container"); // Document element for displaying error messages
let cleared;
let charPressed;
let lastInput;

// Basic operation functions
function add(a, b)
{
    return (Number(a) + Number(b));
}

function subtract(a, b)
{
    return (Number(a) - Number(b));
}

function multiply(a, b)
{
    return (Number(a) * Number(b));
}

function divide(a, b)
{
    return (Number(a) / Number(b));
}

function operate(operator, operand1, operand2)
{
    switch (operator)
    {
        case "+":
            return add(operand1, operand2);
            break;
        
        case "-":
            return subtract(operand1, operand2);
            break;

        case "X":
            return multiply(operand1, operand2);
            break;

        case "/":
            return divide(operand1, operand2);
            break;
    }
}


function addCharToDisplay(char)
{
    display.textContent += char;
}

function clearDisplay()
{
    display.textContent = "";
}

function roundResult()
{
    if(display.textContent.length > 12)
    {
        display.textContent = display.textContent.slice(0, 12);
        message = "Result longer than 12 characters. Result has been truncated to 12 characters.";
    }
}




// Button event lister via event delegation
const buttonsContainer = document.querySelector(".calculator-buttons-container");

buttonsContainer.addEventListener("click", (event) => {
    // Prevent from triggering on the container
    if(event.target.className === "calculator-buttons-container")
    {
        return;
    }


    if(event.target.value === "CLEAR")
    {
        clearDisplay();
        operand1 = "";
        operand2 = "";
        operator = "";
        equals = false;
    }
    // Operator
    else if(event.target.value === "+" || event.target.value === "-" || event.target.value === "X" || event.target.value === "/")
    {
        if(lastInput === "+" || lastInput === "-" || lastInput === "X" || lastInput === "/") // Prevent pressing multiple operators in a row from resetting the calculation. Instead, store the new operator and wait until a nubmer is entered
        {
            operator = event.target.value;
            return;
        }


        if(!charPressed) // If no characters entered since the last operator entered...
        {
            operator = event.target.value;
            charPressed = false;
            lastInput = event.target.value;
            return;
        }
        
        if(operand1 !== "" && operator !== "" && operand2 !== "")
        {
            operand1 = result;
            operand2 = display.textContent;
            result = operate(operator, operand1, operand2);
            operator = event.target.value;
            display.textContent = result;
            chaining = true;
            cleared = false;
            lastInput = event.target.value;
        } else if(operand1 !== "" && operator !== "")
        {
            operand2 = display.textContent;
            result = operate(operator, operand1, operand2);
            operator = event.target.value;
            display.textContent = result;
            chaining = true;
            cleared = false;
            lastInput = event.target.value;
        }
        else
        {
            operand1 = display.textContent;
            operator = event.target.value;
            clearDisplay();
            cleared = false;
            lastInput = event.target.value;
        }

        
    }
    else if(event.target.value === "=")
    {
        if(operator === "")
        {
            // Do nothing if they just entered a number and hit enter
            return;
        }

        if(operand1 !== "" && operator !== "" && operand2 !== "")
        {
            operand1 = result;
            operand2 = display.textContent;
            result = operate(operator, operand1, operand2);
            display.textContent = result;
            operand1 = "";
            operand2 = "";
            operator = "";
            operator2 = "";
            chaining = "";
            result = "";
            return;
        }

        operand2 = display.textContent;
        result = operate(operator, operand1, operand2);
        display.textContent = result;

        // Reset all calculation values for the next calculation
        operand1 = "";
        operand2 = "";
        operator = "";
        operator2 = "";
        chaining = "";
        result = "";
        equals = true;
    }
    // Number or decimal
    else
    {
        lastInput = "";
        charPressed = true; // Keep track of when something othan than an operator is pressed - detects pressing multiple operators in a row without calculating anything
        if(equals === true) // Reset after reaching the bottom of the = conditional
        {
            if(!cleared) // Only clear the display on the FIRST time after an operator is pressed while chaining expressions
            {
                clearDisplay();
                cleared = true;
            }
            message = "";
            addCharToDisplay(event.target.value);
            return;
        } else if(chaining == true)
        {
            if(!cleared) // Only clear the display on the FIRST time after an operator is pressed while chaining expressions
            {
                clearDisplay();
                cleared = true;
            }
            addCharToDisplay(event.target.value);
            return;
        }
            addCharToDisplay(event.target.value);
    }
});