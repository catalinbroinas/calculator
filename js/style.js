function add(num1, num2)
{
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2)
{
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2)
{
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2)
{
    return parseInt(num1) / parseInt(num2);
}

function setNum1(value)
{
    const calcDisplay = document.querySelector('#calculator-display'); 
    let initValue = Number.parseFloat(calcDisplay.textContent);

    if(initValue === 0)
    {
        calcDisplay.textContent = value;    
    }
    else
    {
        calcDisplay.textContent = initValue + value;
    }
    
    return Number.parseFloat(calcDisplay.textContent);
}

function getNum1()
{
    const calcDisplay = document.querySelector('#calculator-display');
    const numValue = calcDisplay.textContent;

    return Number.parseFloat(numValue);
}

function setOperation(value)
{
    let operator = value;
    
    return operator;
}

function operate(operate, num1, num2)
{
    switch(operate)
    {
        case 'add':
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return divide(num1, num2);
            break;
        default:
            return 'This operate does not exist in this application';
    }
}

const numbers = document.querySelectorAll('.numeric');
const operators = document.querySelectorAll('.operator');

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        setNum1(event.target.value);
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        console.log(setOperation(event.target.value));
    });
});