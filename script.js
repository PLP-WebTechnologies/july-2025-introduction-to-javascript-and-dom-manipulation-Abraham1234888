/*Deliverables

A single project folder containing:

index.html — your structured HTML content

style.css — (optional) if you'd like to style your content

script.js — your JavaScript file including:

Variable declarations and conditionals (Part 1)

At least 2 custom functions (Part 2)

At least 2 loop examples (Part 3)

At least 3 DOM interactions (Part 4)

Each part of the assignment should be clearly commented and organized. */





//variable declarations and conditions

let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//2 custom functions

function greet(){
    console.log("Good morning Mr John!")
}    

 greet();


 function sum(one, three){
    return 2 + 6;

 }

 console.log(sum(3, 8));


 //2 loop Examples

 for (let i = 1;
    i <=5; i++){
        console.log("Number: " + i);
    }
 
 //While loop example  
 let count = 1;
 
 while (count <=5){
    console.log("count: " + count);
    count++;
 }


//3 DOM Interactions
function changeText(){
    let done = document.getElementById("done");
    done.textContent = "Welcome to a brand new world!"
    done.style.color = "green"
    done.style.backgroundColor = "yellow"
}