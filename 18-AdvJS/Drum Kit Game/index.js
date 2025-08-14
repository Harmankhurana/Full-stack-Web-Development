let buttons = document.querySelectorAll("button");

buttons.forEach(function (button){
    button.addEventListener("click" , function (){
        alert("I got clicked");
    });
});        

