//Love Calculator with random numbers 
let firstName = prompt("What's your name,sweetheart");
let secondName = prompt("whom do you love3>");

let randomNum = Math.random();
randomNum = randomNum * 100;
randomNum = Math.floor(randomNum) + 1;
console.log(`Sweetheart your love percentage is ${randomNum}% with ${secondName}`);

if (randomNum > 80) {
    console.log(`Vola, You have an incredibal score, you really love ${secondName}`);
} else {
    console.log(`if number is less then its fine sweetheart, don't get disheartened i know you still love ${secondName}`);
}



// BMI Calculator 
function bmiCalculator (weight, height) {
    let bmi = weight / (height * height); 
    console.log(bmi);
    if(bmi <= 18.5){
        console.log(`Yout BMI is ${bmi}, so you are underweight`);
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        console.log(`Your BMI is ${bmi}, so you have a normal weight`);
    }
    else {
        console.log(`Your BMI is ${bmi}, so you are overweight`);
    }
}

bmiCalculator(75, 170);



// Leap year code challenge 
function isLeap(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log("Leap year");
            }
            else{
                console.log("Not Leap year");
            }
        }
        else {
            console.log("Leap year")
        }
    }
    else {
        console.log("Not Leap year");
    }


}

isLeap(2000);



// Creating an array which checks the name 
let guestList = ["Harman" , "Harkirat" , "Upkeerat" , "Manan" , "Striver"];
let guestName = prompt("What's your name??");

if (guestList.includes(guestName)){
    alert("Welcome to party");
} else {
    alert("Sorry, Your name is not in the guests list");
}



// Creating a Fizz Buzz game 
let arr = [];
let count = 1;

function fizzBuzz(){
    if (count % 3 == 0 && count % 5 == 0){
        arr.push("fizzbuzz");
    }
    else if (count % 3 === 0){
        arr.push("fizz");
    }
    else if (count % 5 == 0){
        arr.push("Buzz");
    }
    else {
        arr.push(count);
    }
    count ++;
    console.log(arr);
}

// call fizzBuzz(); functions multiple times


// Taking out the random name from an array - who's buying the lunch
function whosPaying(names){
    let numberOfPeople = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    let randomPerson = names[randomPersonPosition];

    console.log(`${randomPerson} is going to but lunch today`);
}

whosPaying(); 


