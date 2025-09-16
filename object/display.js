const person  = {
    Name : "Jahirul Islam",
    age : 20 ,
    City : "Dhaka"
};

        // Object display system-1
let detiels = "";
for ( let x in person){
    detiels += person[x];
}
console.log(detiels);
// document.getElementById("demo").innerHTML = person

        // Object display system-2
let myArry = Object.values(person);
let shownHtml = "";
for ( let a of myArry){
    shownHtml += a;
    console.log(a);   
}
// document.getElementById("demo").innerHTML= shownHtml;
console.log(Object.values(person));
// document.getElementById("demo").innerHTML = Object.values(person);

        //Object display system-3
// document.getElementById("demo").innerHTML = person.Name + " Is " + person.age + "Years Old";

       // Object display system-4 
       




