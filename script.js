const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// change numbers that displayed on screen. Function "updateScreen" for update the value
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.value = number
}

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
// Running function Calculate when button (=) is clicked dan update the screen
const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener('click', () => {
    // console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber);
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


const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

// Click event AC button
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}


// Click event for element button class "decimal"
const decimal = document.querySelector(".decimal")
decimal.addEventListener('click', (event) => {
    // console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

// calculation percentage num
const percentage = document.querySelector(".percentage")
const inputPercentage = (number) => {
    currentNumber = parseFloat(number) / 100
}

percentage.addEventListener('click', (event) => {
    inputPercentage(currentNumber)
    updateScreen(currentNumber)
})


