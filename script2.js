let operand1 = "";
let operand2 = "";
let operator = "";
let operator2 = "";
let result = "";
let display = document.querySelector(".calculator-display");
display.textContent = "";
let chaining;

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
    }
    // Operator
    else if(event.target.value === "+" || event.target.value === "-" || event.target.value === "X" || event.target.value === "/")
    {
        if(operand1 !== "" && operator !== "" && operand2 !== "")
        {
            operand1 = result;
            operand2 = display.textContent;
            result = operate(operator, operand1, operand2);
            operator = event.target.value;
            display.textContent = result;
        } else if(operand1 !== "" && operator !== "")
        {
            operand2 = display.textContent;
            result = operate(operator, operand1, operand2);
            operator = event.target.value;
            display.textContent = result;
            chaining = true;
        }
        else
        {
            operand1 = display.textContent;
            operator = event.target.value;
            clearDisplay();
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
    }
    // Number or decimal
    else
    {
        if(result === "") // Reset after reaching the bottom of the = conditional
        {
            clearDisplay();
        }

        if(chaining == true)
        {
            clearDisplay();
            addCharToDisplay(event.target.value);
        }
        else
        {
            addCharToDisplay(event.target.value);
        }
    }
});