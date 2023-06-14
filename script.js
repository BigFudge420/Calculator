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
let lastModifiedArray;

function updateOperands(){
    if(numInputs.length === 0){
        return operands
    }
    else {
        let numberString = numInputs.join('')
        operands.push(Number(numberString))
        numInputs = []
        return operands
    }   
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
        const roundedResult = (Number.isInteger(result) || typeof result === "string") ? result : result.toFixed(2);
        displayValue = roundedResult.toString();
        const para = document.querySelector('.text');
        para.textContent = displayValue;
        numInputs = [result];
        operands = [];
        operators = [];
    } else {
        displayValue = ''; 
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
            default:
                result = operand;
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
        updateAndSetDecimal('.')
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

    else if (key === 'Backspace'){
        handleBackspace();
    }
    
    console.log(`Operands: ${operands}`)
    console.log(`Inputs: ${numInputs}`)
}

document.addEventListener('keydown', handleKeyPress)

function handleBackspace(){

      if(displayValue.charAt(displayValue.length - 1) === operators[operators.length - 1]){
        operators.pop();
      } 

      else if(numInputs.length > 0){
        let lastElementChars = [];
        let lastElement = numInputs[numInputs.length - 1];
        let lastElementString = String(lastElement)
        let characters = lastElementString.split('')
        lastElementChars.push(...characters);
        lastElementChars.pop()
 
        if (lastElementChars.length > 0){
            let poppedNumber = Number(lastElementChars.join(''));
            numInputs.pop();
            numInputs.push(poppedNumber);
        }
        else {
            numInputs.pop()
        }
      }

      else if (operands.length > 0 && numInputs.length === 0) {
        let lastElementChars = [];
        let lastElement = operands[operands.length - 1];
        let lastElementString = String(lastElement)
        let characters = lastElementString.split('')
        lastElementChars.push(...characters);
        lastElementChars.pop()
 
        if (lastElementChars.length > 0){
            let poppedNumber = Number(lastElementChars.join(''));
            operands.pop();
            operands.push(poppedNumber);
        }
        else {
            operands.pop()
        }
      }

      if (displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
        const para = document.querySelector('.text');
        para.textContent = displayValue;
      }    
}

let displayValue = "";
  
function updateDisplay(number) {
    displayValue += number;
    const para = document.querySelector('.text');
    para.textContent = displayValue;
    return displayValue;
}

function updateAndSetDecimal(dot){
    if (dot === '.'){
        if (numInputs.includes('.')){
            return;
        }
        else if(numInputs.length === 0 || displayValue.length === 0){
            displayValue = 0
            setNumInput(0)
            setNumInput('.')
            updateDisplay('.')
        }
        else {
            setNumInput('.')
            updateDisplay('.')
        }
    }
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
    updateAndSetDecimal('.')
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

const backspaceButton = document.querySelector('#backspace')
backspaceButton.addEventListener('click', () => {
    handleBackspace()
})

const btns = document.querySelectorAll('.btn')
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(`Operands: ${operands}`)
    console.log(`Inputs: ${numInputs}`)
  })
})