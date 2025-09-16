// Getter 
const newCar = {
    name : "BMW",
    model : "17",
    maxSpeed : "350KM",
 get carDetials () {
 return this.model + this.maxSpeed + this.name
 }
};
console.log(newCar.carDetials);

//Setter
const person = {
    fName : "jahirul",
    lName : "islam",
    age : 20,
    language : "",
    set laang (laang) {
        this.language = laang;
    }
}
person.laang = "bn";
console.log(person);

// Jodi object er scope thake bahire getter/setter difine kora lage tahoile ai method ta use kora hoi 
Object.defineProperty (person, "det", {
    get : function () {
        return this.fName + ' ' + this.lName + ' ' + this.age
    }
}) 
console.log(person.det);

