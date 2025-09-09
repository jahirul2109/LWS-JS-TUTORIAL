// Mutable mane value chage kora jai 
const person = {
    name: "jahieul",
    age: 20,
    class : "Honuss"
}
person.name = "jahirul";
console.log(person);

const person2 = person;
person.age = 22;
console.log(person,person2);


// Immutable mane value chage korle pura variable er value e chage hoe jai 
let buiraPerson = 23;
buiraPerson = 20;
console.log(buiraPerson);

