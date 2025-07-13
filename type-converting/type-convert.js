let a = String ("3.12");
console.log( typeof a);
console.log( Number ("Like a number but NaN"));
console.log(Number (""));
console.log(Number ("   "));

console.log(parseFloat (3.56)); // Outpur: 3.56
console.log(parseFloat (3.56)); // Outpur: 3.56


let x = "5"; // string
let y = + x; // Number
let j = "Jahirul"; // string
let i = + j ; // NaN
console.log(String (120)); // string
console.log((120).toString()); // string
console.log((128).toExponential()); // Number to Exponential string (akta number er value k exponential kore string kore dai ).
console.log((120).toFixed(2)); // Added additonal rounded value (10.6 = 11) and convert in string
console.log((120.5436).toPrecision(3)); // parameter er bitore joto value dibo toto ta digit rounded value ahkare string kore dibe 

let date = new Date();
let tmpdate = Number (date); 
console.log(tmpdate);
// let orgDate = new Date (tmpdate)
// console.log(orgDate);
console.log(date.getTime ());
console.log(String (date));
console.log(date.toISOString());
console.log(date.getDay()); // returns 0-6
console.log(date.getMonth()); // returns 0-11 
console.log(date.getFullYear()); // returns runing year
console.log(date.getTimezoneOffset()); // returns -360 (bangladesh time - 360 miniuts = UTC time)
console.log(date.getMinutes()); // returns how much time naw

console.log(Number (false)); // returns 0
console.log(Number (true)); // returns 1

console.log(String (false)); // retuns "false"
console.log(String (true)); // returns "true"

// 1. if you went  Date converting to number use this method "Number()"
// 2. if you went  Date converting to number use this method "getTime()"


//# Automatic type conversion 
 console.log("5" + null); // returns "5null"
 console.log( 5 + null); // returns 5
 console.log("5" + "2"); // returns "52"
 console.log("5" +  2); // returns "52"
 console.log("5" -  2); // returns 3
 console.log("5" *  2); // returns 10
 console.log( typeof new Date ());
 









