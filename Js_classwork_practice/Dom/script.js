
// console.log(document)

// let headingE1 = document.getElementById("heading");
let headingE1 = document.querySelector("#heading");

// headingE1.style.color = "red";
// headingE1.style.backgroundColor = "black";
// headingE1.textContent = "Hello World"; //change the content of that element

// headingE1.innerHTML += "<h2>this is a new element</h2>";


//Increament
let count = 0;
let btnE1 = document.querySelector("#btn");

let fun1 = () => {
    count++;
    headingE1.style.color = "green";
    headingE1.textContent = count;
}
btnE1.addEventListener("click", fun1);

//decreament
let btnE2 = document.querySelector("#btn2");

let fun2 = () => {
    count--;
    headingE1.style.color = "red";
    headingE1.textContent = count;
}
btnE2.addEventListener("click", fun2);

//reset
let btnE3 = document.querySelector("#btn3");

let fun3 = () => {
    count = 0;
    headingE1.style.color = "black";
    headingE1.textContent = count;
}
btnE3.addEventListener("click", fun3);


console.log(headingE1);

//box color change
let boxE1 = document.querySelector("#box");

let fun = () => {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    boxE1.style.backgroundColor = color;
};

boxE1.addEventListener("click", fun);