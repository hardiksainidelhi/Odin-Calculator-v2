
let numberA
let numberB
let operation

function add(a,b){
    return +a + +b
}

function subtract(a,b){
    return +a - +b
}

function multiply(a,b){
    return a*b
}
function divide(a,b){
    return +a / +b
}

function operate(numberA,numberB,operation){
    switch (operation) {
        case '+':
            return add(numberA,numberB)
        case '-':
            return subtract(numberA,numberB)
        case '*':
            return multiply(numberA,numberB)
        case '/':
            return Math.round(divide(numberA,numberB)*100)/100
    }
}
