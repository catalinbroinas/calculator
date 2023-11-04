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

const container = document.querySelector('.container');
const test = document.createElement('p');
test.classList.add('text');
test.textContent = `Result of the add operation is ${operate('divide', num1, num2)}`;
container.appendChild(test);