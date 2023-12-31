const numbers = document.querySelectorAll('.numeric');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const remove = document.querySelector('#remove');
const point = document.querySelector('#point');
const calculator = {
    num1: null,
    num2: null,
    operate: null
};

function add(num1, num2)
{
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2)
{
    return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2)
{
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2)
{
    return parseFloat(num1) / parseFloat(num2);
}

function pow(num1, num2)
{
    return parseFloat(num1) ** parseInt(num2);
}

function setNumber(value)
{
    const calcDisplay = document.querySelector('#calculator-display'); 
    let initValue = calcDisplay.textContent;

    if(initValue == 0)
    {
        if(parseFloat(value) >= 0 && parseFloat(value) < 10)
        {
            calcDisplay.textContent = value;
        }
       else
       {
            calcDisplay.textContent = initValue + value;
       }
    }
    else if(Number.isNaN(parseFloat(initValue)))
    {
        calcDisplay.textContent = value;
    }
    else
    {
       calcDisplay.textContent = initValue + value;
    }
    
    return parseFloat(calcDisplay.textContent);
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

function getResult(operate, num1, num2)
{
    switch(operate)
    {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        case '**':
            return pow(num1, num2);
            break;
        default:
            return 'Error';
    }
}

function setResult(operate, num1, num2)
{
    const calcDisplay = document.querySelector('#calculator-display'); 
    let result = calcDisplay.textContent;

    if(calculator['operate'] !== null)
    {
        result = getResult(operate, num1, num2);
    }

    calcDisplay.textContent = result;
    return result;
}

function resetValues()
{
    calculator['num1'] = null;
    calculator['num2'] = null;
    calculator['operate'] = null;
}

function clearDisplay()
{
    const calcDisplay = document.querySelector('#calculator-display'); 
    calcDisplay.textContent = 0;
    resetValues();
}

function removeLastDigit()
{
    const calcDisplay = document.querySelector('#calculator-display');
    let initValue = calcDisplay.textContent;
    
    if(initValue == 0)
    {
        return parseFloat(initValue);
    }

    let str = initValue.toString();
    let newValue = 0;

    if(str.length > 1)
    {
        newValue = str.substring(0, str.length - 1);
    }

    calcDisplay.textContent = newValue;
    return newValue;
}

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        setNumber(event.target.value);
    });
});

point.addEventListener('click', (event) => {
    const calcDisplay = document.querySelector('#calculator-display');
    calcDisplay.textContent += event.target.value;
});

clear.addEventListener('click', clearDisplay);
remove.addEventListener('click', () => {
    removeLastDigit();
});

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        let number = setNumber(event.target.value);
        getNumber(number);
        if(calculator['operate'] === null)
        {
            calculator['operate'] = setOperation(event.target.value);
        }
        else
        {
            let num1 = calculator['num1'];
            let num2 = calculator['num2'];
            let operate = calculator['operate'];
            let result = setResult(operate, num1, num2);
            resetValues();
            calculator['num1'] = result;
            calculator['operate'] = setOperation(event.target.value);
        }
    });
});

equal.addEventListener('click', () => {
    let number = setNumber(event.target.value);
    getNumber(number);
    let num1 = calculator['num1'];
    let num2 = calculator['num2'];
    let operate = calculator['operate'];
    setResult(operate, num1, num2);
    resetValues();
});