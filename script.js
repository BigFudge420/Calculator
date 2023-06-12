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
    if (b === 0){
        return 'Yea sure keep dreaming'
    }
    else {
        return a/b
    }
}

let operands = []
let operators = []

function setOperator(selectedOperator) {
    operators.push(selectedOperator)
    return operators
}

function operate() {
    if (operands.length >= 2 && operators.length > 0) {
        const result = calculateResult();
        displayValue = result.toString();
        const para = document.querySelector('.text');
        para.textContent = displayValue;
        operands = [result];
    } else {
        displayValue = ''; // Clear the display if there are not enough operands or operator
    }
}


function calculateResult(){
    
    const [a, b] = operands.slice(-2)
    
    for (i = 0; i <= operators.length - 1; i++){
        if (operators.includes('+')){
            operators.shift()
            return add(a,b)
        }
        else if (operators.includes('-')){
            operators.shift()
            return subtract(a,b)
        } 
        else if (operators.includes('x')){
            operators.shift()
            return multiply(a,b)
        }
        else if(operators.includes('÷')){
            operators.shift()
            return divide(a,b)
        }
    }


    // switch(operator){
    //     case '+':
    //         return add(a,b);
    //         break;
    //     case '-':
    //         return subtract(a,b);
    //         break;
    //     case 'x':
    //         return multiply(a,b);
    //         break;
    //     case '÷':
    //         return divide(a,b);
    //         break;
    // }
    
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
    operands.push(1);
});

const num2 = document.querySelector('#num2');
num2.addEventListener('click', () => {
    updateDisplay('2');
    operands.push(2);

});

const num3 = document.querySelector('#num3');
num3.addEventListener('click', () => {
    updateDisplay('3');
    operands.push(3);

});

const num4 = document.querySelector('#num4');
num4.addEventListener('click', () => {
    updateDisplay('4');
    operands.push(4);

});

const num5 = document.querySelector('#num5');
num5.addEventListener('click', () => {
    updateDisplay('5');
    operands.push(5);

});

const num6 = document.querySelector('#num6');
num6.addEventListener('click', () => {
    updateDisplay('6');
    operands.push(6);

});

const num7 = document.querySelector('#num7');
num7.addEventListener('click', () => {
    updateDisplay('7');
    operands.push(7);

});

const num8 = document.querySelector('#num8');
num8.addEventListener('click', () => {
    updateDisplay('8');
    operands.push(8);

});

const num9 = document.querySelector('#num9');
num9.addEventListener('click', () => {
    updateDisplay('9');
    operands.push(9);

});

const num0 = document.querySelector('#num0');
num0.addEventListener('click', () => {
    updateDisplay('0');
    operands.push(0);

});


const addButton = document.querySelector('#add')
addButton.addEventListener('click',() =>{
    updateDisplay('+')
    setOperator('+')
});

const subtractButton = document.querySelector('#subtract')
subtractButton.addEventListener('click',() =>{
    updateDisplay('-')
    setOperator('-')
});

const multiplyButton = document.querySelector('#multiply')
multiplyButton.addEventListener('click',() =>{
    updateDisplay('x')
    setOperator('x')
});

const divideButton = document.querySelector('#divide')
divideButton.addEventListener('click',() =>{
    updateDisplay('÷')
    setOperator('÷')
});
    
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clearDisplay();
    operators = [];
    operands = [];
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => {
    operate();
})

const btns = document.querySelectorAll('.btn')
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(operators)
    console.log(operands)
  })
})
