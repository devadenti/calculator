const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

// change numbers that displayed on screen. Function "updateScreen" for update the value
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

//running the function "updateScreen" using event.target.value as argument when button is clicked
// const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

//calculation
let prevNumber = ''
let calculationOperator = ''
let currentNumber ='0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//Click event for operator button
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

//Click event for equal button
const equalSign = document.querySelector('.equal-sign')

// Running function Calculate when button (=) is clicked dan update the screen
equalSign.addEventListener('click', () => {
    // console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

//function Calculate
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}


// Click event AC button

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

// Click event element button class "decimal"
inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    // console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
