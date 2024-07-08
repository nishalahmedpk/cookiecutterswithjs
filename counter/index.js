console.log(`Program Start`);

// window.alert(`Alert`);
// window.alert(`Chicken`);

// Adding Text With JS

// document.getElementById("h1").textContent = "BigChungus"
// document.getElementById("p1").textContent="Big Biceps"

// Declaring a variable
// let x;
// let y = 10.55;

// Formatting
// window.alert(`You are worth $${y}`); 
// typeof x


// User Input

// 1. window Prompt
// let user = window.prompt("username?");
// console.log(user);

// 2. Textbox
// document.getElementById("msubmit").onclick = function() {
//     let username = document.getElementById("mtext").value;
//     document.getElementById("h1").textContent += " "+ username;
//     console.log(username)

// Type Conversion
// var = Number(var);


let count = 0;

document.getElementById("add").onclick = function() {
    document.getElementById("counter").textContent = ++count;
}

document.getElementById("subtract").onclick = function() {
    document.getElementById("counter").textContent = --count;
}

document.getElementById("reset").onclick = function() {
    document.getElementById("counter").textContent = 0;
    count=0;
}