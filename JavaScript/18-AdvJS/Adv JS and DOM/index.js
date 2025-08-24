// Creating a calculator which takes a function as an argument (higher order function)
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


// Creating an object for bell boys in my hotel
let bellboy1 = {
    name : "Sam",
    yearsOfExperience : 5,
    cleaningReprtoire : ["bathroom" , "bedrooms" , "kitchen"]
}

let bellboy2 = {
    name : "Timothy",
    yearsOfExperience : 12,
    cleaningReprtoire : ["bathroom"]
}

let bellboy3 = {
    name : "Bob",
    yearsOfExperience : 3,
    cleaningReprtoire : ["bedrooms" , "kitchen"]
}
let bellboy4 = {
    name : "Robert",
    yearsOfExperience : 8,
    cleaningReprtoire : ["bathroom" , "bedrooms" , "kitchen"]
}

let bellboy5 = {
    name : "Mick",
    yearsOfExperience : 4,
    cleaningReprtoire : ["kitchen"]
}

// But this is really lengthy way to create objects 
// Rather i can just create a constructor function and make new bell boys 

function BellBoy(name, yearsOfExperience, cleaningReprtoire){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningReprtoire = cleaningReprtoire;
    this.clean = function () {     // It's a method
        alert("Cleaning in progress...");
    }
}

let bellBoy1 = new BellBoy("Sam", 5, ["bathroom" , "bedrooms" , "kitchen"]);
let bellBoy2 = new BellBoy("Timothy", 5, ["bathroom"]);

// bellBoy1.clean();