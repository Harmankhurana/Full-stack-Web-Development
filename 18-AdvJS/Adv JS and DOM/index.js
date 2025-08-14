// Creating a calculator which takes a function as an argument
function add(num1, num2){
    return num1 + num2;
}

function multiply(num1 , num2){
    return num1 * num2;
}

function substact(num1 , num2){
    return num1 - num2;
}

function divide(num1 , num2){
    return num1 / num2;
}

function calculator(num1, num2 , operation){
    return operation(num1 , num2);
}
