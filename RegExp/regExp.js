let a = "I joined a fast food stall";
let b = a.search("food");
console.log(b);  // output: 16;

//Use a regular expression to do a case-insensitive search for "Food" in a string:
let c = a.search (/Food/i);
console.log(c);

let replc = a.replace("food", "Jank")
console.log(replc);

let caseSen = a.replace (/Fast/i , "Jank");
console.log(caseSen);


//✅ Match পাওয়া গেলে: Array object (যার মধ্যে extra property থাকে)।
//❌ Match না পেলে: null।
// let match = "My name is Jahirul Islam Shuvo";
// let res = match.match ("name")
// console.log(res);

let match = "1, 2, 3, 4, 5, 6, 7";
let res = match.match (/[1-4]/g)
console.log(res);


let text = "Is this\n all there\n is ?";
let result = text.match(/is/gi); // g flag thakle noraml array returns kore kono proparty thake nh 
console.log(result);





let tex = "123456789";

let resul = tex.match(/[1-4]/g);
console.log(resul);

let color = "Black, white, red, green, yellow.";

let colotMatch = color.match(/(red|green|blue)/g);
console.log(colotMatch);

let tt = "Give 100%!";

let re = tt.match(/\d/g);
console.log(re);

let hl = "HELLO, LOOK AT YOU!";

let re00sult = hl.search(/\bLO/);
// let result2 = text2.search(/LO\b/);
console.log(re00sult);


let text1 = "Hello World!";

let result1 = text1.match(/[Hd]/g);
console.log(result1);

let text2 = "Is this all there is?";

let result2 = text2.match(/\s/g);
console.log(result2);

let test = /e/.exec("Amr sonar bangla ami tomai valobasi")
 console.log(test);
  let message = "";
  let x = "12";

  
  

