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

