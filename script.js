function add(a,b){
    return a + b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

let operand1;
let operand2;
let operator;

function operate(operand1,operator,operand2){
    operand1 = parseInt(prompt('Number 1?'))
    operand2 = parseInt(prompt('Number 2?'))
    operator = prompt('What do you wanna do with these numbers?')

    if (operator === '+' ){
        alert(add(operand1,operand2))
    }
    else if (operator === '-' ){
        alert(subtract(operand1,operand2))
    }
    else if (operator === 'x' ){
        alert(multiply(operand1,operand2))
    }
    else if (operator === '/' ){
        alert(divide(operand1,operand2))
    }
}

let displayValue = "";

function updateDisplay(number){
    displayValue += number
    const para = document.querySelector('.text')
    para.textContent = displayValue
}

function clearDisplay(){
    displayValue = '';
    const para = document.querySelector('.text')
    para.textContent = displayValue;
}

const num1 = document.querySelector('#num1');
num1.addEventListener('click', () => {
    updateDisplay('1');
});

const num2 = document.querySelector('#num2');
num2.addEventListener('click', () => {
    updateDisplay('2');
});

const num3 = document.querySelector('#num3');
num3.addEventListener('click', () => {
    updateDisplay('3');
});

const num4 = document.querySelector('#num4');
num4.addEventListener('click', () => {
    updateDisplay('4');
});

const num5 = document.querySelector('#num5');
num5.addEventListener('click', () => {
    updateDisplay('5');
});

const num6 = document.querySelector('#num6');
num6.addEventListener('click', () => {
    updateDisplay('6');
});

const num7 = document.querySelector('#num7');
num7.addEventListener('click', () => {
    updateDisplay('7');
});

const num8 = document.querySelector('#num8');
num8.addEventListener('click', () => {
    updateDisplay('8');
});

const num9 = document.querySelector('#num9');
num9.addEventListener('click', () => {
    updateDisplay('9');
});

const num0 = document.querySelector('#num0');
num0.addEventListener('click', () => {
    updateDisplay('0');
});


const addButton = document.querySelector('#add')
addButton.addEventListener('click',() =>{
    updateDisplay('+')
});

const subtractButton = document.querySelector('#subtract')
subtractButton.addEventListener('click',() =>{
    updateDisplay('-')
});

const multiplyButton = document.querySelector('#multiply')
multiplyButton.addEventListener('click',() =>{
    updateDisplay('x')
});

const divideButton = document.querySelector('#divide')
divideButton.addEventListener('click',() =>{
    updateDisplay('÷')
});

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () =>{
    clearDisplay()
})