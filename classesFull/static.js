class Person {
    constructor (flName , age ) {
    this.fullName = flName;
    this.age = age;
    }
   static personInfo () {
        return `This is ${this.fullName} He is ${this.age} years Old`
    }
}
// console.log(Person.personInfo('jahirul', 20));

// const coustomerDtl = new Person ("Jahirul Islam ", 20)
// console.log(coustomerDtl.personInfo());

class ValidPerson extends Person {
    constructor (fullName,age) {
        super (fullName,age)
    }
   finllay () {
        return this.personInfo () ;
    }
}
// const myName = new ValidPerson ("jahirul islam", 20)
// console.log(myName.finllay())
Person.fullName = "jahirul islam ";
Person.age = 20
console.log(ValidPerson.personInfo())

