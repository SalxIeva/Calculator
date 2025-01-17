// console.log('Hello');

// Create a add function
const add = (a, b) => a + b;
// console.log(add(3, 4));

// Create a subtract function
const subtract = (a, b) => a - b;
// console.log(subtract(4, 2));

// Create a multiply function
const multiply = (a, b) => a * b;
// console.log(multiply(2, 2));

// Create a divide function
const divide = (a, b) => a / b;
// console.log(divide(4, 2));


// Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. 

let firstNum = '';
let operator = '';
let secondNum = '';

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operate = () => {
    const a = parseFloat(firstNum);
    const b = parseFloat(secondNum);
    let result;
    if (operator === '+') {
       result = add(a, b);
    } else if (operator === '-') {
        result = subtract(a, b);
    } else if (operator === '*') {
        result = multiply(a, b);
    } else if (operator === '/') {
        result = divide(a, b);
    } else {
        result = 'Error';
    }
    resultInput.value = result;
    console.log(`Result: ${result}`);

    // Resetting values og firstNum, operator and secondNum after result
    firstNum = '';
    operator = '';
    secondNum = '';

}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
const resultInput = document.querySelector("#result");
const display = (val) => {
    resultInput.value += val;
}

const buttons = document.querySelectorAll("input[type='button']");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const value = button.value;

        if (button.classList.contains("operator")) {
            if (firstNum && operator && resultInput.value) {
                // Perform an ongoing operation first
                secondNum = resultInput.value;
                operate();
                firstNum = resultInput.value;
                console.log(`firstNum: ${firstNum}`);
                resultInput.value = '';
            } else {
                firstNum = resultInput.value;
                console.log(`firstNum: ${firstNum}`);
                resultInput.value = '';
            }
        
            operator = value;
            console.log(`operator: ${operator}`);

        } else if (value === '=') {
            secondNum = resultInput.value;
            console.log(`secondNum: ${secondNum}`);
            operate();
        } else if (value === 'C') {
            resultInput.value = '';
            firstNum = '';
            operator = '';
            secondNum = '';
        } else {
            display(value);
        }
    })
});

// Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
