const person = {
    fullName : function (city , country ) {
    return this.firstName + " " + this.lastName + "\n" + `City : ${city}\n Country : ${country} ` ;
    }
}
const person1 = {
    firstName : "Jahirul",
    lastName : "islam"
}
const person2 = {
    firstName : "Rabal",
    lastName : "ahmed"
}
let result = person.fullName(person1); // Output : Undifend 
let result1 = person.fullName.call(person1 , "Dhaka", "Bangladesh"); // Output : Jahirul Islam 
console.log(result);
console.log(result1);

// Note : aikhane "call()" method nh use korle kintu person1 er value this hbe nh 
// Note : Amra chaile fullName er perametar die seta person1 die exicute korte pari 
// NOte : "call(perosn1, "Dhaka", "Bangladesh")" aivabe e argument er 1st value object hbe ar porer 2ta perametar hbe 
