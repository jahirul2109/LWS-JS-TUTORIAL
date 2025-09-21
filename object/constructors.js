function Person ( first , last , Age) { // Construction Function ( Functon Name always capitale latter valo)
    this.firstName = first,
    this.lastName = last,
    this.age = Age,
    this.fullName = function () {
        return this.firstName + " " + this.lastName 
    }
    
};
const shuvo = new Person ( "jahirul", "islam", 20);
const rabal = new Person ("Rabiul", "islam", 20);
const yasin = new Person ( "Yasin", "Arafat", 21);
const anik = new Person ("Anika", "Apa", 20);
shuvo.country = "Bangladesh";
console.log(shuvo);
 Person.prototype.religion = "islam";
 console.dir(Person.religion);
 



