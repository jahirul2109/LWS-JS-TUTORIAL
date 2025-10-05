// How to difine a Map system-1
const newMaps = new Map ([
    ["salary", 1000],
    ['dailyCost', 30],
    ['mothlyCost',3000],
    ['familyCost',7000]
])
console.log(newMaps);

let monthlyCostDetails = "";
newMaps.forEach (function bill(values, key) {
    monthlyCostDetails += key + " = " + values + "\n" ;
})
console.log(monthlyCostDetails);


// How to difine a Map system-2
const furits = new Map();
furits.set ("apple", 500);
furits.set ("Orange", 320);
furits.set ("Pineapple", 200);
console.log(furits);

let fuirtsSammary = "";
furits.forEach(function (price, name ) {
    fuirtsSammary += (`${name} Kg ${price} Tk \n`)

})
console.log(fuirtsSammary);
console.log(furits.get('apple'));
console.log(furits instanceof Map)

// Use forOf
 let foodName = ''; 
for ( let z of furits.keys()){
 foodName += z;
}
console.log(foodName);

