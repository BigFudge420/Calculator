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

let numInputs = []
let operands = []
let operators = []

function updateOperands(){
    let numberString = numInputs.join('')
    operands.push(Number(numberString))
    numInputs = []
    return operands   
}


function setOperator(selectedOperator) {
    operators.push(selectedOperator)
    return operators
}

function setNumInput(selectedInput){
    if ( selectedInput === '.'){
        if (numInputs.length === 0 || numInputs.includes('.')) {
            return;
        } 
        else if (!numInputs.includes('.')){
            numInputs.push(selectedInput)
        }
    }
    else {
        numInputs.push(Number(selectedInput))
        return numInputs
    }
}

function operate() {
    if (operands.length >= 2 && operators.length > 0) {
        const result = calculateResult();
        displayValue = result.toString();
        const para = document.querySelector('.text');
        para.textContent = displayValue;
        numInputs = [result];
        operands = []
        operators = []
    } else {
        displayValue = ''; // Clear the display if there are not enough operands or operator
    }
}


function calculateResult(){
    let result = operands[0]    
    for (i = 0; i < operators.length; i++){
        const operator = operators[i]
        const operand = operands[i+1]
        
        switch (operator){
            case '+':
              result = add(result, operand);
              break;
            case '-':
              result = subtract(result, operand);
              break;
            case 'x':
              result = multiply(result, operand);
              break;
            case '÷':
              result = divide(result, operand);
              break;
          }      
    }
    return result
}

function handleKeyPress(event){
    const key = event.key;
    console.log(`Key: ${key}`);

    if (/[0-9]/.test(key)){
        setNumInput(key)
        updateDisplay(key)
    }
    else if(/[+\-x/]/.test(key)){
        if (key === '/'){
            setOperator('÷')
            updateOperands()
            updateDisplay('÷')
        } 
        else {
            setOperator(key)
            updateOperands()
            updateDisplay(key)
        }
    }
    else if(key === '.'){
        setNumInput('.')
        updateDisplay('.')
    }
    else if(key === 'Enter'){
        updateOperands()
        operate()
    }
    else if(key === 'Escape'){
        clearDisplay();
        operators = [];
        numInputs = [];
        operands = [];
    }
}

document.addEventListener('keydown', handleKeyPress)

let displayValue = "";

function updateDisplay(number){
    if (number === '.'){
        if (displayValue.length === 0 || displayValue.includes('.')){
            return;
        }
        else if (!displayValue.includes('.')) {
            return displayValue += '.';
        }
    }
    else displayValue += number;
    
    const para = document.querySelector('.text')
    para.textContent = displayValue
}

function clearDisplay(){
    displayValue = '';
    const para = document.querySelector('.text')
    para.textContent = displayValue;
}


const numButtons = document.querySelectorAll('.numbers')
numButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    setNumInput(number)
    updateDisplay(number);
  });
}); 

const operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach((button) => {
    button.addEventListener('click',() => {
        const operator = button.textContent
        setOperator(operator)
        updateOperands()
        updateDisplay(operator)
    })
})
  
const dotButton = document.querySelector('#dot');
dotButton.addEventListener('click', () => {
  setNumInput('.');
  updateDisplay('.');
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clearDisplay();
    operators = [];
    numInputs = []
    operands = [];
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => {
    updateOperands()
    operate();
})

const btns = document.querySelectorAll('.btn')
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(`Operators: ${operators}`)
    console.log(`Operands: ${operands}`)
    console.log(`Inputs: ${numInputs}`)
    console.log(typeof displayValue)
  })
})
