// jQuery is a fast, small, and feature-rich JavaScript library. Its primary purpose is to simplify client-side scripting of HTML, 
// making tasks like HTML document traversal and manipulation, event handling, animation, and Ajax interactions much simpler.
// In JS for selecting Something we use 
document.querySelector("h1");

// But in jQuery we just write 
jQuery("h1");

// And for more short 
$("h1").css("color" , "red");

// For selecting button element 
document.querySelector("button");
// Or 
$("button");

// Manipulating Text with jQuery 
// Changing Hello to Good Bye
$("h1").text("Good Bye");      

// Including Heyyy text in the button
$("button").text("Heyyy");

// Manipulating Attributes with jQuery 
// Changing anchore tag URL to another URL
$("a").attr("href", "https://www.yahoo.com");

// Adding Event Listeners with jQuery 
// For this callback function to execute I have to write jQuery URL in the Head 
$("h1").click(function(){
    $("h1").css("color" , "purple");
});

// Adding and Removing elements with jQuery
$("h1").before("<button>New Button</button>");   // before the h1 element

$("h1").after("<button>New Button</button>");    // after the h1 element

$("button").remove();   // Removing all the buttons

// Website Animations with jQuery 
$("button").on("click" , function(){
    $("h1").hide();
});

$("button").on("click" , function(){
    $("h1").toggle();
});

$("button").on("click" , function(){
    $("h1").fadeOut();
});