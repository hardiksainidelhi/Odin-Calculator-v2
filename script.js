
let numberA
let numberB
let operation
let operatorButtonActive

function add(a, b) {
    return +a + +b
}

function subtract(a, b) {
    return +a - +b
}

function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return +a / +b
}

function operate(numberA, numberB, operation) {
    let result;
    switch (operation) {
        case '+':
            result = add(numberA, numberB)
            break
        case '-':
            result = subtract(numberA, numberB)
            break
        case '*':
            result = multiply(numberA, numberB)
            break
        case '/':
            result = divide(numberA, numberB)
            break
    }
    return Math.round(result * Math.pow(10, 5)) / Math.pow(10, 5)
}

function updateDisplay(event) {
    if (display.innerText === '0' || operatorButtonActive) {
        display.innerText = ''
        operatorButtonActive = false
    }
    display.innerText += event.target.innerText
}

function setDisplay(num) {
    display.innerText = num
}

function getDisplayNumber() {
    return +display.innerText
}

function clearDisplay() {
    display.innerText = '0'
}

function allClear() {
    operation = null
    numberA = null
    numberB = null
}

function setNumberAndOperator(event) {
    numberA = getDisplayNumber()
    operation = event.target.innerText
    clearDisplay()
}

function compute(event) {
    numberB = getDisplayNumber()
    if (!(numberB == null || numberA == null || operation == null)) {
        const result = operate(numberA, numberB, operation)
        setDisplay(result)
        allClear()
        operatorButtonActive = true
    }
}

const display = document.querySelector('#calc-display')
const numButtons = document.querySelectorAll('.num-button')
const operationButtons = document.querySelectorAll('.operation-button')
const operateButton = document.querySelector('#operate')
const clearButton = document.querySelector('#C')
const allClearButton = document.querySelector('#AC')
const signButton = document.querySelector('#sign')
const decimalButton = document.querySelector('#decimal')

signButton.addEventListener('click', event => {
    if (!(operatorButtonActive)) {
        display.innerText = - +display.innerText
    }
})

decimalButton.addEventListener('click', event => {
    if (!(operatorButtonActive)) {
        let displayNumber = display.innerText
        if (!(displayNumber.includes('.'))) display.innerText += '.'
    }
})

clearButton.addEventListener('click', event => clearDisplay())
allClearButton.addEventListener('click', event => {
    allClear()
    clearDisplay()
})

numButtons.forEach(btn => {
    btn.addEventListener('click', updateDisplay)
})

operationButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        if (!(operation)) setNumberAndOperator(event)
        else {
            if (!(operatorButtonActive)) {
                numberB = getDisplayNumber()
                const result = operate(numberA, numberB, operation)
                console.log(`${numberA} ${operation} ${numberB} = ${result}`)
                numberA = result
                setDisplay(numberA)
                operatorButtonActive = true
            }
            operation = event.target.innerText
        }
    })
})

operateButton.addEventListener('click', compute)