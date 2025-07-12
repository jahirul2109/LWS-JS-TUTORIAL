const newMap = new Map ([
    ["Name:", "jaihirul"],
    ["Roll:", 2109],
    ["Class:", 12]
    // key: "Name:"value: "jaihirul"
])
console.log(newMap);

//Create a map
let furits = new Map ();

// Set map value
furits.set ("Apple", 120);
furits.set ("Orange", 300);
furits.set ("Pineapple", 220);
furits.set ("Greep", 150);
console.log(furits);
console.log(typeof furits);

// Use forOf loop 
let txt = "";
for ( let x of furits.entries()){
    txt += x;
    console.log(x);
}

console.log(txt);


// Use forEeach loop 
let text = "";
furits.forEach(function (value, key) {
 text += key + " = " + value + "\n";
})
console.log( text);
console.log(typeof text);

// Important topic
// 1. Map a jekono doroner Data type er key define kora jai kintu object a only "String" Data type key define kora jai 
// 2. Map a kno key er value pawar jonno "get()" methood use kora hoi.
// 3. Map has a size property when we see map length then we use size property. 
// 4. If you went delete a key value pear then you use the " delete()" method.
// 5. if a key exsits in map the "has()" method retrun true otherwaise retruns false
// 6. This is iterabale object so we used forOf loop

// Example :
// a. console.log(furits.has("apple"));
// b. furits.delete("Pineapple")
// c. console.log(furits.get("Apple"));
// d. console.log(furits.entries());

