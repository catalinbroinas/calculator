const numbers = document.querySelectorAll('.numeric');
const operators = document.querySelectorAll('.operator');
const calculator = {
    num1: null,
    num2: null,
    operate: null
};

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

function setNumber(value)
{
    const calcDisplay = document.querySelector('#calculator-display'); 
    let initValue = Number.parseFloat(calcDisplay.textContent);
    

    if(initValue === 0)
    {
        calcDisplay.textContent = value;    
    }
    else if(!Number.isInteger(initValue))
    {
        calcDisplay.textContent = value;
    }
    else
    {
       calcDisplay.textContent = initValue + value;
    }
    
    return Number.parseFloat(calcDisplay.textContent);
}

function getNumber(value)
{
    if(calculator['num1'] === null)
    {
        calculator['num1'] = value;
    }
    else
    {
        calculator['num2'] = value;    
    } 
}

function setOperation(value)
{
    const calcDisplay = document.querySelector('#calculator-display'); 
    let operator = value;
    calculator['operate'] = value;
    calcDisplay.textContent = value;
       
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

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        setNumber(event.target.value);
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        let number = setNumber(event.target.value);
        getNumber(number);
        calculator['operate'] = setOperation(event.target.value);
        console.log(calculator['operate']);
        console.log(calculator['num1']);
        console.log(calculator['num2']);
    });
});

console.log(calculator['num1']);
console.log(calculator['num2']);
console.log(calculator['operate']);