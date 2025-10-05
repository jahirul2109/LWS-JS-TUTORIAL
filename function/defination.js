// #1. How to function decleared ?
function newFuntion (perametaers){
    console.log("javaScript amon kn 🙂");   
}
newFuntion();
// Note : Decleared functon not are work immedaitly they are save for later use , and will be executed later when they are  invoked "Call Upon"
// Note : This is function decleartion .


// #2.What is function Expressions ?
const myFunction = function (){
    console.log("This is My Function and i will do enything");   
};
myFunction ();
//Note : when you decleared a function in variable then you did not need declerd others function Coz Variable name is your function name 
//Note : This type of function every called "Function Expressions"

// #3 Wthat is annonimuse function ??
const doSleeping = function (a, b) {return a + b};
let z = doSleeping (20,7);
console.log(z);


// #4. Function Costructor 
const conFunction = new Function ('a', 'b', 'return a + b');
console.log(conFunction(10,2));


// #5. Self invoking function / IIFE
( function() {
    console.log("I am a goris 🙂");
}) ();


// #6. Arrow function 
       // ES5
 const result = function (a, b ) {
    return a * b ;
 }
       // ES6
const result1 = (x,y) => (x + y) ;
const treat = () => 5 ;
console.log(treat());
console.log(result1(10, 40));
// Note : Arrow function do not have own this 
// Note : Arrow function are not hosited 


// #7. Arguments 
const test = function (a, b ) {
    console.log(arguments)
    console.log(arguments.length) // Output : 2
    console.log(arguments[0]) // Output : 4
    console.log(arguments[1]) // Output : 6
    return a * b 
}
test (4, 6);



