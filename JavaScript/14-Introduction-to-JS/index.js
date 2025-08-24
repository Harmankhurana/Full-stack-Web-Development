// Writing alert(); - used for popup on Browser
alert("hello");
alert("World!");


// Writing Variable 
var myName = "harman";
console.log(myName);


// Swapping variable values 
var a = 3; 
var b = 8;

var c = a; 
var a = b; 
var b = c;

console.log(a);
console.log(b);


// Greeting someone using string contenation and even using toUppercase();
let myName = "harman khuranan";
let message = "Hello";
let name = myName.toUpperCase();
console.log(`${message}, there ${name}`);


// Create a Dog age to Human age converter 
let dogAge = prompt("What's Your Dog age is");
let humanAge = (((dogAge - 2) * 4) + 21);
alert(`Your Dogs age will be ${humanAge} if he/she would be human`);


// https://stanford.edu/~cpiech/karel/ide.html - for understanding functions



//BMI calculator using function
function bmiCalculator(kg, m){
    let bmi = kg / (m * m) ; 
    return Math.round(bmi);
}

console.log(bmiCalculator(70 , 1.7));

