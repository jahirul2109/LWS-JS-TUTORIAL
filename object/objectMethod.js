const person = {
    firstName : 'Jahirul',
    lastName : "Islam",
    id : 2109,
    fullName : function () {
        return this.firstName + " " + this.lastName ;
    }
    
}
console.log( person.fullName());
console.log(typeof person.fullName);
console.log( person.fullName);
console.log(typeof person.fullName());

