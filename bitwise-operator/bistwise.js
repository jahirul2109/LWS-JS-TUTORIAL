let a = 120;
let b = a.toString(2);
console.log(b);

console.log(b); // Output : 1111000;
let c = parseInt (b,2); 
console.log(c);  // Output 120;
let d = 90;
let e = d.toString(2);

let numB = parseInt (b, 2) // to decimal
let numE = parseInt (e, 2) //to decimal
let totalBin = numB & numE; 
// let totalBin = numB | numE; 
// let totalBin =  ~numB ; 
// let totalBin = numB << 1; 
// let totalBin = numB >> 1; 
console.log(totalBin); // Output: 88
console.log(totalBin.toString (2)); // Output: 1011000




// console.log(parseInt("1111000", 2)); // output: 120;
// console.log(Number("0b1111000"));  // output : 120;

// let shuvo = 11.98;
// let ja =  shuvo.toString(2);
// console.log(ja);


