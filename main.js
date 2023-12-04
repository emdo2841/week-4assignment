let message = document.getElementById("header").innerHTML = "welcome to my first javascript code";
let control = parseInt(document.getElementById("number").value);
function myfunction(){
    if (control%2 == 0) {
        document.getElementById("para").innerHTML = "the Number is an even number";
    } else {
        document.getElementById("para").innerHTML = "the Number is not an even number";
    };
}
// for loop that prints the number 1 to 10
let num = []
for (let index = 1; index <= 10; index++) {   
    num += index + " ";
}
document.getElementById("ulist").innerHTML = num;

alert(message)
let num1 = 5;
let num2 = 7;
let str = "Hello World!"
console.log (str)

let addNumber = num1 + num2;
console.log (addNumber)
console.log(num1 * num2)
console.log(num2 - num1)

// function tha takes two parameter and return the sum
function add(a,b) {
    return a+b;
}
let result = add(4, 3);
document.getElementById("demo").innerHTML = "the sum is" + result;

// declaring an array fruit
let fruits = ["mango", "pawpaw", "banana", "orange", "pineapple"]

const Person = {name:"emmanuel", skills:"web-dev"}



// higher order function
const isEven = (n) => {
    return n % 2 == 0;
  }
  
  let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
  }
  
  // Pass in isEven as the callback function
  printMsg(isEven, 4); 
  // Prints: The number 4 is an even number: True.