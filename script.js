var array = [];
var tempNum = "";
var result = 0;
var displayText = document.querySelector("#display");
displayText.innerText = 0;

// press funtion will add numbers to array
function press(number) {
    if (    // if last index is an operation
        array[array.length - 1] == "+" ||
        array[array.length - 1] == "-" ||
        array[array.length - 1] == "/" ||
        array[array.length - 1] == "*"
    ) {
        if (array[array.length - 1] == "/" && number === 0) { // return error if divided by zero
            displayResult("error");
            array = [];
            tempNum = "";
            result = 0;
        } else displayResult(number);{ // push number to array if last index is an operation
        array.push(number);}
    } else if (array.length == 0) { // if array is empty (initial number) push to array
        tempNum += number;
        array.push(tempNum);
        displayResult(number);
    } else { // if array is not empty then add numbers next to each other by string var tempNum
        if (array) {
            tempNum = array.pop();
            tempNum += number;
            array.push(tempNum);
            displayResult(tempNum);
        }
    }
}

// clr function to clear all values
function clr() {
    array = [];
    tempNum = "";
    result = 0;
    displayResult(result);
}

// setOp function to push operation to array
function setOP(operator) {
    if (
        array.length !== 0 &&
        (array[array.length - 1] !== "-" ||
            array[array.length - 1] !== "+" ||
            array[array.length - 1] !== "/" ||
            array[array.length - 1] !== "*")
    ) {
        array.push(operator);
        tempNum = "";   

    }
}

// calulate function to calculate final result
function calculate() {
    if (array) {
        result = parseFloat(array[0]);
        for (let i = 2; i < array.length; i += 2) {
            if (array[i - 1] === "-") {
                result -= parseFloat(array[i]);
            } else if (array[i - 1] === "+") {
                result += parseFloat(array[i]);
            } else if (array[i - 1] === "*") {
                result *= parseFloat(array[i]);
            } else if (array[i - 1] === "/") {
                result /= parseFloat(array[i]);
            }
        }
    }
    displayResult(result.toFixed(3));
}

// displayResult function to display final result
function displayResult(number) {
    displayText.innerText = number;
}