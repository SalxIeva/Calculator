// console.log('Hello');

// Create a add function
const add = (a, b) => {
    const c = a + b;
    return c;
}

console.log(add(3, 4));

// Create a subtract function
const subtract = (a, b) => {
    const c = a - b;
    return c;
}

console.log(subtract(4, 2));

// Create a multiply function
const multiply = (a, b) => {
    const c = a * b;
    return c;
};

console.log(multiply(2, 2));

// Create a divide function
const divide = (a, b) => {
    const c = a / b;
    return c;
};

console.log(divide(4, 2));


// Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. 

let firstNum;
let operator;
let secondNum;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operate = (operator, firstNum, secondNum) => {
    if (operator === '+') {
        add(firstNum, secondNum);
    } else if (operator === '-') {
        subtract(firstNum, secondNum);
    } else if (operator === '*') {
        multiply(firstNum, secondNum);
    } else if (operator === '/') {
        divide(firstNum, secondNum);
    } else {
        return alert('Invalid action');
    }
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
const resultInput = document.querySelector("#result");
// resultInput.textContent = '78594';
const display = (val) => {
    resultInput.value += val;
    // console.log('result input : ' + resultInput.value)
}

const buttons = document.querySelectorAll("input[type='button']");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        console.log(button.value);
        // resultInput.textContent = button.value;
        console.log("resultInput: " + resultInput.textContent );
        display(button.value);
    })
})
// Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.