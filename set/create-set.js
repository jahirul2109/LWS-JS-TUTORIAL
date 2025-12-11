let number = new Set (["a", "b", "c", "d"]);
number.add ("f"); // added a new value at set 
console.log(number);

let letter = new Set ();
const x = "a";
const y = "b";
const z = "c";
letter.add (x);
letter.add (y); // added new variable at set
letter.add (z);

// let text = ""; // Output:abc
// letter.forEach ( function (values) {
//   text += values;
// } )
// console.log(text);

// let txt = ""; //Output:abc
// for (const me of letter.values() ){
//  txt+=me;
// } 
// console.log(txt);

console.log(letter.values()); // Output : A iterator set ([Set Iterator] { 'a', 'b', 'c' })


// importent
// 1. Set er khetre variable cosnt die difine kora e better (LWS)
// 2. Ak e rokom value set a 2 bar difine hoi nh 
// 3. Array er moto set k iterat korar jonnno ahse [ forEach() ]
// 4. jekono Iterator er moddo die "forOf-loop" kora jai amra chaile "value() " use kore forOf o use korte pari 

