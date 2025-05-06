// Declare expression variables
let operand1;
let operand2;
let operator;

// Basic operation functions
function add(a, b)
{
    return a+b;
}

function subtract(a, b)
{
    return a-b;
}

function multiply(a, b)
{
    return a*b;
}

function divide(a, b)
{
    return a/b;
}




// Main operation function
function operate(operator, operand1, operand2)
{
    switch (operator) {
        case '+':
            return add(operand1, operand2);
            break;

        case '-':
            return subtract(operand1, operand2);
            break;

        case '*':
            return multiply(operand1, operand2);
            break;

        case '/':
            return divide(operand1, operand2);
            break;
    }
}


