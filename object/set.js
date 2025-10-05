// Set return only unique output example if you diclear samilar  value more time whatever set return only unique value  
const myset = new Set ();

myset.add(5).add('jahirul').add("Hello World").add(5);
// myset.clear('jahirul');
console.log(myset);
console.log(myset.size);
// console.log(myset.delete(5));
console.log(myset.has(5))


// Arry convert to set 
// Only iterable variable convert in Set **
const myArry = [ 1, 2, 3];
let conSet = new Set ( myArry);
console.log(conSet);

// Set to Arry convert 
const newSet = new Set (['a', 'b', 'c']);
let someSet = ([...newSet]);
console.log(typeof someSet);

console.log(...newSet); // output single value
console.log([...newSet]);// output arry 


// Practice-1
const peraSet = new Set (['a', 'b', 'c', 'd']);
let amrLoop = peraSet.values();
let output = '';
for (let a of amrLoop){
   output += a;
    console.log(a);

}
// Practice-2
const myEntries = new Set(['A', 'b', 'c', 'e']);
// check typeof
console.log(typeof myEntries);// op: Object
console.log( myEntries instanceof Set); // Op: true

  let txt = ""
for (let x of myEntries){
   txt += x;
   console.log(x);
   
}
// console.log(Object.entries(myEntries)); // If use object then use this method







