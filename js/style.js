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
    
    return calcDisplay.textContent;
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

const buttons = document.querySelectorAll('.numeric');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(setNum1(event.target.value));
    });
});