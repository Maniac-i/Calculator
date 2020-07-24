let numberString= '';

const numberButtons = document.querySelectorAll('.number');
const displayContent = document.getElementById('display-content');
const operatorButtons = document.querySelectorAll('.operator');
const clearButtons = document.getElementById('clear');

//set elements text content as variable
function getId(e) {
    let id = e.target.textContent;
    return id;
}
//display number and store in array
numberButtons.forEach((button) => {
    button.addEventListener('click',(e) => {
    id = getId(e);
    numberString += id;
    displayContent.textContent += `${id}`;
})
})
//store operator in array
operatorButtons.forEach((button) => {
    button.addEventListener('click',(e) => {
    id = getId(e);
    numberString += id;
})
})
//clear button
clearButtons.addEventListener('click',(e) => {
        displayContent.textContent = '';
        numberArray = [];
})

//addition function
function add(a,b) {
    return a+b;      
}

//subraction function
function subtract(a,b) {
    return a-b;
}

//multiply function
function multiply(a,b) {
    return a*b;      
}

//divide function
function divide(a,b) {
    if (b === 0) { 
        alert ('Cant divide by 0')
        return;
    } else { 
        return a/b;
    }
}

function operate(operator,a,b) {
    if(operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === 'x') {
        return multiply(a,b);
    } else if (operator === '/') {
        return divide(a,b);
    } else { alert('Something went wrong')
    }
}